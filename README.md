# 📝 Multi-Step Registration Form

[🇬🇪 ქართული](./README.ka.md) | **🇬🇧 English**

A modern, fully responsive multi-step registration form built with Next.js, TypeScript, and React Hook Form.

![Next.js](https://img.shields.io/badge/Next.js-15.5.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![React](https://img.shields.io/badge/React-19.0-61dafb)
![License](https://img.shields.io/badge/license-MIT-green)

---

## ✨ Features

- 🎨 **Modern UI/UX** - Clean and intuitive design
- 📱 **Fully Responsive** - Works seamlessly on all devices
- 🔐 **Form Validation** - Powered by Yup schema validation
- 🎯 **Multi-Step Process** - 3-step registration flow
- 🌐 **Sign In/Sign Up** - Complete authentication UI
- ♿ **Accessible** - WCAG compliant components
- 🎭 **Reusable Components** - Modular and maintainable code
- 🚀 **TypeScript** - Type-safe development

---

## 🎬 Demo

<!-- Add GIF here -->
![Demo](./docs/demo.gif)

---

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/webform.git

# Navigate to project directory
cd webform

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## 🏗️ Project Structure

```
WebForm/
├── app/
│   ├── components/
│   │   ├── Button/           # Reusable button component
│   │   ├── Calendar/         # Date picker component
│   │   ├── Checkbox/         # Checkbox group component
│   │   ├── EmailSection/     # Email & password step
│   │   ├── Form/             # Main registration form
│   │   ├── Input/            # Text input component
│   │   ├── SelectInput/      # Dropdown select component
│   │   ├── SignIn/           # Sign in page
│   │   └── SummarySection/   # Final review step
│   ├── styles/
│   │   └── _variables.scss   # SCSS variables
│   ├── globals.scss          # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── public/                   # Static assets
├── docs/                     # Documentation and screenshots
└── README.md                 # This file
```

---

## 🎯 Registration Flow

### Step 1: Basic Information
- Full Name
- Constituency
- Programming Field (Dropdown)
- Experience Level (Dropdown)
- Work Start Date (Calendar)
- Gender (Radio buttons)
- Message (Textarea)
- Education (Degree, Institution, Graduation Date)

### Step 2: Account Creation
- Email
- Password
- Confirm Password

### Step 3: Summary & Review
- Review all entered information
- Submit or go back to edit

---

## 🧩 Components

Each component is self-contained with its own:
- TypeScript types
- SCSS modules
- Validation schemas (where applicable)
- README documentation

### Available Components:

| Component | Description | Documentation |
|-----------|-------------|---------------|
| **Button** | Customizable button with variants | [README](./app/components/Button/README.md) |
| **Calendar** | Date picker with validation | [README](./app/components/Calendar/README.md) |
| **Checkbox** | Checkbox group with options | [README](./app/components/Checkbox/README.md) |
| **Input** | Text input with icons & validation | [README](./app/components/Input/README.md) |
| **SelectInput** | Dropdown select component | [README](./app/components/SelectInput/README.md) |
| **EmailSection** | Email & password form step | [README](./app/components/EmailSection/README.md) |
| **SignIn** | Sign in page | [README](./app/components/SignIn/README.md) |
| **SummarySection** | Final review section | [README](./app/components/SummarySection/README.md) |

---

## 🛠️ Technologies Used

- **Framework:** Next.js 15.5.0
- **Language:** TypeScript 5
- **UI Library:** React 19
- **Form Management:** React Hook Form
- **Validation:** Yup
- **Styling:** SCSS Modules
- **Icons:** React Icons
- **Date Picker:** React Calendar

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Tamar Khuskivadze**

- GitHub: [@tamarkhuskivadze](https://github.com/tamarkhuskivadze)

---

## 🙏 Acknowledgments

- Next.js Team for the amazing framework
- React Hook Form for form management
- All open-source contributors

---

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

Made with ❤️ by Tamar Khuskivadze

