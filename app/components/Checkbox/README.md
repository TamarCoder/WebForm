# ✅ Checkbox Component

[🇬🇪 ქართული](./README.ka.md) | **🇬🇧 English**

A customizable checkbox group component with React Hook Form integration and TypeScript support.

---

## 📖 Overview

The Checkbox component renders a group of checkboxes with labels, supporting form validation and state management through React Hook Form.

---

## ✨ Features

- ✅ Multiple checkbox options
- ✅ React Hook Form integration
- ✅ TypeScript support
- ✅ Custom styling with SCSS modules
- ✅ Error handling and validation
- ✅ Accessible and semantic HTML

---

## 📦 Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `options` | `CheckboxOption[]` | Yes | Array of checkbox options |
| `name` | `string` | Yes | Field name for form registration |
| `register` | `UseFormRegister` | No | React Hook Form register function |
| `error` | `string` | No | Error message to display |

---

## 🔧 TypeScript Types

```typescript
export interface CheckboxOption {
  value: string;
  label: string;
}

export interface CheckboxProps {
  options: CheckboxOption[];
  name: string;
  register?: UseFormRegister<any>;
  error?: string;
}
```

---

## 🚀 Usage

### Basic Example

```tsx
import Checkbox from "@/app/components/Checkbox/Checkbox";
import { useForm } from "react-hook-form";

const degreeOptions = [
  { value: "bachelor", label: "Bachelor's Degree" },
  { value: "master", label: "Master's Degree" },
  { value: "phd", label: "PhD" }
];

function EducationForm() {
  const { register, formState: { errors } } = useForm();

  return (
    <Checkbox
      options={degreeOptions}
      name="degree"
      register={register}
      error={errors.degree?.message}
    />
  );
}
```

### With Gender Options

```tsx
const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" }
];

<Checkbox
  options={genderOptions}
  name="gender"
  register={register}
/>
```

---

## 🎨 Structure

```tsx
<div className={styles.checkboxGroup}>
  {options.map((option) => (
    <label key={option.value} className={styles.checkboxLabel}>
      <input
        type="checkbox"
        value={option.value}
        {...register(name)}
      />
      <span>{option.label}</span>
    </label>
  ))}
  {error && <span className={styles.error}>{error}</span>}
</div>
```

---

## 📁 File Structure

```
Checkbox/
├── Checkbox.tsx          # Main component
├── Checkbox.module.scss  # Component styles
├── checkbox.type.ts      # TypeScript types
├── README.md             # English documentation
└── README.ka.md          # Georgian documentation
```

---

## 🎨 Styling

The component uses SCSS modules with the following classes:

- `.checkboxGroup` - Container for all checkboxes
- `.checkboxLabel` - Individual checkbox label wrapper
- `.error` - Error message styling

Customize by modifying [Checkbox.module.scss](./Checkbox.module.scss).

---

## ♿ Accessibility

- Semantic `<label>` and `<input>` elements
- Keyboard navigation support
- Screen reader compatible
- Error messages announced to assistive technologies

---

## 📝 Notes

- Component supports multiple selections by default
- Use radio buttons for single selection (different component)
- Options array can be dynamically generated
- Works seamlessly with React Hook Form validation

---

Made with ❤️ by Tamar Khuskivadze
