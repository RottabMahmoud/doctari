# Doctari Case Study Description

## What the Application does

- A tool which presents the given test static data in an user interface.
- The tool is able to display the federal states of Germany (Bundesland) for each User in the records, by Clicking on it.
- A Dynamic Search Filter by Name with Autocomplete Functionality, is at the top of the page,

## Technologies

- Material UI
- React
- React Testing Library/ jest
- JavaScript
- React hooks

## Some of the challenges I've faced and how I've tackled them

- Using the GoogleMaps Geocoding API to get the federal states, by each Users's address.
  " https://maps.googleapis.com/maps/api/geocode/json?address=<ADRESS>&key=<GOOGLE_API_KEY>"

## Project Installation

```bash
git clone https://github.com/Rottabx/doctari.git
cd doctari
yarn
```

## To Start the App

```bash
yarn start
```

## For Running the Tests

```bash
yarn test
```

## For Building

```bash
yarn build
```

## Usage

Used Material UI as a Component Library.

```bash
npm install @mui/material
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
npm install @material-ui/core
```

## Project Hierarchy

```bash
  crealytics
    ├─ public
    │  ├─ favicon.ico
    │  ├─ index.html
    ├─ src
    │  ├─ index.js
    │  ├─ components
    │  │  ├─ Header.js
    │  │  ├─ GeoLocation.js
    │  │  ├─ UserList.js
    │  │  ├─ Search.js
    │  ├─ tests
    │  │  ├─ Header.test.js
    │  │  ├─ Home.test.js
    │  │  ├─ GeoLocation.test.js
    │  │  └─ UserList.test.js
    │  │  └─ Search.test.js
    │  ├─ views
    │  │  └─ Home.js
    │  │─ App.css
    │  │─ App.js
    │  │─ reportWebVitals
    │  │─ setupTests.js
    ├─ .gitignore
    ├─ node_modules
    ├─ package.json
    ├─ package-lock.json
    ├─ README.md
    └─ yarn.lock
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Badge

<a href="https://www.linkedin.com/in/mahmoud-rottab-234255219/"> <img src="https://img.shields.io/badge/Mahmoud%20Rottab-LinkedIn-red" alt="Crealytee" /> </a>
