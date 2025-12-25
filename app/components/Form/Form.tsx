"use client";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";
import { MdAddAPhoto } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import styles from "./Form.module.scss";
import { inputOption } from "../SelectInput/option";
import { Input } from "../Input/Input";
import SelectInput from "../SelectInput/SelectInput";
import Calendar from "../Calendar/Calendar";
import { CheckboxGroup } from "../Checkbox/Checkbox";
import Button from "../Button/Button";

const APP_OPTIONS: inputOption[] = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const GENDER_OPTIONS = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];

export function Form() {
  const [selectDate, setSelectDate] = useState<Date | null>(null);
  const [selectedGender, setSelectedGender] = useState<string[]>([]);

  const handleDateChange = (date: Date) => {
    setSelectDate(date);
    console.log("selected date:", date);
  };

  const handleGenderChange = (values: string[]) => {
    setSelectedGender(values);
    console.log("Selected gender:", values);
  };

  return (
    <section className={styles.MainContainer}>
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <p className={styles.headline}>
            Already a Member?{" "}
            <a href="#" className={styles.signUp}>Sign Up</a>
          </p>
        </div>
        <div className={styles.headerContent}>
          <h1 className={styles.heading}>Sing Up</h1>
          <div className={styles.steps}>
            {[1, 2, 3].map((step, index) => (
              <React.Fragment key={step}>
                {index > 0 && <div className={styles.line} />}
                <p className={styles.activeStep}>{step}</p>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <form className={styles.formContainer}>
        <section className={styles.basicInfo}>
          <div className={styles.Inputdetails}>
            <h2 className={styles.headline}>Basic Details</h2>
            <Input<FieldValues>
              label="Full Name"
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              className="outlineInput"
            />
          </div>
          <div className={styles.photo}>
            <a href="#">
              <MdAddAPhoto className={styles.photoUpload} />
            </a>
          </div>
        </section>
        <section className={styles.locations}>
          <Input<FieldValues>
            label="Constituency"
            name="constituency"
            type="text"
            placeholder="Search Constituency"
            className="fillInput"
            iconPosition="right"
            icon={<FaLocationDot />}
          />
        </section>
        <section className={styles.workInfo}>
          <SelectInput options={APP_OPTIONS} lable="Select Party you work for" initialValue="" />
          <SelectInput options={APP_OPTIONS} lable="Position" initialValue="" />
        </section>
        <section className={styles.date}>
          <Calendar onChange={handleDateChange} />
          <CheckboxGroup<FieldValues>
            name="gender"
            label="Gender"
            options={GENDER_OPTIONS}
            selectedValues={selectedGender}
            onChange={handleGenderChange}
            direction="horizontal"
          />
        </section>
        <section className={styles.additional}>
          <label className={styles.messageLabel}>Message</label>
          <textarea
            className={styles.messageInput}
            placeholder="Enter your message"
            rows={8}
          />
        </section>
        <section className={styles.education}>
          <h2 className={styles.headline}>Education</h2>
          <div className={styles.educationInputs}>
            <Input<FieldValues> label="Degree" name="degree" type="text" placeholder="Enter your degree" className="outlineInput" />
            <Input<FieldValues> label="Institution" name="institution" type="text" placeholder="Enter your institution" className="outlineInput" />
          </div>
          <div className={styles.educationButtons}>
            <Calendar label="Gradutation Year" onChange={handleDateChange} />
            <div className={styles.actionButtons}>
              <Button variants="secondary" title="Cancel">Cancel</Button>
              <Button variants="primary" title="Save">Save</Button>
            </div>
          </div>
        </section>
        <Button variants="primary"  title="Submit" className={styles.submitButton}>Save and Continue</Button>
      </form>
    </section>
  );
}
