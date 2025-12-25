# 📝 Input Component

[🇬🇪 ქართული](./README.ka.md) | **🇬🇧 English**

A flexible, reusable input component with icon support, password visibility toggle, and React Hook Form integration.

---

## 📖 Overview

The Input component is a versatile text input field that supports various types (text, email, password, textarea), custom icons, placeholder text, and form validation.

---

## ✨ Features

- ✅ Multiple input types (text, email, password, textarea)
- ✅ Icon support (left or right positioned)
- ✅ Password visibility toggle
- ✅ React Hook Form integration
- ✅ Error message display
- ✅ Custom placeholder text
- ✅ TypeScript support
- ✅ SCSS module styling

---

## 📦 Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `name` | `string` | Yes | - | Input field name for form |
| `placeholder` | `string` | No | - | Placeholder text |
| `type` | `"text" \| "email" \| "password" \| "textarea"` | No | `"text"` | Input type |
| `register` | `UseFormRegister` | No | - | React Hook Form register |
| `error` | `string` | No | - | Error message to display |
| `icon` | `IconType` | No | - | React Icon component |
| `iconPosition` | `"left" \| "right"` | No | `"right"` | Icon position |

---

## 🚀 Usage

### Basic Text Input

```tsx
import Input from "@/app/components/Input/Input";
import { useForm } from "react-hook-form";

function MyForm() {
  const { register, formState: { errors } } = useForm();

  return (
    <Input
      name="fullName"
      placeholder="Enter your full name"
      register={register}
      error={errors.fullName?.message}
    />
  );
}
```

### Email Input with Icon

```tsx
import { MdEmail } from "react-icons/md";

<Input
  name="email"
  type="email"
  placeholder="your@email.com"
  icon={MdEmail}
  iconPosition="left"
  register={register}
  error={errors.email?.message}
/>
```

### Password Input with Toggle

```tsx
import { AiOutlineLock } from "react-icons/ai";

<Input
  name="password"
  type="password"
  placeholder="Enter password"
  icon={AiOutlineLock}
  iconPosition="left"
  register={register}
  error={errors.password?.message}
/>
```

### Textarea

```tsx
<Input
  name="message"
  type="textarea"
  placeholder="Enter your message"
  register={register}
/>
```

---

## 🎨 Features Breakdown

### Password Visibility Toggle
When `type="password"`, an eye icon automatically appears allowing users to toggle password visibility.

### Icon Positioning
Icons can be positioned on the left or right side of the input field using the `iconPosition` prop.

### Error Display
Errors are displayed below the input field in red text when the `error` prop is provided.

---

## 📁 File Structure

```
Input/
├── Input.tsx          # Main component
├── Input.module.scss  # Component styles
├── input.type.ts      # TypeScript types
├── README.md          # English documentation
└── README.ka.md       # Georgian documentation
```

---

## 🔧 TypeScript Types

```typescript
export interface InputProps {
  name: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "textarea";
  register?: UseFormRegister<any>;
  error?: string;
  icon?: IconType;
  iconPosition?: "left" | "right";
}
```

---

## 🎨 Styling

The component uses SCSS modules with the following classes:

- `.inputWrapper` - Container for the input and icon
- `.input` - Base input styling
- `.textarea` - Textarea variant
- `.icon` - Icon styling
- `.iconLeft` / `.iconRight` - Icon positioning
- `.passwordToggle` - Password visibility toggle button
- `.error` - Error message styling

---

## ♿ Accessibility

- Semantic HTML elements
- Proper label associations (via name prop)
- Error messages announced to screen readers
- Keyboard navigation support
- Password toggle button is keyboard accessible

---

## 📝 Notes

- The password toggle icon automatically appears for password inputs
- Textarea automatically adjusts height based on content
- Icons are optional and can be any React Icon component
- Component works with or without React Hook Form

---

Made with ❤️ by Tamar Khuskivadze
