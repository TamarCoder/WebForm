# 🔐 SignIn Component

[🇬🇪 ქართული](./README.ka.md) | **🇬🇧 English**

A clean and modern sign-in component with email and password inputs, form validation, and authentication flow.

---

## 📖 Overview

The SignIn component provides a user-friendly authentication interface for existing users to log into their accounts. It includes email and password inputs with validation, "Forgot password?" link, and navigation to the sign-up page.

---

## ✨ Features

- ✅ Email and password authentication
- ✅ Form validation with Yup
- ✅ React Hook Form integration
- ✅ Password visibility toggle
- ✅ "Forgot password?" link
- ✅ Navigation to sign-up page
- ✅ Icon integration (left-positioned)
- ✅ TypeScript support
- ✅ SCSS module styling

---

## 📦 Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `onSignUp` | `() => void` | No | Callback to navigate to sign-up page |
| `onSubmit` | `(data: SignInFormValues) => void` | No | Callback when form is submitted |

---

## 🚀 Usage

### Basic Example

```tsx
import SignIn from "@/app/components/SignIn/SignIn";

function AuthPage() {
  const handleSignIn = (data) => {
    console.log("Sign in data:", data);
    // Authenticate user
  };

  const handleSignUp = () => {
    // Navigate to sign-up page
  };

  return (
    <SignIn 
      onSubmit={handleSignIn} 
      onSignUp={handleSignUp} 
    />
  );
}
```

### Integrated with Multi-Step Form

```tsx
const [showSignIn, setShowSignIn] = useState(false);

{showSignIn ? (
  <SignIn onSignUp={() => setShowSignIn(false)} />
) : (
  <RegistrationForm />
)}
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

---

## ✅ Validation Rules

```typescript
email: yup.string()
  .email("Please enter a valid email address")
  .required("Email is required"),

password: yup.string()
  .min(6, "Password must be at least 6 characters")
  .required("Password is required")
```

---

## 🎨 Structure

```tsx
<div className={styles.signInContainer}>
  <div className={styles.signInCard}>
    <h2>Sign In</h2>
    <p>Welcome back! Please enter your details.</p>
    
    <form>
      <Input name="email" icon={MdEmail} iconPosition="left" />
      <Input name="password" type="password" icon={AiOutlineLock} iconPosition="left" />
      
      <a href="#" className={styles.forgotPassword}>Forgot password?</a>
      
      <Button text="Sign In" type="submit" />
      
      <p>Don't have an account? <a href="#" onClick={onSignUp}>Sign Up</a></p>
    </form>
  </div>
</div>
```

---

## 📁 File Structure

```
SignIn/
├── SignIn.tsx           # Main component
├── SignIn.module.scss   # Component styles
├── SignIn.type.ts       # TypeScript types & validation
├── README.md            # English documentation
└── README.ka.md         # Georgian documentation
```

---

## 🔧 TypeScript Types

```typescript
export interface SignInFormValues {
  email: string;
  password: string;
}

export interface SignInProps {
  onSignUp?: () => void;
  onSubmit?: (data: SignInFormValues) => void;
}
```

---

## 🎨 Styling

The component uses SCSS modules with a design matching the EmailSection component:

- `.signInContainer` - Full-page container
- `.signInCard` - Centered card layout
- `.forgotPassword` - Link styling
- Consistent with the application's orange theme

---

## ♿ Accessibility

- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatible
- Focus management for form inputs
- Clear error messages

---

## 🔗 Links

- **Forgot password?** - Placeholder for password recovery flow
- **Sign Up** - Navigates to registration form via `onSignUp` callback

---

## 📝 Notes

- Password field automatically shows eye icon for visibility toggle
- Email validation occurs on blur and submit
- Component can be used standalone or integrated into multi-step forms
- Designed to match the EmailSection component's visual style

---

Made with ❤️ by Tamar Khuskivadze
