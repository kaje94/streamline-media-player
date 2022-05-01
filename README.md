# Streamline Media Player
This is a simple media player app built with [Create React App](https://github.com/facebook/create-react-app) to play youtube videos based on video IDs.

## [Live demo](https://streamline-media-player.vercel.app/)
## Functionality
- Play youtube video belonging to a given video Id
- Like/Dislike playing media

## Folder structure
This project follows Atomic Design Pattern to structure the project which promote consistency, modularity, and scalability of react components.\
Find out more about [atomic design](https://atomicdesign.bradfrost.com).


    .
    ├── .github                     # Github workflow configurations
    ├── .husky                      # Pre-commit hook configurations
    ├── .nginx                      # Docker image related configurations
    ├── .storybook                  # Storybook related configurations
    ├── public                      # Includes the assets that will be publicly available
    ├── src                         # Contains all the source code related to the project
    │   ├── pages                   # Pages belonging to the app
    |   ├── components              # All the reusable components of the app
    |   |   ├── atoms               # Smallest building blocks
    |   |   ├── molecules           # Group of atoms together
    |   |   ├── organisms           # Groups of molecules together
    |   |   ├── templates           # Reusable templates for each page
    |   ├── hooks                   # Custom reusable hooks
    |   ├── util                    # Includes all common function, types & constants
    ├── .eslintrc.js                # Contains all the lint rules
    ├── Dockerfile
    ├── package-lock.json
    ├── package.json
    ├── tsconfig.json
    └── README.md
## Available Scripts
In the project directory, you can run:

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run storybook`
Starts Storybook in development mode.\
See the section about [storybook](https://storybook.js.org/docs/react/get-started/introduction) for more information.

### `npm test` | `npm run test:watch`
Launches the test runner in either interactive watch mode or normal mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
Builds the app for production to the `build` folder.\
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Docker
`docker build -t streamline-media-player .` to build a docker image \
`docker run -p 3000:80 streamline-media-player` to run the image in port 3000 \
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Future work
- Add more test cases to increase test coverage
- Add i18n support