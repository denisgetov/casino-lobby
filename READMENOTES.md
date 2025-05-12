# Casino Games Lobby

## Project Overview

A modern, responsive React-based casino games lobby application built with Next.js, showcasing a scalable and maintainable frontend solution for displaying and filtering casino games.

### Features

-  Dynamic games listing from JSON data source
-  Real-time game search functionality
-  Provider-based filtering
-  Responsive design
-  Optimized performance with Next.js
-  Accessibility-focused components

## Prerequisites

- Node.js (v18.0.0 or later)
- npm (v8.0.0 or later) or Yarn

## Tech Stack

- [React](https://reactjs.org/) - UI Library
- [Next.js](https://nextjs.org/) - React Framework
- [TypeScript](https://www.typescriptlang.org/) - Type Checking
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [ESLint](https://eslint.org/) - Linting
- [Prettier](https://prettier.io/) - Code Formatting

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/casino-games-lobby.git
cd casino-games-lobby
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Run Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
casino-lobby/
│
├── src/
│   ├── app/             # Next.js app router
│   ├── components/      # Reusable React components
│   ├── styles/          # Global styles
│   └── data/            # Static data sources
│
├── public/              # Static assets
├── tests/               # Unit and integration tests
└── config/              # Configuration files
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests

## Deployment

The application is optimized for deployment on platforms like Vercel, Netlify, or any Node.js hosting service.

### Deployment Steps

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm run start
   ```

## Performance Optimization

- Server-side rendering
- Image optimization with Next.js Image component
- Minimal re-renders
- Debounced search functionality

## Accessibility

- Semantic HTML
- ARIA attributes
- Screen reader friendly
- Keyboard navigation support

## Future Improvements

- [ ] Add game details modal
- [ ] Implement advanced filtering
- [ ] Add unit and integration tests
- [ ] Implement state management 

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

denisgetov@outlook.com




