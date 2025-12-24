"use client";
import React, { useState } from "react";
import styles from "./Checkbox.module.scss";
import { CheckboxProps, CheckboxGroupProps } from "./checkbox.type";
import { FieldValues } from "react-hook-form";
import { IoMdCheckmark } from "react-icons/io";

// Single Checkbox Component
export function Checkbox<TFormValues extends FieldValues = FieldValues>({
  name,
  label,
  value,
  disabled = false,
  error,
  register,
  checked,
  onChange,
  className,
}: CheckboxProps<TFormValues>) {
  const [internalChecked, setInternalChecked] = useState(checked || false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setInternalChecked(isChecked);
    onChange?.(isChecked, value);
  };

  const isChecked = checked !== undefined ? checked : internalChecked;

  return (
    <label
      className={`${styles.checkboxWrapper} ${
        disabled ? styles.disabled : ""
      } ${className || ""}`}
    >
      <input
        type="checkbox"
        className={styles.checkboxInput}
        value={value}
        disabled={disabled}
        checked={isChecked}
        onChange={handleChange}
        {...(register && register( name as any))}
      />
      <span className={styles.checkboxCustom}>
        <IoMdCheckmark />
      </span>
      <span className={styles.checkboxLabel}>{label}</span>
    </label>
  );
}

// Checkbox Group Component (for Gender selection)
export function CheckboxGroup<TFormValues extends FieldValues = FieldValues>({
  name,
  label,
  options,
  error,
  disabled = false,
  register,
  selectedValues = [],
  onChange,
  className,
  direction = "horizontal",
}: CheckboxGroupProps<TFormValues>) {
  const [internalSelectedValues, setInternalSelectedValues] =
    useState<string[]>(selectedValues);

  const handleCheckboxChange = (isChecked: boolean, value: string) => {
    let newSelectedValues: string[];

    if (isChecked) {
      newSelectedValues = [...internalSelectedValues, value];
    } else {
      newSelectedValues = internalSelectedValues.filter((v) => v !== value);
    }

    setInternalSelectedValues(newSelectedValues);
    onChange?.(newSelectedValues);
  };

  const currentSelectedValues =
    selectedValues.length > 0 ? selectedValues : internalSelectedValues;

  return (
    <div className={`${styles.checkboxGroup} ${className || ""}`}>
      {label && <label className={styles.groupLabel}>{label}</label>}
      <div
        className={`${styles.checkboxList} ${
          direction === "vertical" ? styles.vertical : styles.horizontal
        }`}
      >
        {options.map((option) => (
          <Checkbox<TFormValues>
            key={option.value}
            name={name}
            label={option.label}
            value={option.value}
            disabled={disabled}
            checked={currentSelectedValues.includes(option.value)}
            onChange={handleCheckboxChange}
            register={register}
          />
        ))}
      </div>
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
}
