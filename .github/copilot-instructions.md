# Copilot Instructions

## Scope
- Work only inside `/home/runner/work/soc-w8-how-to-cocktail/soc-w8-how-to-cocktail`.
- Prefer small, surgical changes that preserve the current React app structure.
- Do not add dependencies or new tooling unless they are required to complete the task.

## Project Stack
- React 18
- `react-scripts`
- TailwindCSS
- TheCocktailDB public API

## Required Commands
- Install dependencies: `npm install`
- Start local development: `npm start`
- Run tests: `npm test`
- Build production output: `npm run build`

## Application Structure
- Entry point: `/home/runner/work/soc-w8-how-to-cocktail/soc-w8-how-to-cocktail/src/index.js`
- Main app component: `/home/runner/work/soc-w8-how-to-cocktail/soc-w8-how-to-cocktail/src/components/App/App.js`
- Search input component: `/home/runner/work/soc-w8-how-to-cocktail/soc-w8-how-to-cocktail/src/components/SearchByName/index.js`
- Random drink trigger: `/home/runner/work/soc-w8-how-to-cocktail/soc-w8-how-to-cocktail/src/components/RandomSearch/index.js`
- Drink display layout: `/home/runner/work/soc-w8-how-to-cocktail/soc-w8-how-to-cocktail/src/components/DisplayCocktail/index.js`
- Styling entry: `/home/runner/work/soc-w8-how-to-cocktail/soc-w8-how-to-cocktail/src/index.css`
- Tailwind theme: `/home/runner/work/soc-w8-how-to-cocktail/soc-w8-how-to-cocktail/tailwind.config.js`

## Functional Expectations
- On initial load, the app must fetch a random cocktail using `random.php`.
- Name search must request `search.php?s=${text}`.
- `App.js` is responsible for fetching data and reshaping API fields into the local `cocktail` object.
- Ingredients must continue to be derived from `strIngredient1..15` and matching measure fields.
- Keep the existing component split: `App` owns state; presentation remains in `DisplayCocktail`, `IngredientTable`, `Instructions`, and `Image`.

## Styling Expectations
- Use the existing Tailwind utility approach and theme tokens already defined in `tailwind.config.js`.
- Keep the current neon cocktail visual style unless the task explicitly asks for a redesign.
- Prefer updating existing class names over introducing parallel styling systems.

## Validation
- After changing app code, run the most relevant existing command:
  - `npm test` for behavioral changes
  - `npm run build` for production/build validation
- Do not introduce new validation frameworks.

## Deployment Context
- GitHub Actions workflow: `/home/runner/work/soc-w8-how-to-cocktail/soc-w8-how-to-cocktail/.github/workflows/gh-pages-deploy.yml`
- Pull requests to `main` must continue to build successfully.
- Pushes to `main` publish the app to GitHub Pages.

## Reference Docs
- Overview: `/home/runner/work/soc-w8-how-to-cocktail/soc-w8-how-to-cocktail/README.md`
- Hackathon context: `/home/runner/work/soc-w8-how-to-cocktail/soc-w8-how-to-cocktail/HACKATHON.md`
