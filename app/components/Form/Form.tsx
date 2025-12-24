"use client";
import styles from "./Form.module.scss";
import { inputOption } from "../SelectInput/option";
import { Input } from "../Input/Input";
import React from "react";
import { MdAddAPhoto } from "react-icons/md";
import { FieldValues } from "react-hook-form";
import { FaLocationDot } from "react-icons/fa6";
import SelectInput from "../SelectInput/SelectInput";
import Calendar from "../Calendar/Calendar";
import { CheckboxGroup } from "../Checkbox/Checkbox";

export function Form() {
  const appOption: inputOption[] = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

  const [selectDate, setSelectDate] = React.useState<Date | null>(null);
  const [selectedGender, setSelectedGender] = React.useState<string[]>([]);

  return (
    <section className={styles.MainContainer}>
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <p className={styles.headline}>
            Already a Member?{" "}
            <a href="#" className={styles.signUp}>
              Sign Up
            </a>
          </p>
        </div>
        <div className={styles.headerContent}>
          <h1 className={styles.heading}>Sing Up</h1>

          <div className={styles.steps}>
            <p className={styles.activeStep}>1</p>
            <div className={styles.line}></div>
            <p className={styles.activeStep}>2</p>
            <div className={styles.line}></div>
            <p className={styles.activeStep}>3</p>
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
          <SelectInput
            options={appOption}
            lable="Select Party you work for"
            initialValue=""
          />
          <SelectInput options={appOption} lable="Position" initialValue="" />
        </section>
        <section className={styles.date}>
          <Calendar
            onChange={(date) => {
              setSelectDate(date);
              console.log("selected date:", date);
            }}
          />
          <CheckboxGroup<FieldValues>
            name="gender"
            label="Gender"
            options={genderOptions}
            selectedValues={selectedGender}
            onChange={(values) => {
              setSelectedGender(values);
              console.log("Selected gender:", values);
            }}
            direction="horizontal"
          />
        </section>
        <section className={styles.additional}>
          <div className={styles.messageContainer}>
            <label className={styles.messageLabel}>Message</label>
            <textarea
              className={styles.messageInput}
              placeholder="Enter your message"
              rows={8}
            />
          </div>
        </section>
        <section className={styles.education}>
          <h2 className={styles.headline}>Education</h2>

          <div className={styles.educationInputs}>
            <Input<FieldValues>
              label="Degree"
              name="degree"
              type="text"
              placeholder="Enter your degree"
              className="outlineInput"
            />
            <Input<FieldValues>
              label="Institution"
              name="institution"
              type="text"
              placeholder="Enter your institution"
              className="outlineInput"
            />
            
          </div>
        </section>
      </form>
    </section>
  );
}
