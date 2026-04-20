# AutoParkUA

A car listings and automotive marketplace UI built with Vue 3 and TypeScript. Browse vehicle listings, filter by category, and view detailed car pages — powered by a modern component-driven stack.

## Tech stack

- **Vue 3** — Composition API
- **TypeScript** — full type safety across the codebase
- **Vite** — fast dev server and build tool
- **Pinia** — state management
- **Vue Router** — client-side routing
- **Vuetify 3** — Material Design component library
- **Tailwind CSS** — utility-first styling
- **Swiper** — touch-friendly carousels

## Getting started

### Prerequisites

- Node.js 20+
- npm

### Setup

```bash
git clone https://github.com/v-sorochynskyi/autoparkua.git
cd autoparkua
npm install
```

### Development

```bash
npm run dev
```

App runs at `http://localhost:5173`

### Production build

```bash
npm run build
npm run preview
```

### Type check & lint

```bash
npm run type-check
npm run lint
```

## Project structure

```
├── src/
│   ├── components/   # Reusable Vue components
│   ├── views/        # Page-level components
│   ├── stores/       # Pinia state stores
│   ├── router/       # Vue Router configuration
│   └── assets/       # Static assets and styles
└── public/           # Public static files
```
