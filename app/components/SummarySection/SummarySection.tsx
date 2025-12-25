import React from "react";
import Button from "../Button/Button";
import styles from "./SummarySection.module.scss";

interface SummaryData {
  fullName: string;
  constituency: string;
  dateOfBirth: Date;
  workInfo: string;
  position: string;
  gender: string;
  message: string;
  degree: string;
  institution: string;
  graduationDate: Date;
}

interface EmailData {
  email: string;
  password: string;
  repeatEmail: string;
}

interface SummarySectionProps {
  formData: SummaryData;
  emailData: EmailData;
  onBack: () => void;
  onSubmit: () => void;
}

export function SummarySection({ formData, emailData, onBack, onSubmit }: SummarySectionProps) {
  return (
    <section className={styles.summarySection}>
      <h2 className={styles.headline}>Summary - Review Your Information</h2>
      
      <div className={styles.summaryCard}>
        <h3>Basic Information</h3>
        <p><strong>Full Name:</strong> {formData.fullName}</p>
        <p><strong>Constituency:</strong> {formData.constituency}</p>
        <p><strong>Work Start Date:</strong> {new Date(formData.dateOfBirth).toLocaleDateString()}</p>
        <p><strong>Programming Field:</strong> {formData.workInfo}</p>
        <p><strong>Experience Level:</strong> {formData.position}</p>
        <p><strong>Gender:</strong> {formData.gender}</p>
        <p><strong>Message:</strong> {formData.message}</p>
      </div>

      <div className={styles.summaryCard}>
        <h3>Education</h3>
        <p><strong>Degree:</strong> {formData.degree}</p>
        <p><strong>Institution:</strong> {formData.institution}</p>
        <p><strong>Graduation Date:</strong> {new Date(formData.graduationDate).toLocaleDateString()}</p>
      </div>

       

      <div className={styles.actionButtons}>
        <Button variants="secondary" title="Back" type="button" onClick={onBack}>
          Back
        </Button>
        <Button variants="primary" title="Submit" type="button" onClick={onSubmit}>
          Complete Registration
        </Button>



        
      </div>
    </section>
  );
}
