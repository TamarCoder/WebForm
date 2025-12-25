# 📝 Input კომპონენტი

**🇬🇪 ქართული** | [🇬🇧 English](./README.md)

მოქნილი, მრავალჯერადი გამოყენების input კომპონენტი აიქონების მხარდაჭერით, პაროლის ხილვადობის გადართვითა და React Hook Form ინტეგრაციით.

---

## 📖 მიმოხილვა

Input კომპონენტი არის მრავალმხრივი ტექსტის შეყვანის ველი, რომელიც მხარს უჭერს სხვადასხვა ტიპს (text, email, password, textarea), მორგებულ აიქონებს, placeholder ტექსტს და ფორმის ვალიდაციას.

---

## ✨ ფუნქციები

- ✅ მრავალი input ტიპი (text, email, password, textarea)
- ✅ აიქონების მხარდაჭერა (მარცხნივ ან მარჯვნივ განთავსებული)
- ✅ პაროლის ხილვადობის გადართვა
- ✅ React Hook Form ინტეგრაცია
- ✅ შეცდომების შეტყობინებების ჩვენება
- ✅ მორგებული placeholder ტექსტი
- ✅ TypeScript მხარდაჭერა
- ✅ SCSS მოდულის სტილიზაცია

---

## 📦 Props

| Prop | ტიპი | აუცილებელი | ნაგულისხმევი | აღწერა |
|------|------|------------|---------------|--------|
| `name` | `string` | კი | - | ველის სახელი ფორმისთვის |
| `placeholder` | `string` | არა | - | Placeholder ტექსტი |
| `type` | `"text" \| "email" \| "password" \| "textarea"` | არა | `"text"` | Input ტიპი |
| `register` | `UseFormRegister` | არა | - | React Hook Form register |
| `error` | `string` | არა | - | საჩვენებელი შეცდომის შეტყობინება |
| `icon` | `IconType` | არა | - | React Icon კომპონენტი |
| `iconPosition` | `"left" \| "right"` | არა | `"right"` | აიქონის პოზიცია |

---

## 🚀 გამოყენება

### ძირითადი Text Input

```tsx
import Input from "@/app/components/Input/Input";
import { useForm } from "react-hook-form";

function MyForm() {
  const { register, formState: { errors } } = useForm();

  return (
    <Input
      name="fullName"
      placeholder="შეიყვანეთ თქვენი სრული სახელი"
      register={register}
      error={errors.fullName?.message}
    />
  );
}
```

### Email Input აიქონით

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

### Password Input გადართვით

```tsx
import { AiOutlineLock } from "react-icons/ai";

<Input
  name="password"
  type="password"
  placeholder="შეიყვანეთ პაროლი"
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
  placeholder="შეიყვანეთ თქვენი შეტყობინება"
  register={register}
/>
```

---

## 🎨 ფუნქციების დეტალები

### პაროლის ხილვადობის გადართვა
როცა `type="password"`, ავტომატურად გამოჩნდება თვალის აიქონი, რომელიც საშუალებას აძლევს მომხმარებელს გადართოს პაროლის ხილვადობა.

### აიქონის პოზიციონირება
აიქონები შეიძლება განთავსდეს input ველის მარცხენა ან მარჯვენა მხარეს `iconPosition` prop-ის გამოყენებით.

### შეცდომების ჩვენება
შეცდომები ნაჩვენებია input ველის ქვემოთ წითელი ტექსტით, როცა `error` prop მოწოდებულია.

---

## 📁 ფაილის სტრუქტურა

```
Input/
├── Input.tsx          # მთავარი კომპონენტი
├── Input.module.scss  # კომპონენტის სტილები
├── input.type.ts      # TypeScript ტიპები
├── README.md          # ინგლისური დოკუმენტაცია
└── README.ka.md       # ქართული დოკუმენტაცია
```

---

## 🔧 TypeScript ტიპები

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

## 🎨 სტილიზაცია

კომპონენტი იყენებს SCSS მოდულებს შემდეგი კლასებით:

- `.inputWrapper` - Input-ისა და აიქონის კონტეინერი
- `.input` - ძირითადი input სტილიზაცია
- `.textarea` - Textarea ვარიანტი
- `.icon` - აიქონის სტილიზაცია
- `.iconLeft` / `.iconRight` - აიქონის პოზიციონირება
- `.passwordToggle` - პაროლის ხილვადობის გადართვის ღილაკი
- `.error` - შეცდომის შეტყობინების სტილიზაცია

---

## ♿ ხელმისაწვდომობა

- სემანტიკური HTML ელემენტები
- სწორი label ასოციაციები (name prop-ის მეშვეობით)
- შეცდომების შეტყობინებები screen reader-ებისთვის
- კლავიატურის ნავიგაციის მხარდაჭერა
- პაროლის გადართვის ღილაკი ხელმისაწვდომია კლავიატურიდან

---

## 📝 შენიშვნები

- პაროლის გადართვის აიქონი ავტომატურად გამოჩნდება password input-ებისთვის
- Textarea ავტომატურად არეგულირებს სიმაღლეს კონტენტის მიხედვით
- აიქონები არჩევითია და შეიძლება იყოს ნებისმიერი React Icon კომპონენტი
- კომპონენტი მუშაობს React Hook Form-ის გარეშეც

---

შექმნილია ❤️-ით თამარ ხუსკივაძის მიერ
