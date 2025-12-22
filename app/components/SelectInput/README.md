# SelectInput Component Documentation

## მიმოხილვა
`SelectInput` არის custom dropdown select component რომელიც უზრუნველყოფს სრულ კონტროლს dropdown მენიუზე და თავიდან აცილებს native `<select>` ელემენტის სტილიზაციის შეზღუდვებს.

## კოდის დეტალური ახსნა

### Imports (ხაზები 1-4)
```tsx
'use client'                                    // Next.js client component directive
import React, { useState, useRef, useEffect }   // React hooks-ები state და DOM მართვისთვის
import { DropdownProps } from "./option"        // TypeScript type definition
import styles from "./SelectInput.module.scss"  // SCSS module styles
```

### Component Definition (ხაზები 6-9)
```tsx
const SelectInput: React.FC<DropdownProps> = ({
  options,        // მასივი ოფციების (label და value)
  lable,          // label ტექსტი (typo: უნდა იყოს "label")
  initialValue,   // საწყისი მნიშვნელობა
})
```

### State Management (ხაზები 10-15)
```tsx
const [selectedValue, setSelectedValue] = useState<string>(
  initialValue || options[0]?.value || ""  // ირჩევს initialValue-ს, თუ არ არის - პირველ option-ს
);
const [isOpen, setIsOpen] = useState(false);   // dropdown ღიაა თუ დახურული
const selectedOption = options.find(...);       // პოულობს არჩეულ option-ს label-ის საჩვენებლად
```

### useRef - DOM ელემენტზე წვდომა (ხაზი 14)
```tsx
const dropdownRef = useRef<HTMLDivElement>(null);
```

**რა არის useRef?**
- `useRef` არის React hook რომელიც გვაძლევს "reference" (მითითებას) DOM ელემენტზე
- ჩვეულებრივ JavaScript-ში გამოიყენებოდა `document.getElementById()` - React-ში ვიყენებთ `useRef`-ს

**როგორ მუშაობს?**
1. ვქმნით reference-ს: `const dropdownRef = useRef<HTMLDivElement>(null)`
2. JSX-ში ვაბამთ ელემენტს: `<div ref={dropdownRef}>`
3. ახლა `dropdownRef.current` გვაძლევს წვდომას რეალურ DOM ელემენტზე

**მაგალითი:**
```tsx
const dropdownRef = useRef<HTMLDivElement>(null);

// მერე JSX-ში:
<div ref={dropdownRef}>
  // ახლა dropdownRef.current === ეს div ელემენტი
</div>

// dropdownRef.current-ით შეგვიძლია:
dropdownRef.current?.contains(element)  // შევამოწმოთ შეიცავს თუ არა რომელიმე element-ს
dropdownRef.current?.getBoundingClientRect()  // ვიპოვოთ ელემენტის პოზიცია
dropdownRef.current?.focus()  // დავაფოკუსიროთ ელემენტი
```

**რატომ გვჭირდება ჩვენს კომპონენტში?**
- რათა დავადგინოთ დააკლიკა თუ არა მომხმარებელმა dropdown-ის **შიგნით** თუ **გარეთ**
- თუ გარეთ დააკლიკა → ჩავხუროთ dropdown

### Click Outside Handler - დეტალური ახსნა (ხაზები 17-27)

**რა არის useEffect?**
- `useEffect` არის React hook რომელიც გვაძლევს საშუალებას გავუშვათ კოდი component-ის lifecycle-ის დროს
- ამ შემთხვევაში: როცა component იტვირთება (mount), დავამატოთ click listener, და როცა წაიშლება (unmount) - წავშალოთ listener

**ნაბიჯ-ნაბიჯ როგორ მუშაობს:**

```tsx
useEffect(() => {
  // ეს კოდი ეშვება როცა component პირველად იტვირთება
  
  // 1️⃣ შევქმენით ფუნქცია რომელიც მუშაობს click-ზე
  const handleClickOutside = (event: MouseEvent) => {
    
    // 2️⃣ ვიღებთ dropdown container-ს
    if (dropdownRef.current && 
        // 3️⃣ ვამოწმებთ: სად დააკლიკა მომხმარებელმა?
        !dropdownRef.current.contains(event.target as Node)) {
      
      // 4️⃣ თუ დააკლიკა dropdown-ის ᲒᲐᲠᲔᲗ → ვხუროთ
      setIsOpen(false);
    }
  };

  // 5️⃣ ვამატებთ listener-ს მთელ document-ზე
  // ახლა ყოველ click-ზე გაეშვება handleClickOutside
  document.addEventListener("mousedown", handleClickOutside);
  
  // 6️⃣ CLEANUP ფუნქცია - ეშვება როცა component წაიშლება
  // აუცილებელია რომ არ დარჩეს "მკვდარი" listener-ები
  return () => document.removeEventListener("mousedown", handleClickOutside);
  
}, []); // [] = ეშვება მხოლოდ ერთხელ, component mount-ზე
```

**კონკრეტული მაგალითი:**

```
USER-ის მოქმედება:
1. User აკლიკებს dropdown-ს → dropdown იხსნება (isOpen = true)
2. User აკლიკებს გვერდის სხვა ადგილას

რა ხდება?
1. handleClickOutside ფუნქცია გაიშვება (რადგან listener დამატებული გვაქვს)
2. event.target = სად დააკლიკა (მაგ: <body> ან სხვა element)
3. dropdownRef.current = ჩვენი dropdown container
4. dropdownRef.current.contains(event.target) = false (არ შეიცავს, რადგან გარეთ დააკლიკა)
5. !false = true → if სრულდება
6. setIsOpen(false) → dropdown იხურება ✅
```

**dropdownRef.current.contains() - რა არის?**
- ეს არის DOM API method
- აბრუნებს `true`-ს თუ element შეიცავს მოცემულ child element-ს
- მაგალითი:
```html
<div ref={dropdownRef}>  ← ეს არის dropdownRef.current
  <button>Click</button>
  <div class="dropdown">...</div>
</div>

<button>Outside</button> ← ეს გარეთაა

// თუ დააკლიკა "Click" ღილაკს:
dropdownRef.current.contains(event.target) = true ✅

// თუ დააკლიკა "Outside" ღილაკს:
dropdownRef.current.contains(event.target) = false ❌
```

**რატომ return () => ... ?**
- როცა component წაიშლება (მაგ: გადადის სხვა გვერდზე), listener უნდა წავშალოთ
- თუ არ წავშალთ, JavaScript გააგრძელებს click-ების მოსმენას მაინც
- ეს გამოიწვევს **memory leak** (მეხსიერების დაკარგვას)

**რატომ [] dependency array?**
- `[]` ნიშნავს: "გაუშვი ეს კოდი მხოლოდ component mount-ისას"
- თუ დავწერთ `[isOpen]` → ყოველ ჯერზე როცა isOpen შეიცვლება, listener-ი წაიშლება და თავიდან დაემატება (არასაჭირო)

### Select Handler (ხაზები 29-32)
```tsx
const handleSelect = (value: string) => {
  setSelectedValue(value);  // ინახავს არჩეულ მნიშვნელობას
  setIsOpen(false);         // ხურავს dropdown-ს
};
```

### JSX Rendering (ხაზები 34-68)

#### Main Container (ხაზი 35)
```tsx
<div className={styles.selectInput} ref={dropdownRef}>
  // ref={dropdownRef} - საშუალებას გვაძლევს დავადგინოთ click outside
```

#### Label (ხაზი 36)
```tsx
<label className={styles.label}>{lable}</label>
  // აჩვენებს label ტექსტს dropdown-ის თავზე
```

#### Select Wrapper (ხაზი 37)
```tsx
<div className={styles.selectWrapper}>
  // relative positioning container dropdown-ისთვის
```

#### Select Button (ხაზები 38-47)
```tsx
<div
  className={`${styles.select} ${isOpen ? styles.open : ""}`}
  // დინამიური class - ემატება .open როცა dropdown ღიაა
  onClick={() => setIsOpen(!isOpen)}
  // toggle dropdown open/close state
>
  <span className={styles.selectedText}>
    {selectedOption?.label || "Select an option"}
    // აჩვენებს არჩეული option-ის label-ს
  </span>
  <span className={styles.arrow}>▼</span>
    // dropdown arrow იკონი
</div>
```

#### Dropdown Menu (ხაზები 48-65)
```tsx
{isOpen && (  // conditional rendering - ჩნდება მხოლოდ როცა isOpen === true
  <div className={styles.dropdown}>
    // absolute positioned dropdown container
    {options.map((option) => (
      // loop-ავს ყველა option-ზე
      <div
        key={option.value}
        className={`${styles.option} ${
          option.value === selectedValue ? styles.selected : ""
        }`}
        // ემატება .selected class თუ ეს option არჩეულია
        onClick={() => handleSelect(option.value)}
        // ირჩევს option-ს click-ზე
      >
        {option.value === selectedValue && (
          <span className={styles.checkmark}>✓</span>
          // აჩვენებს checkmark-ს არჩეულ option-ზე
        )}
        {option.label}  // option-ის ტექსტი
      </div>
    ))}
  </div>
)}
```

## SCSS სტილების ახსნა

### .selectInput
- **flex-direction: column** - label და select ვერტიკალურად განლაგება
- **margin-bottom: 16px** - დაშორება შემდეგ element-თან

### .label
- **margin-bottom: 8px** - დაშორება select-თან
- **font-size: 14px**, **font-weight: 500** - ტექსტის სტილი

### .selectWrapper
- **position: relative** - საშუალებას აძლევს dropdown-ს absolute positioning

### .select
- **display: flex** - horizontal layout selected text-ისა და arrow-ის
- **padding: 12px 16px** - შიდა დაშორება
- **border-radius: 8px** - მომრგვალებული კუთხეები
- **cursor: pointer** - აჩვენებს რომ clickable-ია
- **&.open** - როცა dropdown ღიაა, ემატება blue border და shadow

### .dropdown
- **position: absolute** - არ იკავებს ადგილს document flow-ში
- **top: calc(100% + 4px)** - select-ის ქვემოთ 4px დაშორებით
- **z-index: 1000** - სხვა ელემენტების თავზე ჩნდება
- **box-shadow** - shadow ეფექტი
- **animation: slideDown** - slide-down ანიმაცია

### .option
- **padding: 12px 16px** - შიდა დაშორება
- **&:hover** - light gray background hover-ზე
- **&.selected** - blue background არჩეულ option-ზე

### .checkmark
- **color: #007bff** - blue checkmark არჩეული option-ისთვის

## გამოყენების მაგალითი

```tsx
<SelectInput
  lable="Select an option"
  options={[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' }
  ]}
  initialValue="1"
/>
```

## მთავარი Features

✅ Custom styled dropdown (არა native select)
✅ Click outside ხურავს dropdown-ს
✅ Checkmark არჩეულ option-ზე
✅ Smooth animations
✅ z-index: 1000 - გარანტირებულია რომ სხვა ელემენტებს არ დაეფარება
✅ Keyboard navigation არ არის (შეიძლება დამატება)

## შესაძლო გაუმჯობესებები

- Keyboard navigation (Arrow keys, Enter, Escape)
- Search/Filter functionality
- Multi-select support
- Disabled state
- Error state styling
- "lable" → "label" typo fix
