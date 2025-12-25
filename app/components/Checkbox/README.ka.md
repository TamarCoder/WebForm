# ✅ Checkbox კომპონენტი

**🇬🇪 ქართული** | [🇬🇧 English](./README.md)

მორგებადი checkbox ჯგუფის კომპონენტი React Hook Form ინტეგრაციითა და TypeScript მხარდაჭერით.

---

## 📖 მიმოხილვა

Checkbox კომპონენტი ხატავს checkbox-ების ჯგუფს label-ებით, მხარს უჭერს ფორმის ვალიდაციას და state მართვას React Hook Form-ის მეშვეობით.

---

## ✨ ფუნქციები

- ✅ მრავალი checkbox ვარიანტი
- ✅ React Hook Form ინტეგრაცია
- ✅ TypeScript მხარდაჭერა
- ✅ მორგებული სტილიზაცია SCSS მოდულებით
- ✅ შეცდომების დამუშავება და ვალიდაცია
- ✅ ხელმისაწვდომი და სემანტიკური HTML

---

## 📦 Props

| Prop | ტიპი | აუცილებელი | აღწერა |
|------|------|------------|--------|
| `options` | `CheckboxOption[]` | კი | Checkbox ვარიანტების მასივი |
| `name` | `string` | კი | ველის სახელი ფორმის რეგისტრაციისთვის |
| `register` | `UseFormRegister` | არა | React Hook Form register ფუნქცია |
| `error` | `string` | არა | საჩვენებელი შეცდომის შეტყობინება |

---

## 🔧 TypeScript ტიპები

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

## 🚀 გამოყენება

### ძირითადი მაგალითი

```tsx
import Checkbox from "@/app/components/Checkbox/Checkbox";
import { useForm } from "react-hook-form";

const degreeOptions = [
  { value: "bachelor", label: "ბაკალავრი" },
  { value: "master", label: "მაგისტრი" },
  { value: "phd", label: "დოქტორანტი" }
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

### სქესის ვარიანტებით

```tsx
const genderOptions = [
  { value: "male", label: "მამრობითი" },
  { value: "female", label: "მდედრობითი" },
  { value: "other", label: "სხვა" }
];

<Checkbox
  options={genderOptions}
  name="gender"
  register={register}
/>
```

---

## 🎨 სტრუქტურა

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

## 📁 ფაილის სტრუქტურა

```
Checkbox/
├── Checkbox.tsx          # მთავარი კომპონენტი
├── Checkbox.module.scss  # კომპონენტის სტილები
├── checkbox.type.ts      # TypeScript ტიპები
├── README.md             # ინგლისური დოკუმენტაცია
└── README.ka.md          # ქართული დოკუმენტაცია
```

---

## 🎨 სტილიზაცია

კომპონენტი იყენებს SCSS მოდულებს შემდეგი კლასებით:

- `.checkboxGroup` - ყველა checkbox-ის კონტეინერი
- `.checkboxLabel` - ცალკეული checkbox label wrapper
- `.error` - შეცდომის შეტყობინების სტილიზაცია

მოარგეთ [Checkbox.module.scss](./Checkbox.module.scss) ფაილის შეცვლით.

---

## ♿ ხელმისაწვდომობა

- სემანტიკური `<label>` და `<input>` ელემენტები
- კლავიატურის ნავიგაციის მხარდაჭერა
- Screen reader თავსებადი
- შეცდომების შეტყობინებები ხელმისაწვდომობის ტექნოლოგიებისთვის

---

## 📝 შენიშვნები

- კომპონენტი ნაგულისხმევად მხარს უჭერს მრავალ არჩევანს
- გამოიყენეთ radio ღილაკები ერთი არჩევანისთვის (სხვა კომპონენტი)
- Options მასივი შეიძლება დინამიურად გენერირდეს
- უსაფრთხოდ მუშაობს React Hook Form ვალიდაციასთან

---

შექმნილია ❤️-ით თამარ ხუსკივაძის მიერ
