import { FieldValues } from "react-hook-form";
import { Input } from "../Input/Input";
import styles from "./Form.module.scss";
import React, { ReactNode } from "react";
import { FaRegLightbulb } from "react-icons/fa";
export function Form() {
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

      <Option/>
    </form>
  );
}
