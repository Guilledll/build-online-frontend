## 📦 Setup
- `Node +18` is required to run this project
- This is originally developed using `pnpm` but `npm` or `yarn` can be used to install dependencies too.

## 🚀 Usage
- Run `pnpm install` or `yarn install` or `npm install` to download dependencies
- Run `pnpm dev` or `yarn dev` or `npm run dev` to launch develop server

## ⚙️ Internals
- Google Places API integration (personal key needed on `.env` file)
- Form Validation is done using `Vee-Validate` and `zod`
  - Backend errors are dynamically added to all form fields
- `Pinia` is used for state management
- 2 Nuxt Modules were impplemented `contacts-module` to handle contacts API integration and `auth-module` to handle user authorization.
- Design is implemented with `tailwindcss`
