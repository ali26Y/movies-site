# Coding Test

This project aims to solve a programming test using the `omdb` apis, the project has been bootstrapped by CRA. 

### Requirements

Before Running the Project, please make sure you:

- have node v10.16.3 or greater
- You setup an  `.env` file inside the root directory with a environment variable `REACT_APP_API_KEY={your_omdbapi_key}`

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## NPM packages used

My goal was to achieve a solution with minimal dependencies and to avoid overuse of npm packages. I believe it can have performance implications when we use packages unnecessarily.

- ReactJS v17.0.1
- Emotion (css in JS) v10.0.27
- qs v6.9.4
- debounce promise v3.1.2

## Features

- Use of React Context API for fetching and managing state for data storage, such as loading, error and data. This simplifies the components.
- No CSS frameworks used.
- lightweight and re-usable
- Functional Javascript - No class based approach

## Improvements I can make

Due to a lack of time I was unable to complete the following:

- Mobile optimisation
- Introduction of types/typescript
- Unit tests/ browser tests
- deployment configs for static and container(docker) deployments