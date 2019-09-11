# Counsellor

![Preview-Screens](https://github.com/leoancap/Counsellor/blob/master/counsellorPreview.png)

## demo

- https://counsellor.leoancap.now.sh

## Installation

Instal Node by downloading it from https://nodejs.org/en/download/current.

Install the Yarn CLI from https://yarnpkg.com/lang/en/docs/install.

1. Clone project.

```
git clone https://github.com/leoancap/counsellor
```

2. cd into folder.

```
cd counsellor
```

3. Download and install dependencies.

```
yarn
```

## View app on http://localhost:3000

```
yarn start
```

## Build app

```
yarn build
```

## See stories

```
yarn storybook
```

## Run Tests

```
yarn test
```

## Tech Stack

- Next.js
- React
- Typescript
- Styled-Components
- Storybook
- React testing library

## Folder structure

```
./
├── .storybook  =>  Storybook configuration
├── components  =>  this holds all of the components expect for pages
├── hooks       =>  some customHooks to be reused
├── context     =>  app context for global state
├── pages       =>  routes that represent a page
    ├── api     =>  serverless functions for serving data
├── services    =>  interaction with apis or backends
├── styled      =>  styled-components configuration and themes
├── types       =>  typing declarations including domain types and module types
└── utils       =>  utility functions
```

## Linting and formatting

- tslint and prettier.

## State management

- Global state is managed with React Context API.
- Local state is managed with React Hooks API.

## Styling

- It uses styled-components, a CSS-in-JS solution. This way, styles are only coupled to the component. It also provides a more performant stylesheet than common CSS solutions such as Sass.

## Static types

- It uses typescript with some strict rules. No implicity and explicity any.

## Bundling and building

- Next.js is used both for development and building.

## API

- With Next.js, it is simple to add serverless function, Just add a folder inside the pages directory
  `./pages/api/professionals.ts`

## Features

- It is a hybrid application, which means, it can be server side rendered and/or client side rendered
