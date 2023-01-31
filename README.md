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

## Section 6: Testing Next.js Routes (using Cypress)

### 44. Introducing testing Next.js Routes and Cypress

- next-page-tester
  - https://github.com/next-page-tester/next-page-tester
  - relies on Next.js internals
  - can be a blocker to upgrades (like Enzyme / React)
- Cypress
  - https://www.cypress.io/

### 48. Setting up Next.js for Cypress

[NextJs with Cypress](https://nextjs.org/docs/testing#running-your-cypress-tests)

```sh
npm run build
npm run start

# in another terminal
npm run cypress
```

### 49. SIDE NOTE: Running Continuous Integration Tests against Preview Deploy

[SIDE NOTE: Running Continuous Integration Tests against Preview Deploy](https://www.udemy.com/course/nextjs-testing/learn/lecture/32251676#overview)

### 50. Setting up Cypress

```sh
npm install -D cypress
npm install -D env-cmd

# add the script to package.json
npm run cypress:open

# this is not the final command
# Go down!
```

```sh
# Not necessary but just to see!
npm install -g cypress
cypress open
```

```sh
npm install -D start-server-and-test

# add the script to package.json
npm run cypress:build
```

> and when click 'E2E Testing', cypress will create templates under `/cypress`

### 53. First Cypress Test: Static Route

- assertions: https://docs.cypress.io/guides/references/assertions
- finding elements: https://testing-library.com/docs/cypress-testing-library/intro/
- cy.get(): https://docs.cypress.io/api/commands/get

```sh
npm install -D @testing-library/cypress
```

```sh
# if already built
npm run cypress:start

# if not built yet
npm run cypress:build
```

### 56. Resetting the Database in Cypress

```sh
npm run cypress:start
# WARNING: DB reset attempted outside of test environment!

# this has to be added
`const safeToReset = process.env.NODE_ENV === "test" || process.env.CYPRESS;`
```

### 65. First ISR Cache Test

We want to test the static page from the server.\

1. So we will test the built version
2. and disable those javascript bundle files from the html file

[Dr. Gleb Bahmutov, PhD - Blog](https://glebbahmutov.com/blog/ssr-e2e/#removing-application-bundle)

#### VSCODE TIP for formatting

```sh
curl http://localhost:3000/shows > shows_page.out
```

1. change language mode
   - Command Palette (Shift + Comm + P) -> Change Language Mode (Comm + K + M)
2. Format the document
   - Format Document (Shift + Option + F)

### 66. SIDE NOTE: Next.js scripts

- [Next.js - output generated inside the `.next` folder](https://nextjs.org/docs/deployment#nextjs-build-api)
- [Next.js + Webpack bundle analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

### 71. ISR Revalidation Test

[Cypress Request - Method, URL, and Body](https://docs.cypress.io/api/commands/request#Method-URL-and-Body)

### 76. Testing Revalidate on Interval

[Cypress Clock](https://docs.cypress.io/api/commands/clock)

## Section 8: Testing Authentication

### 79. Introduction to Testing Authentication

- [npm next-auth](https://www.npmjs.com/package/next-auth)
- [NextAuth - Configuration - JWT callback](https://next-auth.js.org/configuration/callbacks#jwt-callback)
- [NextAuth - Configuration - Option (session)](https://next-auth.js.org/v3/configuration/options#session)

### 80. Auth Wrapper in Course App

- success flow
- failure flow
- protected page
- sign in programmatically

### 81. Adding Sign-In Details to Cypress

[Cypress - Environment variable](https://docs.cypress.io/guides/guides/environment-variables#Option-3-CYPRESS_)

### 83. SIDE NOTE: Why is this test so dang long?

[Split a very long Cypress test into shorter ones using App Actions](https://www.cypress.io/blog/2019/10/29/split-a-very-long-cypress-test-into-shorter-ones-using-app-actions/#header)

</details>
