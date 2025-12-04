# Course Explorer - Copilot Instructions

## Project Overview
**course-explorer** is a React + Vite frontend application using modern JavaScript tooling. The project structure is intentionally minimal with all components and styles at the root `src/` level. This is a fresh Vite template setup with ESLint configuration but no TypeScript yet.

## Architecture & Key Patterns

### Tech Stack
- **Frontend**: React 19.2 with React Router 7.10 for navigation
- **Build Tool**: Vite 7.2 with HMR (Hot Module Replacement)
- **Styling**: Plain CSS (App.css, index.css)
- **UI Components**: Heroicons React for icons, react-markdown for markdown rendering
- **Linting**: ESLint with flat config (eslint.config.js) - no TypeScript yet

### Project Structure
```
src/
├── main.jsx          # React root render with StrictMode
├── App.jsx           # Main component with basic structure (placeholder state)
├── App.css           # Component styles
├── index.css         # Global styles
└── assets/           # Static images
```

### Important Conventions
- **Component Organization**: Single-level flat structure in `src/`. Add new components directly in `src/` or create subdirectories when the project grows.
- **ESLint Rules**: Capital letter variables (e.g., `CONSTANT_NAME`) are ignored in unused variable checks. Use this pattern for constants.
- **CSS Approach**: Class-based CSS with separate `.css` files per component is the current pattern.
- **React Patterns**: Using React hooks (useState, etc.). No Context API or state management library (Redux, Zustand) currently configured.

## Development Workflows

### Common Commands
```bash
npm run dev      # Start Vite dev server with HMR (port 5173)
npm run build    # Production build to dist/
npm run preview  # Preview production build locally
npm run lint     # Run ESLint on all .js/.jsx files
```

### Vite + React Hot Module Replacement (HMR)
Changes to `src/` files trigger instant browser refresh. Fast Refresh (via @vitejs/plugin-react) enables state preservation during edits. ESLint rules configured for react-refresh and react-hooks compliance.

## Integration Points & Dependencies

### React Router (v7.10)
Imported but not yet configured in App.jsx. When implementing routing:
- Use `createBrowserRouter` and `RouterProvider` patterns
- Define routes at app initialization in `main.jsx` or within `App.jsx`
- Import route components as needed

### react-markdown (v10.1)
Available for rendering markdown content. Example use case: displaying course descriptions or documentation within components.

### Heroicons React (v2.2)
Provides SVG icons via React components. Example: `import { StarIcon } from '@heroicons/react/24/solid'`

## Build & Deployment
- **Output**: `dist/` folder (ignored in git via .gitignore)
- **Entry**: `index.html` (standard Vite entry point)
- **Serving**: Vite serves assets with correct MIME types; no special server config needed
- **Environment**: Browser globals available; no Node.js runtime

## Extending the Project
When adding features:
1. **New Routes**: Use React Router primitives; update main.jsx entry if needed
2. **New Components**: Add `.jsx` files directly in `src/` with corresponding `.css`
3. **Type Safety**: If moving to TypeScript, rename `.jsx` → `.tsx`, add `tsconfig.json`, and update ESLint config
4. **State Management**: Currently using local component state; consider adding Redux or Zustand if sharing state across many components
