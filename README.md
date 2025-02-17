# Marvel Heroes

This application is a small demo of a Marvel character search SPA

## Instalation and running

### Requisites:

- Node >= 20
- yarn (activated via `corepack enable`)

To install this application first clone it from github: `git clone git@github.com:fcomabella/marvel-heroes.git`

Install the dependencies using yarn `yarn install`

Before running the application for the first time you must obtain your Marvel API keys here: https://developer.marvel.com/

Once you have your API keys, create a `.env.local` file on the project root. Like the example below.

```
VITE_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
VITE_PRIVATE_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

This file is on the `.gitignore` so it will not be published to any repo.

### Running the development server

Once you have installed the dependencies and setup the AP keys, you will be able to run the development server:

`yarn dev`

When the server starts you can access the application at http://localhost:5173/

### Running storybook

This project has some storybook stories setup for the most basic components. To acces them run `yarn storybook`

### Runing the test suite

The project includes units test written for [Vitest](https://vitest.dev/).

To run the tests once run `yarn test:ci` you can run the tests continually with `yarn test`

To see the code coverage, run `yarn test:ci:coverage` or `yarn test:coverage`

### Linting the code

This project uses Eslint an Prettier for linitng and formatting. Run ỳarn lint`to run the linter.

### Code formatting

To maintiang a ocherent code formatting, the project uses prettier.

### Automated actions

With [Husky](https://typicode.github.io/husky/) the project manages some automated actions.

- Commit messages must adhere to the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.
- Al the code pushed to the repo must be covered by a unit test.

To get those results there are rules setup as git hooks, Check the `.husky` folder.

### Building for production

To generate the bundle run `yarn build`

To preview the generated bundle run `yarn preview`

## Architectural decisions

This project has been written following the principles of DDD and CLEAN architecture.

CLEAN architecture, when properly used allows to completely separate the application logic and the UI logic.

This architectural pattern allows us to quickly adapt the application to use other presentation frameworks. Angular, Vue, Dojo...

### Project structure

For an easy navigation and location of the files the project is structured following the scraming architecture pattern.

Below is an example of the folder structure.

```bash
├── public <- Public files, images, etc.
├── src
│   ├── config <- Code files with onformation necessary to run the app
│   ├── core <- The framework agnostic code
│   │   ├── characters <- One folder for each application module
│   │   │   ├── application <- Business logic for this module
│   │   │   │   ├── models <- business logisc related entity models
│   │   │   │   └── use-cases
│   │   │   ├── domain
│   │   │   │   ├── models <- entity defintions
│   │   │   │   └── ports <- interfaces and types for the persistence infra
│   │   │   └── infrastructure <- everithing related to the persistence infra
│   │   │       ├── constants
│   │   │       ├── ports <- Business logic to interact with the persistence layer
│   │   │       ├── schemas <- Validators to check the persistence generated DTOS
│   │   │       ├── type-guards <- The type guards run the validations defined on the schemas
│   │   │       └── utils <- General infra related helpre functions for this module
│   │   └── shared <- This hosts models and business logic shared between modules
│   │       ├── domain
│   │       │   └── models
│   │       └── infrastructure
│   │           ├── constants
│   │           ├── exceptions <- Common exception definitions
│   │           ├── models
│   │           ├── schemas
│   │           ├── type-guards
│   │           └── utils
│   ├── routes <- Contains a file representation of the intended navigation
│   ├── ui <- Presentation related business logic. Everithong related to the UI framework goes here
│   │   ├── characters <- Module division for the UI layer
│   │   │   ├── constants
│   │   │   ├── contexts <- Here we define the React contexts that will hold state
│   │   │   ├── controllers <- controllers act as bridge between @core and @ui
│   │   │   ├── hooks <- for simple operations a context is not required
│   │   │   ├── models <- model used by the components and the widgets
│   │   │   └── widgets <- presentational components that require a bit of business logic, or integration with some controller
│   │   ├── components <- pure presentation components, as "dumb" as possible
│   │   ├── shared <- Same as before, for the UI layer
│   │   │   ├── constants
│   │   │   ├── models
│   │   │   └── utils
│   │   └── theme <- CSS in JS related code, variables and helpers
```

To manage the state sync between server and client whe use [Tanstack Query](https://tanstack.com/query/latest) as an async state manager. This election allow us to change how we persist the data easily. Currently we use localstorage to manage the Favorita characters. We could change this to use some kind of backend server. The only modules rthat need to change for this operation to be done would be the ones in `src/core/<module>/infrastructure/ports` all the models, use-cases, etc. remain unchanged.

All the client routing necessary is managed by [Tanstack Router](https://tanstack.com/router/latest), using its [file-based routing](https://tanstack.com/router/latest/docs/framework/react/guide/file-based-routing) approach. The route structure is hosted in the `src/routes` folder. The main reason to use Tanstack router is its improve type safety management over other similar tools like [React Router](https://reactrouter.com/).
