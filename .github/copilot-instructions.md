# Copilot Instructions for Angular-Cookbook-2E

## Project Architecture
- This repo contains multiple monorepos: `start`, `final`, and `codewithahsan`, each with their own apps and libraries.
- Uses [Nx](https://nx.dev) for workspace orchestration, dependency graph, and build/test commands.
- Each chapter is a separate Angular app under `apps/chapterXX/` in both `start` and `final`.
- Shared libraries are under `libs/` and `packages/`.
- Some projects (e.g., PWA, Jest setup) use Angular CLI directly.

## Developer Workflows
- **Install dependencies:**
  ```bash
  npm install
  ```
- **Serve apps:**
  ```bash
  npm run serve APP_NAME [final|start|both]
  # Example: npm run serve cc-inputs-outputs final
  ```
- **Create/remove projects:**
  ```bash
  npm run create CHAPTER_NO APP_NAME "APP_TITLE" [both]
  npm run remove CHAPTER_NO APP_NAME
  ```
- **Build/test libraries:**
  ```bash
  nx build <lib-name>
  nx test <lib-name>
  ```
- **Angular CLI commands** are used in some chapter apps (see their README files).

## Patterns & Conventions
- **Standalone Components:** Most Angular components use `standalone: true` and import dependencies via the `imports` array.
- **Input/Output:** Use `@Input()` and `@Output()` for property binding; private backing fields are common for setters.
- **Monorepo Structure:** Code is organized by chapter and by type (app/lib), with parallel structure in `start` and `final`.
- **Nx Graph:** Run `nx graph` to visualize dependencies.
- **Remote Caching:** Enable with `npx nx connect-to-nx-cloud` for faster CI.

## Integration Points
- **Jest:** Used for unit testing in libraries and some apps (`jest.config.ts` in relevant folders).
- **Karma:** Used for unit testing in Angular CLI-generated apps.
- **E2E:** End-to-end tests are in `e2e/` folders, run via Nx or Angular CLI.
- **Scripts:** Custom scripts for build, copy, and serve are in the `scripts/` folder.

## External Dependencies
- **NodeJS** required for all workflows.
- **Angular v18** (latest) is the target version.
- **Nx** is the primary build/test orchestrator.

## Examples
- To add a new standalone component, use the `standalone: true` pattern and import dependencies in the `imports` array.
- To run tests for a library:
  ```bash
  nx test ng-cookbook-recipe
  ```
- To serve a chapter app:
  ```bash
  npm run serve chapter01-cc-setters start
  ```

## Key Files & Directories
- `start/`, `final/`, `codewithahsan/` — main monorepo roots
- `apps/`, `libs/`, `packages/` — code organization
- `scripts/` — custom workflow scripts
- `jest.config.ts`, `nx.json`, `angular.json` — configuration files

---

For more details, see the main [README.md](../README.md) and chapter-specific README files.
