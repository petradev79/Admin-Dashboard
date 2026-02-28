# Agent Guidelines for Admin-Dashboard

## Build, Lint, and Test Commands

### Available npm Scripts

```bash
# Development
npm start                # Start development server on http://localhost:3000

# Testing
npm test                 # Run tests in watch mode (interactive)
npm test -- --coverage  # Run tests with coverage report
npm test -- --testPathPattern=filename  # Run single test file
npm test -- --testNamePattern="test name"  # Run single test by name

# Building
npm run build           # Build for production (outputs to /build)
npm run eject           # Eject from Create React App (irreversible)
```

### Running Single Tests

To run a specific test file:
```bash
npm test -- --testPathPattern=Datatable
```

To run a specific test by name:
```bash
npm test -- --testNamePattern="should render"
```

## Code Style Guidelines

### General

- This is a React + TypeScript project using Create React App
- Strict TypeScript mode is enabled in tsconfig.json
- Use functional components with hooks (no class components)
- Prefer arrow functions for components

### File Organization

```
src/
├── components/          # Reusable components (PascalCase)
│   ├── componentName/
│   │   ├── ComponentName.tsx
│   │   └── componentName.scss
├── pages/              # Page-level components (PascalCase)
│   ├── pageName/
│   │   ├── PageName.tsx
│   │   └── pageName.scss
├── context/            # React context (auth.js - uses .js)
├── firebase/          # Firebase config
├── helper/             # Utility functions
├── styles/             # Global styles
└── App.tsx
```

### Imports

- Use relative paths for internal imports (e.g., `../../components/...`)
- Group imports in this order:
  1. React/framework imports
  2. External libraries (MUI, Firebase, etc.)
  3. Internal components/utils
  4. Styles
- Example:
```tsx
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import { useAuth } from '../../context/auth';
import Sidebar from '../../components/sidebar/Sidebar';
import './component.scss';
```

### TypeScript

- Enable strict mode (`strict: true` in tsconfig.json)
- Use explicit types for props, state, and function returns
- Define interfaces for component props
- Example:
```tsx
interface WidgetProps {
  type: 'user' | 'order' | 'earning' | 'balance';
}

const Widget = ({ type }: WidgetProps) => { ... }
```

- Use explicit types rather than `any`
- For DataGrid columns, use `GridColDef` from @mui/x-data-grid

### Component Structure

```tsx
import React from 'react';
import './component.scss';

interface ComponentNameProps {
  // explicit props
}

const ComponentName: React.FC<ComponentNameProps> = ({ prop1, prop2 }) => {
  // hooks at top
  const [state, setState] = useState<string>('');
  
  // handlers
  const handleClick = () => { ... };
  
  // render
  return (
    <div className="component-name">
      {/* JSX */}
    </div>
  );
};

export default ComponentName;
```

### Naming Conventions

- **Components**: PascalCase (e.g., `Sidebar.tsx`, `Datatable.tsx`)
- **Files**: PascalCase for components, camelCase for utilities
- **CSS Classes**: BEM methodology
  - Block: `.datatable`
  - Element: `.datatable__title`, `.datatable__container`
  - Modifier: `.datatable--active`
- **Variables/functions**: camelCase
- **Constants**: UPPER_SNAKE_CASE

### CSS/SCSS

- Use SCSS for styling
- Follow BEM naming convention
- Co-locate styles with components (same folder)
- Use global variables from `src/styles/variables.module.scss`
- Base components use `.base-component` class for shared styles

### Error Handling

- Use try/catch for async operations
- Display errors to users via MUI Alert component
- Clear error state before new operations
- Example from Login.tsx:
```tsx
try {
  setError('');
  setLoading(true);
  await auth.login(email, password);
  navigate('/');
} catch {
  setError('Failed to log in');
} finally {
  setLoading(false);
}
```

### Firebase Integration

- Firebase config in `src/firebase/config.ts`
- Use Firebase v9 modular SDK
- Auth context provides login, signup, signout methods
- Wrap protected routes with `<PrivateRoute>`

### MUI Components

- Use Material UI components from @mui/material
- DataGrid from @mui/x-data-grid for tables
- Follow MUI prop conventions (fullWidth, margin, variant, etc.)
- Use Box for layout when needed

### Testing

- Tests use Jest + @testing-library/react
- Test files should be named `*.test.tsx` or `*.test.ts`
- Place tests next to their components
- Example test structure:
```tsx
import { render, screen } from '@testing-library/react';
import ComponentName from './ComponentName';

describe('ComponentName', () => {
  it('should render', () => {
    render(<ComponentName />);
    expect(screen.getByText('text')).toBeInTheDocument();
  });
});
```

### What to Avoid

- Do not use `any` type unless absolutely necessary
- Avoid console.log in production code (comments in code are fine)
- Do not commit secrets (firebase config, API keys go in .env)
- Avoid inline styles (use SCSS instead)
- Do not use .js for new components (use .tsx)

### Environment Variables

- Create `.env` file for local development
- Use `REACT_APP_` prefix for custom env variables
- Never commit .env files to version control
