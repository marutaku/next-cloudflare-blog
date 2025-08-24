# Project Overview

This is a Next.js blog application designed to be deployed on Cloudflare Pages. It utilizes Contentful as a headless CMS for managing blog articles, and GraphQL with Apollo Client for data fetching. The project is set up with TypeScript for type safety, ESLint and Prettier for code quality and consistency, and Playwright for end-to-end testing.

## Key Technologies

- **Framework:** Next.js
- **Deployment:** Cloudflare Pages
- **CMS:** Contentful
- **Styling:** SCSS Modules, Tailwind CSS
- **Data Fetching:** GraphQL, Apollo Client
- **Testing:** Playwright
- **Linting/Formatting:** ESLint, Prettier

## Architecture

The application follows a standard Next.js project structure.

- `src/app`: Contains the main application logic, including pages and components.
  - `src/app/articles/[slug]`: Dynamic route for individual article pages.
  - `src/app/_components`: Reusable React components.
- `src/libs`: Houses the logic for fetching articles from Contentful.
- `src/utils`: Contains utility functions, including the Apollo Client setup.
- `public`: Stores static assets like images and favicons.
- `tests/e2e`: End-to-end tests written with Playwright.

# Building and Running

## Development

To run the development server:

```bash
yarn dev
```

This will start the application on `http://localhost:3000`.

## Build

To build the application for production:

```bash
yarn build
```

This command creates an optimized production build in the `.next` directory and static assets in the `out` directory.

## Testing

To run the end-to-end tests:

```bash
yarn test
```

This will execute the Playwright tests defined in the `tests/e2e` directory.

# Development Conventions

- **Code Style:** The project enforces a consistent code style using Prettier and ESLint. Before committing, it's recommended to run `yarn lint` and `yarn format`.
- **Branching:** The repository uses a `main` branch for production. Feature development should be done on separate branches and merged via pull requests.
- **Commits:** While no strict convention is enforced, commit messages should be clear and descriptive.
- **Dependencies:** Use `yarn` to manage dependencies. The `yarn.lock` file is committed to the repository to ensure consistent installations.
- **CI/CD:** The project uses GitHub Actions for continuous integration. The workflow in `.github/workflows/build-and-test.yml` runs on every push and pull request to the `main` branch, executing build and test steps.
