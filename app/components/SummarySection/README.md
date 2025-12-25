# 📊 SummarySection Component

[🇬🇪 ქართული](./README.ka.md) | **🇬🇧 English**

A summary review component that displays all collected form data before final submission in the multi-step registration form (Step 3).

---

## 📖 Overview

The SummarySection component provides a comprehensive overview of all information entered during the registration process. It displays data in organized cards for easy review before final submission.

---

## ✨ Features

- ✅ Organized card layout
- ✅ Three-section display (Basic Info, Education, Account)
- ✅ TypeScript support
- ✅ SCSS module styling
- ✅ Responsive design
- ✅ Clean and readable presentation
- ✅ Navigation buttons (Back/Submit)

---

## 📦 Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `formData` | `FormValues` | Yes | Basic information from Step 1 |
| `emailData` | `EmailFormValues` | Yes | Email/password from Step 2 |
| `onBack` | `() => void` | Yes | Callback for back navigation |
| `onSubmit` | `() => void` | Yes | Callback for final submission |

---

## 🔧 TypeScript Types

```typescript
export interface SummarySectionProps {
  formData: FormValues;
  emailData: EmailFormValues;
  onBack: () => void;
  onSubmit: () => void;
}

interface FormValues {
  fullName: string;
  constituency: string;
  programmingField: string;
  position: string;
  dateOfBirth: Date;
  gender: string;
  message: string;
  degree: string;
  institution: string;
  graduationDate: Date;
}

interface EmailFormValues {
  email: string;
  password: string;
  repeatEmail: string;
}
```

---

## 🚀 Usage

```tsx
import SummarySection from "@/app/components/SummarySection/SummarySection";

function RegistrationForm() {
  const [savedFormData, setSavedFormData] = useState<FormValues | null>(null);
  const [emailData, setEmailData] = useState<EmailFormValues | null>(null);

  const handleSubmit = () => {
    console.log("Final submission:", { ...savedFormData, ...emailData });
    // Submit to backend
  };

  const handleBack = () => {
    setCurrentStep(2); // Go back to email step
  };

  return (
    <SummarySection
      formData={savedFormData}
      emailData={emailData}
      onBack={handleBack}
      onSubmit={handleSubmit}
    />
  );
}
```

---

## 🎨 Structure

The component displays data in three organized cards:

### 1. Basic Information Card
- Full Name
- Constituency
- Programming Field
- Experience Level
- Work Start Date
- Gender
- Message

### 2. Education Card
- Degree
- Institution
- Graduation Date

### 3. Account Information Card
- Email
- Password (hidden with asterisks)

---

## 📋 Display Format

```tsx
<div className={styles.summaryContainer}>
  <h2>Review Your Information</h2>
  <p>Please review your details before submitting</p>

  <div className={styles.summaryCard}>
    <h3>Basic Information</h3>
    <p><strong>Full Name:</strong> {formData.fullName}</p>
    <p><strong>Programming Field:</strong> {formData.programmingField}</p>
    {/* ... more fields */}
  </div>

  <div className={styles.summaryCard}>
    <h3>Education</h3>
    {/* education fields */}
  </div>

  <div className={styles.summaryCard}>
    <h3>Account Information</h3>
    {/* account fields */}
  </div>

  <div className={styles.buttonGroup}>
    <Button text="Back" onClick={onBack} />
    <Button text="Submit" onClick={onSubmit} type="submit" />
  </div>
</div>
```

---

## 📁 File Structure

```
SummarySection/
├── SummarySection.tsx        # Main component
├── SummarySection.module.scss # Component styles
├── README.md                  # English documentation
└── README.ka.md               # Georgian documentation
```

---

## 🎨 Styling

The component uses SCSS modules with the following classes:

- `.summaryContainer` - Main container
- `.summaryCard` - Individual card for each section
- `.buttonGroup` - Container for navigation buttons

Customize by modifying [SummarySection.module.scss](./SummarySection.module.scss).

---

## 🎯 Integration Example

```tsx
// In parent Form component
const [currentStep, setCurrentStep] = useState(1);
const [savedFormData, setSavedFormData] = useState<FormValues | null>(null);
const [emailData, setEmailData] = useState<EmailFormValues | null>(null);

{currentStep === 3 && savedFormData && emailData && (
  <SummarySection
    formData={savedFormData}
    emailData={emailData}
    onBack={() => setCurrentStep(2)}
    onSubmit={() => {
      alert("Registration successful!");
      // Send data to backend
    }}
  />
)}
```

---

## ♿ Accessibility

- Semantic HTML structure
- Clear headings and labels
- Keyboard navigation support
- Screen reader compatible
- Logical reading order

---

## 📝 Notes

- Passwords are always displayed as asterisks for security
- Dates are formatted for readability
- All data is read-only in this view
- Users can go back to edit information if needed
- Component only renders when both formData and emailData are available

---

## 🔒 Security

- Password is never displayed in plain text
- Data is only displayed, not editable
- Sensitive information is appropriately masked

---

Made with ❤️ by Tamar Khuskivadze
