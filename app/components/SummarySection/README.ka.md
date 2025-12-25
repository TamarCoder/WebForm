# 📊 SummarySection კომპონენტი

**🇬🇪 ქართული** | [🇬🇧 English](./README.md)

შეჯამების გადახედვის კომპონენტი, რომელიც აჩვენებს ყველა შეგროვილ ფორმის მონაცემს საბოლოო გაგზავნამდე მრავალეტაპიან რეგისტრაციის ფორმაში (ნაბიჯი 3).

---

## 📖 მიმოხილვა

SummarySection კომპონენტი უზრუნველყოფს ყოვლისმომცველ მიმოხილვას ყველა შეყვანილი ინფორმაციის რეგისტრაციის პროცესში. აჩვენებს მონაცემებს ორგანიზებულ ბარათებში მარტივი გადახედვისთვის საბოლოო გაგზავნამდე.

---

## ✨ ფუნქციები

- ✅ ორგანიზებული ბარათების განლაგება
- ✅ სამი სექციის ჩვენება (ძირითადი ინფო, განათლება, ანგარიში)
- ✅ TypeScript მხარდაჭერა
- ✅ SCSS მოდულის სტილიზაცია
- ✅ რესპონსიული დიზაინი
- ✅ სუფთა და წაკითხვადი პრეზენტაცია
- ✅ ნავიგაციის ღილაკები (უკან/გაგზავნა)

---

## 📦 Props

| Prop | ტიპი | აუცილებელი | აღწერა |
|------|------|------------|--------|
| `formData` | `FormValues` | კი | ძირითადი ინფორმაცია ნაბიჯი 1-დან |
| `emailData` | `EmailFormValues` | კი | ემაილი/პაროლი ნაბიჯი 2-დან |
| `onBack` | `() => void` | კი | Callback უკან ნავიგაციისთვის |
| `onSubmit` | `() => void` | კი | Callback საბოლოო გაგზავნისთვის |

---

## 🔧 TypeScript ტიპები

```typescript
export interface SummarySectionProps {
  formData: FormValues;
  emailData: EmailFormValues;
  onBack: () => void;
  onSubmit: () => void;
}

interface FormValues {
  fullName: string;
  constituency: string;
  programmingField: string;
  position: string;
  dateOfBirth: Date;
  gender: string;
  message: string;
  degree: string;
  institution: string;
  graduationDate: Date;
}

interface EmailFormValues {
  email: string;
  password: string;
  repeatEmail: string;
}
```

---

## 🚀 გამოყენება

```tsx
import SummarySection from "@/app/components/SummarySection/SummarySection";

function RegistrationForm() {
  const [savedFormData, setSavedFormData] = useState<FormValues | null>(null);
  const [emailData, setEmailData] = useState<EmailFormValues | null>(null);

  const handleSubmit = () => {
    console.log("საბოლოო გაგზავნა:", { ...savedFormData, ...emailData });
    // გაგზავნა backend-ზე
  };

  const handleBack = () => {
    setCurrentStep(2); // დაბრუნება ემაილის ეტაპზე
  };

  return (
    <SummarySection
      formData={savedFormData}
      emailData={emailData}
      onBack={handleBack}
      onSubmit={handleSubmit}
    />
  );
}
```

---

## 🎨 სტრუქტურა

კომპონენტი აჩვენებს მონაცემებს სამ ორგანიზებულ ბარათში:

### 1. ძირითადი ინფორმაციის ბარათი
- სრული სახელი
- საარჩევნო ოლქი
- პროგრამირების მიმართულება
- გამოცდილების დონე
- სამუშაოს დაწყების თარიღი
- სქესი
- შეტყობინება

### 2. განათლების ბარათი
- ხარისხი
- ინსტიტუტი
- დამთავრების თარიღი

### 3. ანგარიშის ინფორმაციის ბარათი
- ელ-ფოსტა
- პაროლი (დამალული ვარსკვლავებით)

---

## 📋 ჩვენების ფორმატი

```tsx
<div className={styles.summaryContainer}>
  <h2>გადახედეთ თქვენს ინფორმაციას</h2>
  <p>გთხოვთ გადახედოთ დეტალებს გაგზავნამდე</p>

  <div className={styles.summaryCard}>
    <h3>ძირითადი ინფორმაცია</h3>
    <p><strong>სრული სახელი:</strong> {formData.fullName}</p>
    <p><strong>პროგრამირების მიმართულება:</strong> {formData.programmingField}</p>
    {/* ... მეტი ველები */}
  </div>

  <div className={styles.summaryCard}>
    <h3>განათლება</h3>
    {/* განათლების ველები */}
  </div>

  <div className={styles.summaryCard}>
    <h3>ანგარიშის ინფორმაცია</h3>
    {/* ანგარიშის ველები */}
  </div>

  <div className={styles.buttonGroup}>
    <Button text="უკან" onClick={onBack} />
    <Button text="გაგზავნა" onClick={onSubmit} type="submit" />
  </div>
</div>
```

---

## 📁 ფაილის სტრუქტურა

```
SummarySection/
├── SummarySection.tsx        # მთავარი კომპონენტი
├── SummarySection.module.scss # კომპონენტის სტილები
├── README.md                  # ინგლისური დოკუმენტაცია
└── README.ka.md               # ქართული დოკუმენტაცია
```

---

## 🎨 სტილიზაცია

კომპონენტი იყენებს SCSS მოდულებს შემდეგი კლასებით:

- `.summaryContainer` - მთავარი კონტეინერი
- `.summaryCard` - ცალკეული ბარათი თითოეული სექციისთვის
- `.buttonGroup` - ნავიგაციის ღილაკების კონტეინერი

მოარგეთ [SummarySection.module.scss](./SummarySection.module.scss) ფაილის შეცვლით.

---

## 🎯 ინტეგრაციის მაგალითი

```tsx
// მშობელ Form კომპონენტში
const [currentStep, setCurrentStep] = useState(1);
const [savedFormData, setSavedFormData] = useState<FormValues | null>(null);
const [emailData, setEmailData] = useState<EmailFormValues | null>(null);

{currentStep === 3 && savedFormData && emailData && (
  <SummarySection
    formData={savedFormData}
    emailData={emailData}
    onBack={() => setCurrentStep(2)}
    onSubmit={() => {
      alert("რეგისტრაცია წარმატებულია!");
      // მონაცემების გაგზავნა backend-ზე
    }}
  />
)}
```

---

## ♿ ხელმისაწვდომობა

- სემანტიკური HTML სტრუქტურა
- მკაფიო სათაურები და ლეიბლები
- კლავიატურის ნავიგაციის მხარდაჭერა
- Screen reader თავსებადი
- ლოგიკური კითხვის თანმიმდევრობა

---

## 📝 შენიშვნები

- პაროლები ყოველთვის ნაჩვენებია ვარსკვლავებით უსაფრთხოებისთვის
- თარიღები ფორმატირებულია წაკითხვადობისთვის
- ყველა მონაცემი მხოლოდ-წასაკითხია ამ ხედში
- მომხმარებლებს შეუძლიათ უკან დაბრუნება ინფორმაციის რედაქტირებისთვის
- კომპონენტი ხატავს მხოლოდ როცა formData და emailData ორივე ხელმისაწვდომია

---

## 🔒 უსაფრთხოება

- პაროლი არასოდეს არის ნაჩვენები ღია ტექსტით
- მონაცემები მხოლოდ ნაჩვენებია, არა რედაქტირებადი
- მგრძნობიარე ინფორმაცია შესაბამისად არის დამალული

---

შექმნილია ❤️-ით თამარ ხუსკივაძის მიერ
