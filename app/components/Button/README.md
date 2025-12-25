# 🎯 Button Component

[🇬🇪 ქართული](./README.ka.md) | **🇬🇧 English**

A customizable, reusable button component with TypeScript support and SCSS modules.

---

## 📖 Overview

The Button component is a flexible, accessible button that supports custom text, click handlers, and styling. It's designed to be used throughout the application for consistent UI/UX.

---

## ✨ Features

- ✅ TypeScript support
- ✅ Custom text and click handlers
- ✅ SCSS module styling
- ✅ Accessible and semantic HTML
- ✅ Reusable across the application

---

## 📦 Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | `string` | Yes | - | Button text content |
| `onClick` | `() => void` | No | - | Click event handler |
| `type` | `"button" \| "submit" \| "reset"` | No | `"button"` | Button HTML type |

---

## 🚀 Usage

### Basic Example

```tsx
import Button from "@/app/components/Button/Button";

function MyComponent() {
  return (
    <Button text="Click Me" onClick={() => console.log("Clicked!")} />
  );
}
```

### Submit Button

```tsx
<Button text="Submit" type="submit" />
```

### Without Click Handler

```tsx
<Button text="Cancel" />
```

---

## 🎨 Styling

The component uses SCSS modules for scoped styling. Customize the appearance by modifying:

```scss
// Button.module.scss
.button {
  // Your custom styles here
}
```

---

## 📁 File Structure

```
Button/
├── Button.tsx          # Main component
├── Button.module.scss  # Component styles
├── button.type.ts      # TypeScript types
├── README.md           # English documentation
└── README.ka.md        # Georgian documentation
```

---

## 🔧 TypeScript Types

```typescript
export interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}
```

---

## ♿ Accessibility

- Semantic `<button>` element
- Supports keyboard navigation
- Clear button text for screen readers

---

## 📝 Notes

- The button automatically inherits global styles from the theme
- Use the `type` prop to specify button behavior in forms
- Click handler is optional for static buttons

---

Made with ❤️ by Tamar Khuskivadze
