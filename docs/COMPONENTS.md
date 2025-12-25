# 📊 Components Documentation

This document provides an overview of all components in the WebForm project.

---

## 🎯 Component Overview

| Component | Purpose | Props | Validation |
|-----------|---------|-------|------------|
| [Button](../app/components/Button/README.md) | Reusable button | text, onClick, type | - |
| [Calendar](../app/components/Calendar/README.md) | Date picker | value, onChange, error | Date validation |
| [Checkbox](../app/components/Checkbox/README.md) | Checkbox group | options, name, register | - |
| [Input](../app/components/Input/README.md) | Text/Email/Password input | name, type, placeholder, icon | React Hook Form |
| [SelectInput](../app/components/SelectInput/README.md) | Dropdown select | options, value, onChange | React Hook Form |
| [Form](../app/components/Form/README.md) | Main multi-step form | - | Yup schema |
| [EmailSection](../app/components/EmailSection/README.md) | Step 2 of registration | onSubmit, onBack | Email & password |
| [SignIn](../app/components/SignIn/README.md) | Sign in page | onSignUp, onSubmit | Email & password |
| [SummarySection](../app/components/SummarySection/README.md) | Step 3 review | formData, emailData, onBack, onSubmit | - |

---

## 🏗️ Component Hierarchy

```
Form (Main Orchestrator)
│
├─ Step 1: Basic Information
│  ├─ Input (Full Name, Constituency, Degree, Institution)
│  ├─ SelectInput (Programming Field, Experience Level)
│  ├─ Calendar (Work Start Date, Graduation Date)
│  └─ Checkbox (Gender)
│
├─ Step 2: Email Section
│  └─ EmailSection
│     └─ Input (Email, Password, Repeat Email)
│
├─ Step 3: Summary Section
│  └─ SummarySection
│     └─ Display cards (Basic Info, Education, Account)
│
└─ Sign In Toggle
   └─ SignIn
      └─ Input (Email, Password)
```

---

## 🔄 Data Flow

### Step 1 → Step 2

```typescript
const handleStep1Submit = (data: FormValues) => {
  setSavedFormData(data);
  setCurrentStep(2);
};
```

**Data collected:**
- fullName, constituency, programmingField, position
- dateOfBirth, gender, message
- degree, institution, graduationDate

### Step 2 → Step 3

```typescript
const handleEmailSubmit = (data: EmailFormValues) => {
  setEmailData(data);
  setCurrentStep(3);
};
```

**Data collected:**
- email, password, repeatEmail

### Step 3 → Final Submission

```typescript
const handleFinalSubmit = () => {
  const completeData = {
    ...savedFormData,
    ...emailData
  };
  // Submit to backend
};
```

---

## 🎨 Shared Patterns

### SCSS Modules

All components use SCSS modules for scoped styling:

```tsx
import styles from "./Component.module.scss";

<div className={styles.container}>
  {/* Component content */}
</div>
```

### TypeScript Props

All components have typed props interfaces:

```typescript
export interface ComponentProps {
  name: string;
  optional?: boolean;
}
```

### React Hook Form Integration

Form components use React Hook Form:

```tsx
const { register, formState: { errors } } = useForm();

<Input
  name="fieldName"
  register={register}
  error={errors.fieldName?.message}
/>
```

---

## 📦 Component Categories

### Form Controls
- **Input** - Text, email, password, textarea
- **SelectInput** - Dropdown selections
- **Calendar** - Date picker
- **Checkbox** - Multiple choice options
- **Button** - Action triggers

### Layout Components
- **Form** - Main container and orchestrator
- **EmailSection** - Step 2 container
- **SummarySection** - Step 3 container
- **SignIn** - Authentication page

---

## 🔧 Common Props

### Form Control Props

Most form controls accept these common props:

| Prop | Type | Description |
|------|------|-------------|
| `name` | `string` | Field identifier for forms |
| `error` | `string` | Error message to display |
| `register` | `UseFormRegister` | React Hook Form register |

### Container Component Props

Container components typically have:

| Prop | Type | Description |
|------|------|-------------|
| `onSubmit` | `Function` | Form submission handler |
| `onBack` | `Function` | Back navigation handler |

---

## ✅ Validation

### Client-Side Validation

All forms use Yup schema validation:

```typescript
const schema = yup.object().shape({
  email: yup.string()
    .email("Invalid email")
    .required("Email required"),
  password: yup.string()
    .min(6, "Minimum 6 characters")
    .required("Password required")
});
```

### Validation Messages

- Clear and user-friendly
- Displayed below input fields
- Styled in red for visibility

---

## 🎯 Best Practices

1. **Component Reusability** - Build generic, reusable components
2. **Type Safety** - Use TypeScript for all props and state
3. **Styling Isolation** - Use SCSS modules to prevent style conflicts
4. **Documentation** - Maintain README files for all components
5. **Validation** - Validate all user inputs
6. **Accessibility** - Use semantic HTML and ARIA labels

---

## 📝 Adding New Components

1. Create component directory with proper structure
2. Write TypeScript component with typed props
3. Add SCSS module for styling
4. Create types file if needed
5. Write README documentation (English & Georgian)
6. Integrate with React Hook Form if it's a form control
7. Add validation schema if applicable

---

Made with ❤️ by Tamar Khuskivadze
