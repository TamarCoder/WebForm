import { FieldValues } from "react-hook-form";
import { Input } from "../Input/Input";
import styles from "./Form.module.scss";
import React, { ReactNode } from "react";
import { FaRegLightbulb } from "react-icons/fa";
import { inputOption } from "../SelectInput/option";
import SelectInput from "../SelectInput/SelectInput";
import Calendar from "../Calendar/Calendar";
export function Form() {
  
  const appOption: inputOption[] = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  
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

      <Calendar/>
    </form>
  );
}
