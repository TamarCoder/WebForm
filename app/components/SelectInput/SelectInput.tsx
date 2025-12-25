'use client'
import React, { useState, useRef, useEffect } from "react";
import { DropdownProps } from "./option";
import styles from "./SelectInput.module.scss";

const SelectInput: React.FC<DropdownProps> = ({
  options,
  lable,
  initialValue,
  error,
}) => {
  const [selectedValue, setSelectedValue] = useState<string>(
    initialValue || options[0]?.value || ""
  );
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const selectedOption = options.find((opt) => opt.value === selectedValue);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  return (
    <div className={styles.selectInput} ref={dropdownRef}>
      <label className={styles.label}>{lable}</label>
      <div className={styles.selectWrapper}>
        <div
          className={`${styles.select} ${isOpen ? styles.open : ""} ${error ? styles.error : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={styles.selectedText}>
            {selectedOption?.label || "Select an option"}
          </span>
          <span className={styles.arrow}>▼</span>
        </div>
        {isOpen && (
          <div className={styles.dropdown}>
            {options.map((option) => (
              <div
                key={option.value}
                className={`${styles.option} ${
                  option.value === selectedValue ? styles.selected : ""
                }`}
                onClick={() => handleSelect(option.value)}
              >
                {option.value === selectedValue && (
                  <span className={styles.checkmark}>✓</span>
                )}
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectInput;
