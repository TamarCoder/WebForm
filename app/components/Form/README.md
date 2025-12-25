# 📝 Form Component

[🇬🇪 ქართული](./README.ka.md) | **🇬🇧 English**

The main multi-step registration form component that orchestrates the entire registration flow.

---

## 📖 Overview

The Form component is the central orchestrator for the multi-step registration process. It manages state across three steps, handles navigation, and integrates all sub-components (EmailSection, SummarySection, SignIn) into a cohesive user experience.

---

## ✨ Features

- ✅ 3-step registration flow
- ✅ Dynamic step indicators with progress tracking
- ✅ Form state management across steps
- ✅ React Hook Form integration
- ✅ Yup schema validation
- ✅ Toggle between Sign In and Sign Up
- ✅ Comprehensive form fields
- ✅ TypeScript support
- ✅ SCSS module styling

---

## 🎯 Registration Flow

### Step 1: Basic Information
Collects user's personal and professional details:
- Full Name
- Constituency
- Programming Field (Dropdown)
- Experience Level (Dropdown)
- Work Start Date (Calendar)
- Gender (Radio buttons)
- Message (Textarea)
- **Education Section:**
  - Degree
  - Institution
  - Graduation Date

### Step 2: Account Creation
Handled by the EmailSection component:
- Email
- Password
- Confirm Email

### Step 3: Summary & Review
Handled by the SummarySection component:
- Review all entered information
- Final submission

---

## 🔧 State Management

```typescript
const [currentStep, setCurrentStep] = useState(1);
const [savedFormData, setSavedFormData] = useState<FormValues | null>(null);
const [emailData, setEmailData] = useState<EmailFormValues | null>(null);
const [showSignIn, setShowSignIn] = useState(false);
```

---

## 📦 Main Form Fields

### Personal Information
- `fullName`: string (required)
- `constituency`: string (required)
- `programmingField`: dropdown (required)
- `position`: dropdown (required)
- `dateOfBirth`: Date (required, must be past date)
- `gender`: radio (required)
- `message`: textarea (optional)

### Education
- `degree`: string (required)
- `institution`: string (required)
- `graduationDate`: Date (required)

---

## ✅ Validation Schema

```typescript
export const formSchema = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
  constituency: yup.string().required("Constituency is required"),
  programmingField: yup.string().required("Please select a programming field"),
  position: yup.string().required("Please select your experience level"),
  dateOfBirth: yup.date()
    .max(new Date(), "Work start date must be in the past")
    .required("Work start date is required"),
  gender: yup.string().required("Please select your gender"),
  message: yup.string(),
  degree: yup.string().required("Degree is required"),
  institution: yup.string().required("Institution is required"),
  graduationDate: yup.date().required("Graduation date is required")
});
```

---

## 🚀 Usage

```tsx
import Form from "@/app/components/Form/Form";

function RegistrationPage() {
  return (
    <div className="page-container">
      <Form />
    </div>
  );
}
```

---

## 🎨 Step Indicators

The form displays visual step indicators at the top:
- **Step 1:** Basic Information (orange when active/completed)
- **Step 2:** Email & Password (orange when active/completed)
- **Step 3:** Summary (orange when active)

```tsx
<div className={styles.stepIndicator}>
  <div className={currentStep >= 1 ? styles.activeStep : styles.inactiveStep}>1</div>
  <div className={currentStep >= 1 ? styles.activeLine : styles.inactiveLine}></div>
  <div className={currentStep >= 2 ? styles.activeStep : styles.inactiveStep}>2</div>
  <div className={currentStep >= 2 ? styles.activeLine : styles.inactiveLine}></div>
  <div className={currentStep >= 3 ? styles.activeStep : styles.inactiveStep}>3</div>
</div>
```

---

## 🔄 Step Navigation

### Step 1 → Step 2
```tsx
const handleStep1Submit = (data: FormValues) => {
  setSavedFormData(data);
  setCurrentStep(2);
};
```

### Step 2 → Step 3
```tsx
const handleEmailSubmit = (data: EmailFormValues) => {
  setEmailData(data);
  setCurrentStep(3);
};
```

### Back Navigation
```tsx
onBack={() => setCurrentStep(currentStep - 1)}
```

---

## 📁 File Structure

```
Form/
├── Form.tsx          # Main component
├── Form.module.scss  # Component styles
├── form.type.ts      # TypeScript types & dropdown options
├── formShcema.ts     # Yup validation schema
├── README.md         # English documentation
└── README.ka.md      # Georgian documentation
```

---

## 📋 Dropdown Options

### Programming Field Options
```typescript
export const PROGRAMMING_FIELD_OPTIONS: inputOption[] = [
  { value: "frontend", label: "Frontend Development" },
  { value: "backend", label: "Backend Development" },
  { value: "fullstack", label: "Full Stack Development" },
  { value: "mobile", label: "Mobile Development" },
  { value: "devops", label: "DevOps" },
  { value: "data", label: "Data Science" },
  { value: "ml", label: "Machine Learning" },
  { value: "security", label: "Cybersecurity" }
];
```

### Experience Level Options
```typescript
export const EXPERIENCE_LEVEL_OPTIONS: inputOption[] = [
  { value: "student", label: "Student" },
  { value: "junior", label: "Junior (0-2 years)" },
  { value: "mid", label: "Mid-level (2-5 years)" },
  { value: "senior", label: "Senior (5+ years)" },
  { value: "lead", label: "Tech Lead" },
  { value: "architect", label: "Architect" }
];
```

---

## 🔐 Sign In Toggle

The form includes a toggle between Sign Up and Sign In:

```tsx
{showSignIn ? (
  <SignIn onSignUp={() => setShowSignIn(false)} />
) : (
  // Registration flow (3 steps)
)}
```

---

## 🎨 Styling

The component uses SCSS modules with the following key classes:

- `.formContainer` - Main form wrapper
- `.stepIndicator` - Step progress indicator
- `.activeStep` / `.inactiveStep` - Step circle styling
- `.activeLine` / `.inactiveLine` - Connector lines between steps
- `.formHeader` - Header with title and sign-in link

---

## ♿ Accessibility

- Semantic HTML form structure
- Proper label associations
- Keyboard navigation support
- Error messages for screen readers
- Logical tab order
- Clear step indicators

---

## 📝 Notes

- Form data is preserved when navigating between steps
- Step 1 uses standard `<form>` with React Hook Form
- Steps 2 and 3 are separate components to avoid nested forms
- All validation happens on submit for each step
- SignIn component shares the same visual design language

---

## 🔄 Final Submission

```tsx
const handleFinalSubmit = () => {
  const completeData = {
    ...savedFormData,
    ...emailData
  };
  
  alert("Registration successful!");
  console.log("Complete registration data:", completeData);
  // Send to backend API
};
```

---

Made with ❤️ by Tamar Khuskivadze
