"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { MdAddAPhoto } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import styles from "./Form.module.scss";
import { Input } from "../Input/Input";
import SelectInput from "../SelectInput/SelectInput";
import Calendar from "../Calendar/Calendar";
import { CheckboxGroup } from "../Checkbox/Checkbox";
import Button from "../Button/Button";
import { PROGRAMMING_FIELD_OPTIONS, EXPERIENCE_LEVEL_OPTIONS, GENDER_OPTIONS } from "./form.type";
import { InferType } from "yup";
import { formSchema } from "./formShcema";
import { EmailSection } from "../EmailSection/EmailSection";
import { SummarySection } from "../SummarySection/SummarySection";

type FormValues = InferType<typeof formSchema>;

export function Form() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(formSchema),
    defaultValues: {
      fullName: "",
      constituency: "",
      dateOfBirth: new Date(),
      workInfo: "",
      position: "",
      gender: "",
      message: "",
      degree: "",
      institution: "",
      graduationDate: new Date(),
    },
  });

  const [currentStep, setCurrentStep] = React.useState(1);
  const [savedFormData, setSavedFormData] = React.useState<FormValues | null>(null);
  const [emailData, setEmailData] = React.useState<{email: string; password: string; repeatEmail: string} | null>(null);

  const onSubmit = (data: FormValues) => {
    setSavedFormData(data);
    setCurrentStep(2);
  };

  const handleEmailSubmit = (data: {email: string; password: string; repeatEmail: string}) => {
    setEmailData(data);
    setCurrentStep(3);
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFinalSubmit = () => {
    const finalData = {
      ...savedFormData,
      ...emailData
    };
    console.log("Final Submission:", finalData);
    alert("Registration completed successfully!");
    // აქ შეგიძლიათ გააგზავნოთ მონაცემები API-ზე
  };



  return (
    <section className={styles.MainContainer}>
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <p className={styles.headline}>
            Already a Member?{" "}
            <a href="#" className={styles.signUp}>
              Sign In
            </a>
          </p>
        </div>
        <div className={styles.headerContent}>
          <h1 className={styles.heading}>Sign Up</h1>
          <div className={styles.steps}>
            {[1, 2, 3].map((step, index) => (
              <React.Fragment key={step}>
                {index > 0 && (
                  <div 
                    className={`${styles.line} ${step <= currentStep ? styles.activeLine : ''}`} 
                  />
                )}
                <p 
                  className={step <= currentStep ? styles.activeStep : styles.inactiveStep}
                >
                  {step}
                </p>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {currentStep === 1 && (
        <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
          <>
            <section className={styles.basicInfo}>
              <div className={styles.Inputdetails}>
                <h2 className={styles.headline}>Basic Details</h2>
                <Input
                  label="Full Name"
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  className="outlineInput"
                  register={register}
                  error={errors.fullName?.message}
                />
              </div>
              <div className={styles.photo}>
                <a href="#">
                  <MdAddAPhoto className={styles.photoUpload} />
                </a>
              </div>
            </section>

        <section className={styles.locations}>
          <Input
            label="Constituency"
            name="constituency"
            type="text"
            placeholder="Search Constituency"
            className="fillInput"
            iconPosition="right"
            icon={<FaLocationDot />}
            register={register}
            error={errors.constituency?.message}
          />
        </section>

        <section className={styles.workInfo}>
          <Controller
            name="workInfo"
            control={control}
            render={({ field }) => (
              <SelectInput
                options={PROGRAMMING_FIELD_OPTIONS}
                lable="Programming Field"
                initialValue=""
                value={field.value}
                onChange={field.onChange}
                error={errors.workInfo?.message}
              />
            )}
          />

          <Controller
            name="position"
            control={control}
            render={({ field }) => (
              <SelectInput
                options={EXPERIENCE_LEVEL_OPTIONS}
                lable="Experience Level"
                initialValue=""
                value={field.value}
                onChange={field.onChange}
                error={errors.position?.message}
              />
            )}
          />
        </section>

        <section className={styles.date}>
          <Controller
            name="dateOfBirth"
            control={control}
            render={({ field }) => (
              <Calendar 
                label="Work Start Date"
                onChange={field.onChange} 
                error={errors.dateOfBirth?.message} 
              />
            )}
          />

          <Controller
            name="gender"
            control={control}
            render={({ field }) => (
              <CheckboxGroup
                name="gender"
                label="Gender"
                options={GENDER_OPTIONS}
                selectedValues={field.value ? [field.value] : []}
                onChange={(values) => field.onChange(values[0])}
                direction="horizontal"
              />
            )}
          />
        </section>

        <section className={styles.additional}>
          <label className={styles.messageLabel}>Message</label>
          <textarea
            className={`${styles.messageInput} ${errors.message ? styles.error : ""}`}
            placeholder="Enter your message"
            rows={8}
            {...register("message")}
          />
        </section>

        <section className={styles.education}>
          <h2 className={styles.headline}>Education</h2>
          <div className={styles.educationInputs}>
            <Input
              label="Degree"
              name="degree"
              type="text"
              placeholder="Enter your degree"
              className="outlineInput"
              register={register}
              error={errors.degree?.message}
            />
            <Input
              label="Institution"
              name="institution"
              type="text"
              placeholder="Enter your institution"
              className="outlineInput"
              register={register}
              error={errors.institution?.message}
            />
          </div>
          <div className={styles.educationButtons}>
            <Controller
              name="graduationDate"
              control={control}
              render={({ field }) => (
                <Calendar label="Graduation Year" onChange={field.onChange} error={errors.graduationDate?.message} />
              )}
            />

            <div className={styles.actionButtons}>
              <Button variants="secondary" title="Cancel" type="button">
                Cancel
              </Button>
              <Button variants="primary" title="Save" type="button">
                Save
              </Button>
            </div>
          </div>
        </section>

        <Button
          variants="primary"
          title="Submit"
          className={styles.submitButton}
          type="submit"
        >
          Save and Continue
        </Button>
          </>
        </form>
      )}

      {currentStep === 2 && (
        <div className={styles.formContainer}>
          <EmailSection onSubmit={handleEmailSubmit} onBack={handleBack} />
        </div>
      )}

      {currentStep === 3 && savedFormData && emailData && (
        <div className={styles.formContainer}>
          <SummarySection 
            formData={savedFormData}
            emailData={emailData}
            onBack={handleBack}
            onSubmit={handleFinalSubmit}
          />
        </div>
      )}

  
    </section>
  );
}
