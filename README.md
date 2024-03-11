# Home Library Service

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Downloading

```
git clone {repository URL}
```

## Installing NPM modules

```
npm install
```

## Running application

```
npm start
```

After starting the app on port (4000 as default) you can open
in your browser OpenAPI documentation by typing http://localhost:4000/doc/.
For more information about OpenAPI/Swagger please visit https://swagger.io/.

## Testing

After application running open new terminal and enter:

To run all tests without authorization

```
npm run test
```

To run only one of all test suites

```
npm run test -- <path to suite>
```

To run all test with authorization

```
npm run test:auth
```

To run only specific test suite with authorization

```
npm run test:auth -- <path to suite>
```

### Auto-fix and format

```
npm run lint
```

```
npm run format
```

### Debugging in VSCode

Press <kbd>F5</kbd> to debug.

For more information, visit: https://code.visualstudio.com/docs/editor/debugging

Task: [Home Library Service: Part 1](https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/rest-service/assignment.md)
End date:  2024-03-12 01:11 / 2024-03-12 03:00
Score:  730 / 760
# Scoring: REST Service



## Basic Scope
- **+10** The repository with the application contains a `Readme.md`
- **+10** The application code that worked with `Users`
- **+10** The application code that worked with `Tracks`
- **+10** The application code that worked with `Albums`
- **+10** The application code that worked with `Artists`
- **+10**  The application code that worked with Favorites
- **+5**  Not each successfully passed test)

## Advanced Scope
- **+10** PORT value is stored into `.env` file
- **+20** OpenAPI spec in doc folder corresponds with assignment (go to http://localhost:4000/swagger)

Not implemented:
6.When you delete Artist, Album or Track, it's id should be deleted from favorites (if was there) and references to it in other entities should become null. For example: Artist is deleted => this artistId in corresponding Albums's and Track's become null + this artist's id is deleted from favorites, same logic for Album and Track.

7.Non-existing entity can't be added to Favorites.

1. git clone https://github.com/rahunak/nodejs2024Q1-service.git
2. git checkout dev
3. cd nodejs2024Q1-service
4. npm install (sometime need use '--legacy-peer-deps' - i hope it's not my case:)
5. copy .env.example and rename to .env
6. npm run start (or npm run start:dev **if you want**)
7. check
8. swagger is there: http://localhost:4000/swagger

Have a nice check!
