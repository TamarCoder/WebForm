# ✉️ EmailSection კომპონენტი

**🇬🇪 ქართული** | [🇬🇧 English](./README.md)

ემაილისა და პაროლის შეყვანის სექცია მრავალეტაპიანი რეგისტრაციის ფორმისთვის (ნაბიჯი 2).

---

## 📖 მიმოხილვა

EmailSection კომპონენტი ამუშავებს ემაილისა და პაროლის შეგროვებას რეგისტრაციის პროცესში. მოიცავს ფორმის ვალიდაციას, პაროლის დადასტურებას და ნავიგაციას ნაბიჯებს შორის.

---

## ✨ ფუნქციები

- ✅ ემაილის ვალიდაცია
- ✅ პაროლის სიძლიერის მოთხოვნები
- ✅ პაროლის დადასტურების შესაბამისობა
- ✅ React Hook Form ინტეგრაცია
- ✅ Yup schema ვალიდაცია
- ✅ აიქონების ინტეგრაცია (მარცხნივ განთავსებული)
- ✅ ნავიგაცია (უკან/გაგრძელება ღილაკები)

---

## 📦 Props

| Prop | ტიპი | აუცილებელი | აღწერა |
|------|------|------------|--------|
| `onSubmit` | `(data: EmailFormValues) => void` | კი | Callback ფორმის გაგზავნისას |
| `onBack` | `() => void` | კი | Callback უკან დაბრუნებისთვის |

---

## 🚀 გამოყენება

```tsx
import EmailSection from "@/app/components/EmailSection/EmailSection";

function RegistrationForm() {
  const handleEmailSubmit = (data) => {
    console.log("ემაილის მონაცემები:", data);
    // გადადით შემდეგ ნაბიჯზე
  };

  const handleBack = () => {
    // დაბრუნდით წინა ნაბიჯზე
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

## 📋 ფორმის ველები

1. **Email** 
   - ტიპი: ემაილის ინფუთი
   - აიქონი: MdEmail (მარცხნივ განთავსებული)
   - ვალიდაცია: აუცილებელი, სწორი ემაილის ფორმატი

2. **Password**
   - ტიპი: პაროლის ინფუთი ხილვადობის გადართვით
   - აიქონი: AiOutlineLock (მარცხნივ განთავსებული)
   - ვალიდაცია: აუცილებელი, მინიმუმ 6 სიმბოლო

3. **Repeat Email**
   - ტიპი: ემაილის ინფუთი
   - ვალიდაცია: უნდა ემთხვეოდეს email ველს

---

## ✅ ვალიდაციის წესები

```typescript
email: yup.string()
  .email("გთხოვთ შეიყვანოთ სწორი ელ-ფოსტის მისამართი")
  .required("ელ-ფოსტა აუცილებელია"),

password: yup.string()
  .min(6, "პაროლი უნდა იყოს მინიმუმ 6 სიმბოლო")
  .required("პაროლი აუცილებელია"),

repeatEmail: yup.string()
  .oneOf([yup.ref("email")], "ელ-ფოსტები უნდა ემთხვეოდეს ერთმანეთს")
  .required("გთხოვთ გაიმეოროთ ელ-ფოსტა")
```

---

## 🎨 სტრუქტურა

```tsx
<div className={styles.emailSection}>
  <h2>შექმენი ანგარიში</h2>
  <p>გთხოვთ შეავსოთ თქვენი ელ-ფოსტა და პაროლი</p>
  
  <form>
    <Input name="email" icon={MdEmail} />
    <Input name="password" type="password" icon={AiOutlineLock} />
    <Input name="repeatEmail" icon={MdEmail} />
    
    <div className={styles.buttonGroup}>
      <Button text="უკან" onClick={onBack} />
      <Button text="გაგრძელება" type="submit" />
    </div>
  </form>
</div>
```

---

## 📁 ფაილის სტრუქტურა

```
EmailSection/
├── EmailSection.tsx        # მთავარი კომპონენტი
├── EmailSection.module.scss # კომპონენტის სტილები
├── Email.type.ts           # TypeScript ტიპები & ვალიდაცია
├── README.md               # ინგლისური დოკუმენტაცია
└── README.ka.md            # ქართული დოკუმენტაცია
```

---

## 🔧 TypeScript ტიპები

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

## 🎯 ინტეგრაცია მრავალეტაპიან ფორმასთან

```tsx
// მშობელ Form კომპონენტში
const [emailData, setEmailData] = useState<EmailFormValues | null>(null);

{currentStep === 2 && (
  <EmailSection
    onSubmit={(data) => {
      setEmailData(data);
      setCurrentStep(3); // გადასვლა შეჯამებაზე
    }}
    onBack={() => setCurrentStep(1)} // დაბრუნება ძირითად ინფოზე
  />
)}
```

---

## ♿ ხელმისაწვდომობა

- სათანადო label ასოციაციები
- შეცდომების შეტყობინებები screen reader-ებისთვის
- კლავიატურის ნავიგაციის მხარდაჭერა
- პაროლის ხილვადობის გადართვა

---

## 📝 შენიშვნები

- პაროლის ინფუთი ავტომატურად აჩვენებს თვალის აიქონს ხილვადობის გადასართველად
- ემაილის ვალიდაცია ხდება blur-ზე და submit-ზე
- ფორმა ხელს უშლის გაგზავნას თუ ვალიდაცია ვერ გაიარა
- უკან ღილაკი არ ამოწმებს ფორმას

---

შექმნილია ❤️-ით თამარ ხუსკივაძის მიერ
