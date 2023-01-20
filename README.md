# Testing Next.js Apps with Jest, Testing Library and Cypress by Bonnie Schulkin

Testing Next.js Apps with Jest, Testing Library and Cypress by Bonnie Schulkin

## Folder structure

- 01-first-next-test
  - 01-instoruction

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

</details>
