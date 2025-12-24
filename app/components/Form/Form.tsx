"use client";
import { FieldValues } from "react-hook-form";
import { Input } from "../Input/Input";
import styles from "./Form.module.scss";
import React, { ReactNode } from "react";
import { inputOption } from "../SelectInput/option";
import SelectInput from "../SelectInput/SelectInput";
import Calendar from "../Calendar/Calendar";
import Button from "../Button/Button";
export function Form() {
  const appOption: inputOption[] = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const [selectDate, setSelectDate] = React.useState<Date | null>(null);

  return (
    <form className={styles.formContainer}>
      <Input<FieldValues>
        label="Name input and simple text input"
        type="text"
        name="example"
        placeholder="Enter Name"
        className="outlineInput"
      />

      <Input<FieldValues>
        label="Name input and simple text input"
        type="text"
        name="example"
        placeholder="Enter Name"
        className="fillInput"
      />

      <SelectInput
        options={appOption}
        lable="Select an option"
        initialValue=""
      />

      <Calendar
        onChange={(date) => {
          setSelectDate(date);
          console.log("selected date:", date);
        }}
      />

       <Button    title="Submit" variants="primary" size="medium" type="button" children />
       <Button    title="Button" variants="secondary" size="medium" type="button" children />

    </form>
  );
}
