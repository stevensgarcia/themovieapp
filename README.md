# TheMoviesApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Installation

Run `npm install` to install all the required dependencies.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

The application looks like this for your reference:

![Home](https://i.imgur.com/lkne87e.png)

![Add a Movie](https://i.imgur.com/Q9STSD5.png)

![Top5Movies](https://i.imgur.com/ki92HpZ.png)

## Project structure

Bellow you can see the scaffold of the project.

`src/
├── app/
│   ├── core/
│   │   └── core.module.ts
│   ├── data/
│   │   ├── external-movies.service.spec.ts
│   │   ├── external-movies.service.ts
│   │   ├── local-movies.service.spec.ts
│   │   └── local-movies.service.ts
│   ├── layout/
│   │   ├── side-navigation/
│   │   └── toolbar/
│   ├── pages/
│   │   └── home/
│   ├── shared/
│   │   ├── components/
│   │   ├── models/
│   │   ├── utils/
│   │   ├── material.module.ts
│   │   └── shared.module.ts
│   ├── app-routing.module.ts
│   ├── app.component.html
│   ├── app.component.scss
│   ├── app.component.spec.ts
│   ├── app.component.ts
│   └── app.module.ts
├── assets/
├── environments/
│   ├── environment.prod.ts
│   └── environment.ts
├── styles/
│   ├── _placeholders.scss
│   └── _variables.scss
├── favicon.ico
├── index.html
├── main.ts
├── polyfills.ts
├── styles.scss
└── test.ts`

## Build

Run `npm build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io) in headless mode on the terminal. You should see the following screen on your terminal:

![Top5Movies](https://i.imgur.com/UXYHIje.png)