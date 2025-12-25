# 🔐 SignIn კომპონენტი

**🇬🇪 ქართული** | [🇬🇧 English](./README.md)

სუფთა და თანამედროვე შესვლის კომპონენტი ემაილისა და პაროლის ინფუთებით, ფორმის ვალიდაციითა და ავთენტიფიკაციის ნაკადით.

---

## 📖 მიმოხილვა

SignIn კომპონენტი უზრუნველყოფს მომხმარებლისთვის მოსახერხებელ ავთენტიფიკაციის ინტერფეისს არსებული მომხმარებლებისთვის ანგარიშში შესასვლელად. მოიცავს ემაილისა და პაროლის ინფუთებს ვალიდაციით, "დაგავიწყდა პაროლი?" ბმულს და ნავიგაციას რეგისტრაციის გვერდზე.

---

## ✨ ფუნქციები

- ✅ ემაილისა და პაროლის ავთენტიფიკაცია
- ✅ ფორმის ვალიდაცია Yup-ით
- ✅ React Hook Form ინტეგრაცია
- ✅ პაროლის ხილვადობის გადართვა
- ✅ "დაგავიწყდა პაროლი?" ბმული
- ✅ ნავიგაცია რეგისტრაციის გვერდზე
- ✅ აიქონების ინტეგრაცია (მარცხნივ განთავსებული)
- ✅ TypeScript მხარდაჭერა
- ✅ SCSS მოდულის სტილიზაცია

---

## 📦 Props

| Prop | ტიპი | აუცილებელი | აღწერა |
|------|------|------------|--------|
| `onSignUp` | `() => void` | არა | Callback რეგისტრაციის გვერდზე გადასასვლელად |
| `onSubmit` | `(data: SignInFormValues) => void` | არა | Callback ფორმის გაგზავნისას |

---

## 🚀 გამოყენება

### ძირითადი მაგალითი

```tsx
import SignIn from "@/app/components/SignIn/SignIn";

function AuthPage() {
  const handleSignIn = (data) => {
    console.log("შესვლის მონაცემები:", data);
    // მომხმარებლის ავთენტიფიკაცია
  };

  const handleSignUp = () => {
    // რეგისტრაციის გვერდზე გადასვლა
  };

  return (
    <SignIn 
      onSubmit={handleSignIn} 
      onSignUp={handleSignUp} 
    />
  );
}
```

### ინტეგრაცია მრავალეტაპიან ფორმასთან

```tsx
const [showSignIn, setShowSignIn] = useState(false);

{showSignIn ? (
  <SignIn onSignUp={() => setShowSignIn(false)} />
) : (
  <RegistrationForm />
)}
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

---

## ✅ ვალიდაციის წესები

```typescript
email: yup.string()
  .email("გთხოვთ შეიყვანოთ სწორი ელ-ფოსტის მისამართი")
  .required("ელ-ფოსტა აუცილებელია"),

password: yup.string()
  .min(6, "პაროლი უნდა იყოს მინიმუმ 6 სიმბოლო")
  .required("პაროლი აუცილებელია")
```

---

## 🎨 სტრუქტურა

```tsx
<div className={styles.signInContainer}>
  <div className={styles.signInCard}>
    <h2>შესვლა</h2>
    <p>კეთილი იყოს თქვენი დაბრუნება! გთხოვთ შეიყვანოთ თქვენი მონაცემები.</p>
    
    <form>
      <Input name="email" icon={MdEmail} iconPosition="left" />
      <Input name="password" type="password" icon={AiOutlineLock} iconPosition="left" />
      
      <a href="#" className={styles.forgotPassword}>დაგავიწყდა პაროლი?</a>
      
      <Button text="შესვლა" type="submit" />
      
      <p>არ გაქვთ ანგარიში? <a href="#" onClick={onSignUp}>დარეგისტრირდი</a></p>
    </form>
  </div>
</div>
```

---

## 📁 ფაილის სტრუქტურა

```
SignIn/
├── SignIn.tsx           # მთავარი კომპონენტი
├── SignIn.module.scss   # კომპონენტის სტილები
├── SignIn.type.ts       # TypeScript ტიპები & ვალიდაცია
├── README.md            # ინგლისური დოკუმენტაცია
└── README.ka.md         # ქართული დოკუმენტაცია
```

---

## 🔧 TypeScript ტიპები

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

## 🎨 სტილიზაცია

კომპონენტი იყენებს SCSS მოდულებს EmailSection კომპონენტის დიზაინთან შესაბამისად:

- `.signInContainer` - მთელი გვერდის კონტეინერი
- `.signInCard` - ცენტრირებული ბარათის განლაგება
- `.forgotPassword` - ბმულის სტილიზაცია
- თანმიმდევრული აპლიკაციის ნარინჯისფერ თემასთან

---

## ♿ ხელმისაწვდომობა

- სემანტიკური HTML სტრუქტურა
- კლავიატურის ნავიგაციის მხარდაჭერა
- Screen reader თავსებადი
- Focus მართვა ფორმის ინფუთებისთვის
- მკაფიო შეცდომების შეტყობინებები

---

## 🔗 ბმულები

- **დაგავიწყდა პაროლი?** - Placeholder პაროლის აღდგენის ნაკადისთვის
- **დარეგისტრირდი** - გადადის რეგისტრაციის ფორმაზე `onSignUp` callback-ის მეშვეობით

---

## 📝 შენიშვნები

- პაროლის ველი ავტომატურად აჩვენებს თვალის აიქონს ხილვადობის გადასართველად
- ემაილის ვალიდაცია ხდება blur-ზე და submit-ზე
- კომპონენტი შეიძლება გამოყენებულ იქნეს დამოუკიდებლად ან ინტეგრირებული მრავალეტაპიან ფორმებში
- დიზაინი შესაბამისია EmailSection კომპონენტის ვიზუალურ სტილთან

---

შექმნილია ❤️-ით თამარ ხუსკივაძის მიერ
