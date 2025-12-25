# ✉️ EmailSection Component

[🇬🇪 ქართული](./README.ka.md) | **🇬🇧 English**

Email and password input section for the multi-step registration form (Step 2).

---

## 📖 Overview

The EmailSection component handles email and password collection during the registration process. It includes form validation, password confirmation, and navigation between steps.

---

## ✨ Features

- ✅ Email validation
- ✅ Password strength requirements
- ✅ Password confirmation matching
- ✅ React Hook Form integration
- ✅ Yup schema validation
- ✅ Icon integration (left-positioned)
- ✅ Navigation (Back/Continue buttons)

---

## 📦 Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `onSubmit` | `(data: EmailFormValues) => void` | Yes | Callback when form is submitted |
| `onBack` | `() => void` | Yes | Callback for back navigation |

---

## 🚀 Usage

```tsx
import EmailSection from "@/app/components/EmailSection/EmailSection";

function RegistrationForm() {
  const handleEmailSubmit = (data) => {
    console.log("Email data:", data);
    // Proceed to next step
  };

  const handleBack = () => {
    // Go back to previous step
  };

  return (
    <EmailSection 
      onSubmit={handleEmailSubmit} 
      onBack={handleBack} 
    />
  );
}
```

---

## 📋 Form Fields

1. **Email** 
   - Type: Email input
   - Icon: MdEmail (left-positioned)
   - Validation: Required, valid email format

2. **Password**
   - Type: Password input with toggle visibility
   - Icon: AiOutlineLock (left-positioned)
   - Validation: Required, minimum 6 characters

3. **Repeat Email**
   - Type: Email input
   - Validation: Must match email field

---

## ✅ Validation Rules

```typescript
email: yup.string()
  .email("Please enter a valid email address")
  .required("Email is required"),

password: yup.string()
  .min(6, "Password must be at least 6 characters")
  .required("Password is required"),

repeatEmail: yup.string()
  .oneOf([yup.ref("email")], "Emails must match")
  .required("Please repeat email")
```

---

## 🎨 Structure

```tsx
<div className={styles.emailSection}>
  <h2>Create an Account</h2>
  <p>Please fill in your email and password</p>
  
  <form>
    <Input name="email" icon={MdEmail} />
    <Input name="password" type="password" icon={AiOutlineLock} />
    <Input name="repeatEmail" icon={MdEmail} />
    
    <div className={styles.buttonGroup}>
      <Button text="Back" onClick={onBack} />
      <Button text="Continue" type="submit" />
    </div>
  </form>
</div>
```

---

## 📁 File Structure

```
EmailSection/
├── EmailSection.tsx        # Main component
├── EmailSection.module.scss # Component styles
├── Email.type.ts           # TypeScript types & validation
├── README.md               # English documentation
└── README.ka.md            # Georgian documentation
```

---

## 🔧 TypeScript Types

```typescript
export interface EmailFormValues {
  email: string;
  password: string;
  repeatEmail: string;
}

export interface EmailSectionProps {
  onSubmit: (data: EmailFormValues) => void;
  onBack: () => void;
}
```

---

## 🎯 Integration with Multi-Step Form

```tsx
// In parent Form component
const [emailData, setEmailData] = useState<EmailFormValues | null>(null);

{currentStep === 2 && (
  <EmailSection
    onSubmit={(data) => {
      setEmailData(data);
      setCurrentStep(3); // Move to summary
    }}
    onBack={() => setCurrentStep(1)} // Go back to basic info
  />
)}
```

---

## ♿ Accessibility

- Proper label associations
- Error messages for screen readers
- Keyboard navigation support
- Password visibility toggle

---

## 📝 Notes

- Password input automatically shows eye icon for visibility toggle
- Email validation happens on blur and submit
- Form prevents submission if validation fails
- Back button does not validate the form

---

Made with ❤️ by Tamar Khuskivadze
