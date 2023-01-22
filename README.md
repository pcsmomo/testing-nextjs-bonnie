# Testing Next.js Apps with Jest, Testing Library and Cypress by Bonnie Schulkin

Testing Next.js Apps with Jest, Testing Library and Cypress by Bonnie Schulkin

## Folder structure

- 01-first-next-test
  - 01-instoruction
- 04-base-concert-venue
  - open the project folder in vscode to avoid import warning with `@/...`
  - Section 4: UI Testing
    - `04-base-concert-venue/__tests__/ui`

# Details

<details open>
  <summary>Click to Contract/Expend</summary>

## Section 1: Introduction

### 1. Introduction

- UI without API
- API without UI
- Complete user flow (end-to-end)
- Test database
- Authentication

### 3. create-next-app Using with-jest Example

```sh
npx create-next-app@latest --example with-jest 01-first-next-test
# @next version: "13.1.3"
```

- [NextJs quick start-2](https://nextjs.org/docs/testing#quickstart-2)
- [NextJs with Jest template](https://nextjs.org/docs/testing#setting-up-jest-with-the-rust-compiler)

### 4. First Next.js Test

```sh
npm test
u
# update the snapshot. Initially the snapshot fails
```

## Section 2: Testing Definitions and Philosophy

### 8. Types of Tests

- Unit test
- Integration Testing
  - Parent and child components
  - API interacting with a database
- End-to-End (e2e) Testing
  - user flow from beginning to end

### 9. What to Test

**Test Behavior, not Implmentation**

## Section 3: Course App and Next.js Data Fetching Strategies

### 16. Next.js Data Fetching Strategies

TLA (Three Letter Acronym) alert!!

[NextJs Data Fetching Overview](https://nextjs.org/docs/basic-features/data-fetching/overview)

- No data
- SSG: Static-Site Generation
- SSR: Server-Side Rendering
  - better SEO (Search Engine Optimization)
- ISR: Incremental Static Regeneration
- CSR: Client-Side Rendering
  - SWR: Stale-While-Revalidate

### 18. Installing the Course App

```sh
npm install
cp .env.development.local_template .env.development.local
cp .env.local_template .env.local

openssl rand -base64 32
# Copy them to .env.local

npm run dev
```

### 19. Course App Code Notes

- @ referes to top directory in imports
  - examples: `import Home from "@/pages/index.tsx`
- Faily standard for Next.js
  - alias comes with `with-jest` tesmplate
  - on ly for pages and components
- configured for all top level dirs, in both:
  - jest (jest.config.js), and
  - the app (in tsconfig.json)

> open the project folder in vscode to avoid import warning with `@/...`

## Section 4: UI Testing

### 20. Introduction and Technologies

Test Files Location

- Cannot "co-locate" test files in `pages` directory
  - ugly errors at build time
- Special setup required to avoid errors:
  - https://nextjs.org/docs/api-reference/next.config.js/custom-page-extensions#including-non-page-files-in-the-pages-directory

</details>
