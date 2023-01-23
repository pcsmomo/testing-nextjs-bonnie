# Testing Next.js Apps with Jest, Testing Library and Cypress by Bonnie Schulkin

Testing Next.js Apps with Jest, Testing Library and Cypress by Bonnie Schulkin

## Folder structure

- 01-first-next-test
  - 01-instoruction
- concert-venue
  - open the project folder in vscode to avoid import warning with `@/...`
  - Section 4: UI Testing
    - `concert-venue/__tests__/ui`
    - `concert-venue/__tests__/__mocks__/msw`

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

### 22. SIDE NOTE: Why add to the existing test? Why not create a new test?

- [Write fewer, longer tests By Kent C.Dodds](https://kentcdodds.com/blog/write-fewer-longer-tests)
- [The Merits of Mocking By Kent C.Dodds](https://kentcdodds.com/blog/the-merits-of-mocking)
- [Avoid Nesting when you're Testing By Kent C.Dodds](https://kentcdodds.com/blog/avoid-nesting-when-youre-testing)

### 28. Setting up MSW with Next.js

```sh
npm install msw --save-dev
mkdir __tests__/__mocks__/msw
touch __tests__/__mocks__/msw/handlers.ts
touch __tests__/__mocks__/msw/server.ts
```

## Section 5: Setting up a Test Database

### 36. WINDOWS AND LINUX USERS: adjustments to npm scripts

1. Windows Command Shell and Powershell users:

Use set instead of export for environment variables.

Whenever an npm script starts with export, you will want to use set instead. For example:

Mac and Linux command (what's shown in the course):
"start:test": "export NODE_ENV=\"test\" && next start"

Windows Command Shell and Powershell command:
"start:test": "set NODE_ENV=\"test\" && next start"

2. Mac and Linux users:

The db:reset npm script needs to start with sh instead of source and specify the directory.

Mac and command (what's shown in the course):
"db:reset": "source scripts/reset-db.sh"

Linux, Windows Command Shell and Windows Powershell command:
"db:reset": "sh ./scripts/reset-db.sh"

### 39. Environment Variables

- By default environment variables are only available in the Node.js environment, meaning they won't be exposed to the browser.
- In order to expose a variable to the browser, check the link
- [NextJs Environment Variables](https://nextjs.org/docs/basic-features/environment-variables#test-environment-variables)
- There is a small difference between test environment, and both development and production that you need to bear in mind: .env.local won't be loaded, as you expect tests to produce the same results for everyone.
- How To Read and Set Environmental and Shell Variables on Linux[https://www.digitalocean.com/community/tutorials/how-to-read-and-set-environmental-and-shell-variables-on-linux]

</details>
