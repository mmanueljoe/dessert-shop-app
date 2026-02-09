# Dessert Shop App

This project is a small dessert shop interface built with React and TypeScript on top of Vite.  
It lets you browse a list of desserts, add them to a cart, adjust quantities, and confirm an order in a clean, responsive layout.

## What’s implemented

- **TypeScript migration**:  
  The app was migrated from plain JavaScript/JSX to TypeScript/TSX. All React components, the cart reducer, and local‑storage utilities are now typed, with a shared `CartItem` / `CartState` model in `src/types`.

- **Cart logic with reducer**:  
  Cart state is managed with `useReducer`, using a typed reducer that handles adding items, removing items, incrementing/decrementing quantities, and clearing the cart after an order is confirmed.

- **Local storage persistence**:  
  The cart is saved to `localStorage` and restored on page load, so your selections survive refreshes. The storage helper validates the shape of the stored data and falls back to an empty cart if anything looks off.

- **Typed components**:  
  UI components (`Card`, `Cart`, `CartItem`, `OrderConfirmed`) all use explicit props interfaces. They rely on the shared cart types so that prices, quantities, and images stay consistent across the app.

- **Asset and JSON typing**:  
  Image and JSON imports (for dessert data and icons) are supported by lightweight `.d.ts` declarations, keeping TypeScript happy without changing how assets are used.

- **Tooling and quality**:  
  The project uses a strict `tsconfig`, Vite for the dev/build pipeline, Tailwind CSS for styling, and ESLint + Prettier to keep the codebase tidy and consistent.

### Running the project

- Install dependencies with your preferred package manager (the repo currently uses Yarn):  
  `yarn`
- Start the dev server:  
  `yarn dev`
- Run linting:  
  `yarn lint`
- Build for production:  
  `yarn build`
