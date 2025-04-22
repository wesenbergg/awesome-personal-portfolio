# Contributing to Boriss Portfolio

Thank you for considering contributing to this project! This document outlines the standards and processes for contributing.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/boriss-portfolio-palace.git`
3. Install dependencies: `pnpm install`
4. Start the development server: `pnpm dev`

## Development Standards

### TypeScript Standards

- Use TypeScript for all new files
- Always define proper types for function parameters and return values
- Use interfaces for complex object shapes
- Prefer type over interface when extending types

```typescript
// ✅ Good
function greet(person: Person): string {
  return `Hello, ${person.name}`;
}

// ❌ Bad
function greet(person) {
  return `Hello, ${person.name}`;
}
```

### React Best Practices

- Use functional components with hooks
- Extract reusable logic into custom hooks
- Keep components focused on a single responsibility
- Utilize React Context for global state that doesn't need Redux

```typescript
// ✅ Good
const UserProfile = ({ userId }: UserProfileProps) => {
  const user = useUser(userId);
  return <div>{user.name}</div>;
};

// ❌ Bad
class UserProfile extends React.Component {
  // ...
}
```

### Internationalization (i18n)

- All user-facing strings must use the t() function from useLanguage hook
- Keep translation keys organized by component/section
- Add both English and Finnish translations for all new text

```typescript
// ✅ Good
const { t } = useLanguage();
return <h1>{t("header.welcome")}</h1>;

// ❌ Bad
return <h1>Welcome</h1>;
```

### File Structure

- Keep related hooks in separate files from components
- Place shared types in dedicated type files
- Use index.ts files to re-export from directories

### Naming Conventions

- Component files: `PascalCase.tsx`
- Hook files: `use[HookName].ts`
- Context files: `[Name]Context.tsx`
- Utility files: `camelCase.ts`
- Test files: `[filename].test.tsx` or `[filename].spec.tsx`

### Code Style

- Use double quotes for strings
- Use semicolons at the end of statements
- Max line length: 80 characters
- Use 2 spaces for indentation
- Use parentheses for multi-line JSX
- Place imports in order: React, external libraries, internal modules

```typescript
// ✅ Good import order
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
```

### Performance

- Memoize expensive calculations with useMemo
- Use useCallback for functions passed to child components
- Avoid unnecessary re-renders with React.memo when appropriate

### Accessibility

- All images must have alt text
- Use semantic HTML elements
- Ensure proper keyboard navigation
- Use aria attributes when necessary

### Styling

- Use Tailwind CSS for styling
- Create reusable UI components in the components/ui directory
- Follow the design system colors and spacing

## Pull Request Process

1. Create a new branch for your feature or bugfix
2. Make your changes following the standards above
3. Add tests for new functionality
4. Ensure the test suite passes
5. Update the README.md if necessary
6. Submit a pull request with a clear description of the changes

## Commit Convention

Please follow the conventional commits specification:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Changes that do not affect the meaning of the code
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools

Example: `feat: add dark mode toggle component`

## Code Review Process

All submissions require review. We use GitHub pull requests for this purpose.

Thank you for contributing!
