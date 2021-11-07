# Rollup React Template
This template is a minimal react template built using [rollup](https://rollupjs.org/guide/en/) instead of CRA's webpack.\
It aims to provide all the same functionality that Create React App provides, but while still giving you full access the the build configuration.

By default this template includes:
- React with Typescript
- Production builds bundled using rollup
- Development server provided by nollup
- SCSS support
- Hot Module Reload for React and CSS
- Linting using ESLint
- A basic dockerfile for lightweight deployment or testing in deployment-like environment

## Available Scripts
In the project directory, you can run:

### `yarn start`
Runs the app in the development mode using [nollup](https://github.com/PepsRyuu/nollup).\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`
Builds the app for production to the `build` folder.\
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `yarn clean`
Cleans the `build` folder. (deletes everything recursively)

### `yarn lint`
Runs ESLint in the console.

### `yarn lint:fix`
Runs ESLint and applied fixes where possible.

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).\
You can learn more about rollup on the [rollup website](https://rollupjs.org/guide/en/).\
Nollup provides the dev server, you can learn more on the [github page](https://github.com/PepsRyuu/nollup).