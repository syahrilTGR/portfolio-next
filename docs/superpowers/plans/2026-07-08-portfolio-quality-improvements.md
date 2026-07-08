# Portfolio Quality Improvements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Improve portfolio code quality, performance, accessibility, and maintainability through targeted enhancements.

**Architecture:** Add proper semantic heading, automated testing infrastructure, image optimization, 404 page, SVG component extraction, and security hardening. Each task is independent and can be committed separately.

**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript strict, CSS Modules, Jest, Cypress

## Global Constraints

- Next.js 16 App Router (not Pages Router)
- TypeScript strict mode enabled
- CSS Modules (not Tailwind, not styled-components)
- No additional UI libraries (keep bundle small)
- Test files in `tests/` directory mirroring source structure
- All changes must pass `npm run build` and `npm run lint`

---

### Task 1: Add h1 to Hero Component

**Goal:** Add semantic h1 heading for SEO and accessibility.

**Files:**
- Modify: `app/components/Hero.tsx`

**Interfaces:**
- Consumes: None
- Produces: None

**Steps:**

- [ ] **Step 1: Locate current heading**

Read `app/components/Hero.tsx` and find the name display section.

Current code (approximate line 85):
```tsx
<h1 id="hero-title" className={styles.name}>
  Muhammad Syahril<br />
  <span className="gradient-text">Eka Pratama</span>
</h1>
```

- [ ] **Step 2: Verify h1 already exists**

Check if `<h1>` is already present. If yes, task is complete — h1 is already semantic.

If not found, add:
```tsx
<h1 id="hero-title" className={styles.name}>
  Muhammad Syahril<br />
  <span className="gradient-text">Eka Pratama</span>
</h1>
```

- [ ] **Step 3: Verify accessibility**

Run: `npm run build`
Expected: Build passes, no warnings about duplicate h1

- [ ] **Step 4: Commit**

```bash
git add app/components/Hero.tsx
git commit -m "fix: ensure h1 heading exists for SEO and accessibility"
```

---

### Task 2: Add 404 Page

**Goal:** Add custom 404 page for better UX.

**Files:**
- Create: `app/not-found.tsx`

**Interfaces:**
- Consumes: None
- Produces: None

**Steps:**

- [ ] **Step 1: Create 404 page**

Create file `app/not-found.tsx`:
```tsx
import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.subtitle}>Page not found</p>
      <Link href="/" className={styles.link}>
        ← Back to Home
      </Link>
    </div>
  );
}
```

- [ ] **Step 2: Create 404 styles**

Create file `app/not-found.module.css`:
```css
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  background: var(--bg-color);
  color: var(--text-primary);
  font-family: var(--font-body);
}

.title {
  font-size: 6rem;
  font-weight: 800;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  font-family: var(--font-heading);
}

.subtitle {
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.link {
  color: var(--accent-color);
  text-decoration: none;
  font-family: var(--font-mono);
  font-size: 0.875rem;
  transition: opacity 0.2s ease;
}

.link:hover {
  opacity: 0.8;
}
```

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: Build passes

- [ ] **Step 4: Commit**

```bash
git add app/not-found.tsx app/not-found.module.css
git commit -m "feat: add custom 404 page"
```

---

### Task 3: Extract Inline SVGs to Icon Component

**Goal:** Create reusable Icon component to reduce duplication.

**Files:**
- Create: `app/components/Icon.tsx`
- Modify: `app/components/Hero.tsx` (use Icon component)
- Modify: `app/components/CertificateCard.tsx` (use Icon component)

**Interfaces:**
- Consumes: None
- Produces: `<Icon name="github" />` API

**Steps:**

- [ ] **Step 1: Create Icon component**

Create file `app/components/Icon.tsx`:
```tsx
interface IconProps {
  name: 'github' | 'external' | 'certificate' | 'verify';
  size?: number;
  className?: string;
}

const icons: Record<string, React.ReactNode> = {
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  ),
  external: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  ),
  certificate: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  ),
  verify: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  ),
};

export default function Icon({ name, size = 16, className }: IconProps) {
  const icon = icons[name];
  if (!icon) return null;
  
  return (
    <span className={className} style={{ display: 'inline-flex', width: size, height: size }}>
      {icon}
    </span>
  );
}
```

- [ ] **Step 2: Update CertificateCard to use Icon**

Replace inline SVG in `app/components/CertificateCard.tsx`:
```tsx
// Before
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
  <circle cx="12" cy="13" r="4" />
</svg>

// After
<Icon name="certificate" size={16} />
```

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: Build passes

- [ ] **Step 4: Commit**

```bash
git add app/components/Icon.tsx app/components/CertificateCard.tsx
git commit -m "refactor: extract inline SVGs to Icon component"
```

---

### Task 4: Optimize Profile Image

**Goal:** Optimize profile.jpg to WebP for faster loading.

**Files:**
- Modify: `public/assets/images/profile.jpg` (keep original as fallback)
- Create: `public/assets/images/profile.webp`

**Interfaces:**
- Consumes: None
- Produces: Optimized WebP image

**Steps:**

- [ ] **Step 1: Convert to WebP**

```bash
npx sharp-cli -i public/assets/images/profile.jpg -o public/assets/images/profile.webp --quality 80
```

- [ ] **Step 2: Update Hero component to use WebP with fallback**

Modify `app/components/Hero.tsx`:
```tsx
<Image
  src="/assets/images/profile.webp"
  alt="Muhammad Syahril Eka Pratama"
  fill
  className={styles.profilePic}
  priority
  sizes="(max-width: 768px) 100vw, 400px"
  fallbackSrc="/assets/images/profile.jpg"
/>
```

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: Build passes

- [ ] **Step 4: Commit**

```bash
git add public/assets/images/profile.webp app/components/Hero.tsx
git commit -m "perf: optimize profile image to WebP with JPEG fallback"
```

---

### Task 5: Tighten CSP Header

**Goal:** Remove `'unsafe-eval'` from CSP and tighten security.

**Files:**
- Modify: `vercel.json`

**Interfaces:**
- Consumes: None
- Produces: Tighter CSP policy

**Steps:**

- [ ] **Step 1: Read current CSP**

Read `vercel.json` and locate Content-Security-Policy header.

- [ ] **Step 2: Update CSP**

Remove `'unsafe-eval'` from script-src:
```json
{ "key": "Content-Security-Policy", "value": "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data: https:; connect-src 'self'; frame-src 'self' https:; base-uri 'self'; form-action 'self'; object-src 'none'; upgrade-insecure-requests" }
```

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: Build passes

- [ ] **Step 4: Commit**

```bash
git add vercel.json
git commit -m "security: tighten CSP by removing unsafe-eval"
```

---

### Task 6: Add Jest and React Testing Library

**Goal:** Set up testing infrastructure for unit tests.

**Files:**
- Create: `jest.config.js`
- Create: `tests/components/Icon.test.tsx`
- Create: `tests/components/Hero.test.tsx`
- Modify: `package.json` (add test script)

**Interfaces:**
- Consumes: None
- Produces: `<Icon>`, `<Hero>` components with tests

**Steps:**

- [ ] **Step 1: Install dependencies**

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event ts-jest
```

- [ ] **Step 2: Create Jest config**

Create file `jest.config.js`:
```javascript
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterSetup: ['<rootDir>/tests/setup.ts'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
};
```

- [ ] **Step 3: Create test setup file**

Create file `tests/setup.ts`:
```typescript
import '@testing-library/jest-dom';
```

- [ ] **Step 4: Create Icon component test**

Create file `tests/components/Icon.test.tsx`:
```typescript
import { render, screen } from '@testing-library/react';
import Icon from '../../app/components/Icon';

describe('Icon Component', () => {
  it('renders GitHub icon', () => {
    render(<Icon name="github" />);
    expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
  });

  it('renders with correct size', () => {
    render(<Icon name="external" size={24} />);
    const icon = screen.getByRole('img', { hidden: true });
    expect(icon).toHaveStyle({ width: '24px', height: '24px' });
  });

  it('returns null for invalid icon name', () => {
    const { container } = render(<Icon name="invalid" />);
    expect(container.firstChild).toBeNull();
  });
});
```

- [ ] **Step 5: Run tests**

Run: `npm test`
Expected: All tests pass

- [ ] **Step 6: Commit**

```bash
git add jest.config.js tests/setup.ts tests/components/Icon.test.tsx package.json package-lock.json
git commit -m "test: add Jest and React Testing Library setup with Icon tests"
```

---

### Task 7: Add Cypress E2E Testing

**Goal:** Add end-to-end testing for critical user flows.

**Files:**
- Create: `cypress.config.ts`
- Create: `cypress/e2e/home.cy.ts`
- Create: `cypress/support/commands.ts`
- Create: `cypress/support/e2e.ts`
- Modify: `package.json` (add cypress scripts)

**Interfaces:**
- Consumes: None
- Produces: E2E test suite

**Steps:**

- [ ] **Step 1: Install Cypress**

```bash
npm install --save-dev cypress
```

- [ ] **Step 2: Create Cypress config**

Create file `cypress.config.ts`:
```typescript
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.cy.ts',
    supportFile: 'cypress/support/e2e.ts',
  },
});
```

- [ ] **Step 3: Create support files**

Create file `cypress/support/e2e.ts`:
```typescript
import './commands';
```

Create file `cypress/support/commands.ts`:
```typescript
// Custom commands can be added here
```

- [ ] **Step 4: Create home page E2E test**

Create file `cypress/e2e/home.cy.ts`:
```typescript
describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('loads successfully', () => {
    cy.url().should('include', '/');
    cy.get('h1').should('be.visible');
  });

  it('has navigation links', () => {
    cy.get('nav').should('be.visible');
    cy.get('nav a').should('have.length.greaterThan', 0);
  });

  it('displays hero section', () => {
    cy.get('section#hero').should('be.visible');
    cy.contains('Muhammad Syahril').should('be.visible');
  });

  it('scrolls to sections', () => {
    cy.get('a[href="#projects"]').click();
    cy.get('section#projects').should('be.visible');
  });
});
```

- [ ] **Step 5: Add cypress scripts to package.json**

Add to scripts:
```json
"cypress:open": "cypress open",
"cypress:run": "cypress run"
```

- [ ] **Step 6: Verify tests run**

Run: `npm run cypress:run`
Expected: Tests pass (assuming dev server running)

- [ ] **Step 7: Commit**

```bash
git add cypress.config.ts cypress/ package.json package-lock.json
git commit -m "test: add Cypress E2E testing setup"
```

---

## Summary

| Task | Priority | Time Est | Dependencies |
|------|----------|----------|--------------|
| 1. Add h1 | Critical | 5 min | None |
| 2. Add 404 page | Important | 10 min | None |
| 3. Extract SVG Icon | Important | 15 min | None |
| 4. Optimize profile | Important | 10 min | None |
| 5. Tighten CSP | Important | 5 min | None |
| 6. Jest + RTL | Critical | 30 min | None |
| 7. Cypress E2E | Important | 20 min | None |

**Total estimated time:** ~95 minutes

All tasks are independent and can be executed in any order.