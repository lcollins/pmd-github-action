# AGENTS.md

## Repository Overview

**pmd-github-action** is a GitHub Action (TypeScript/Node.js) that reads PMD static analysis XML reports and posts them as GitHub Check Run annotations. It is adapted from [jwgmeligmeyling/pmd-github-action](https://github.com/jwgmeligmeyling/pmd-github-action) to support Node 20+.

The compiled action entrypoint is `dist/index.js`. The source lives in `src/`.

---

## Project Structure

```
action.yml            # GitHub Action metadata (inputs, runs config)
src/
  main.ts             # Entry point: reads inputs, orchestrates annotation upload
  annotations.ts      # Parses PMD XML reports into GitHub Annotation objects
  github.ts           # GitHub Annotation type definition
  search.ts           # Glob-based file search for report paths
  constants.ts        # Input name constants
  pmd.ts              # PMD XML report type definitions
  unescape.d.ts       # Type declaration for the 'unescape' package
__tests__/
  main.test.ts        # Jest tests for annotations parsing
reports/
  pmd.xml             # Sample PMD report used in tests
dist/                 # Compiled + bundled output (committed, do not edit manually)
```

---

## Development Commands

Install dependencies:
```bash
npm install
```

Build TypeScript to `lib/`:
```bash
npm run build
```

Bundle for distribution (outputs `dist/index.js`):
```bash
npm run package
```

Build + format + lint + package + test (full pipeline):
```bash
npm run all
```

Run tests:
```bash
npm test
```

Lint:
```bash
npm run lint
```

Auto-fix lint issues:
```bash
npm run fix-lint
```

Format source files:
```bash
npm run format
```

Check formatting without writing:
```bash
npm run format-check
```

---

## Key Conventions

- **Language**: TypeScript (strict mode via `tsconfig.json`)
- **Bundler**: `@vercel/ncc` — always run `npm run package` after source changes; the committed `dist/index.js` is what GitHub Actions actually runs.
- **Testing**: Jest with `ts-jest`. Tests live in `__tests__/`. The main test parses `reports/pmd.xml` and checks that `annotationsForPath` returns the expected number of annotations.
- **Linting**: ESLint with `@typescript-eslint` and `eslint-plugin-github`. Config in `.eslintrc.json`.
- **Formatting**: Prettier. Config in `.prettierrc.json`.
- **Annotations are batched**: The GitHub Checks API accepts at most 50 annotations per request; `main.ts` uses `ramda`'s `splitEvery` to chunk them.
- **Check run behavior**: If a check run with the given `name` already exists for the commit SHA, the action updates it; otherwise it creates a new one.

---

## Action Inputs

| Input            | Required | Default                         | Description                                      |
|------------------|----------|---------------------------------|--------------------------------------------------|
| `path`           | Yes      | —                               | Glob pattern to locate PMD XML report files      |
| `name`           | No       | `PMD`                           | Name of the GitHub Check Run to create/update    |
| `title`          | No       | `PMD Source Code Analyzer report` | Title shown in the Check Run output             |
| `token`          | No       | `${{ github.token }}`           | GitHub token for API access                      |
| `fail-on-violation` | No    | `false`                         | Set Check conclusion to `failure` on violations  |

---

## Making Changes

1. Edit source files in `src/`.
2. Run `npm run build` to compile TypeScript.
3. Run `npm test` to verify tests pass.
4. Run `npm run package` to regenerate `dist/index.js`.
5. Commit both `src/` changes and the updated `dist/` directory.

> **Important**: Do not forget to commit the updated `dist/index.js`. The action runs directly from `dist/`, not from source.
