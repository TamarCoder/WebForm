# 🤝 Contributing to WebForm

Thank you for your interest in contributing to WebForm! This document provides guidelines for contributing to the project.

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Process](#development-process)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)

---

## 📜 Code of Conduct

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on constructive feedback
- Maintain a positive and collaborative environment

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- Git
- Code editor (VS Code recommended)

### Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/webform.git
   cd webform
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

---

## 💻 Development Process

### Branch Naming

Use descriptive branch names:
- `feature/add-new-component` - For new features
- `fix/button-styling-issue` - For bug fixes
- `docs/update-readme` - For documentation updates
- `refactor/form-validation` - For code refactoring

### Component Structure

When creating new components:

```
ComponentName/
├── ComponentName.tsx          # Main component
├── ComponentName.module.scss  # Styles
├── componentName.type.ts      # TypeScript types
├── README.md                  # English documentation
└── README.ka.md               # Georgian documentation
```

---

## 📝 Coding Standards

### TypeScript

- Use TypeScript for all components
- Define proper interfaces and types
- Avoid `any` type when possible
- Use explicit return types for functions

### React

- Use functional components with hooks
- Follow React best practices
- Use meaningful component and variable names
- Keep components small and focused

### Styling

- Use SCSS modules for component styling
- Follow BEM naming convention when appropriate
- Use CSS variables for theme colors
- Ensure responsive design

### Example:

```tsx
import styles from "./Component.module.scss";

interface ComponentProps {
  title: string;
  onClick?: () => void;
}

export default function Component({ title, onClick }: ComponentProps) {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
    </div>
  );
}
```

---

## 📦 Commit Guidelines

### Commit Message Format

```
<type>: <subject>

<body (optional)>
```

### Types

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

### Examples

```bash
feat: add password strength indicator to Input component

fix: resolve SelectInput validation issue with react-hook-form

docs: update README with installation instructions

refactor: extract SummarySection into separate component
```

---

## 🔄 Pull Request Process

### Before Submitting

1. Ensure your code follows the coding standards
2. Test your changes thoroughly
3. Update documentation if needed
4. Run linting and formatting:
   ```bash
   npm run lint
   ```

### PR Title Format

Use the same format as commit messages:
```
feat: Add new Calendar component with date validation
```

### PR Description Template

```markdown
## Description
Brief description of what this PR does

## Changes
- List of changes made
- Another change

## Testing
How to test these changes

## Screenshots (if applicable)
Add screenshots or GIFs

## Checklist
- [ ] Code follows project style guidelines
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] No console errors or warnings
```

### Review Process

1. Submit your PR
2. Wait for code review
3. Address any feedback
4. Once approved, it will be merged

---

## 🧪 Testing

- Test your changes in multiple browsers
- Verify responsive design on different screen sizes
- Check form validation works correctly
- Ensure no console errors

---

## 📚 Documentation

When adding new features:

1. Update component README files
2. Add JSDoc comments to functions
3. Update main README if needed
4. Include code examples

---

## ❓ Questions?

If you have questions:
- Open an issue on GitHub
- Reach out to maintainers

---

## 🙏 Thank You!

Your contributions make this project better for everyone!

---

Made with ❤️ by the WebForm community
