# Cypress End to End Tests

This repo uses Cypress for its end to end tests. Watch examples and read documentation at [www.cypress.io](https://www.cypress.io/).

## Dependencies

You will need [node](https://nodejs.org/en/download/) installed globally on your local machine. Version 8 or higher, suggest you use something like nvm to manage what version of node.js you are using.

## Installation

To install the node packages run:
`npm install`

## Test Scripts

When you run any of the tests scripts Cypress will open up an environment that lists all the tests that have been written.

**Test environment** `npm run cypress:open`

## CI setup

Cypress is setup to run against the test environment running in headless mode using the following command:

`npm run test`

This runs scripts in the command in sequential order without exiting the sequence if there is an error code after each brand is run, this is to enable reporting to be run post test run to include screenshots of the pages that have a test failure. This is done usingyarn-run-all](https://www.npmjs.com/package/npm-run-all)

## Environment configuration

Environment configuration files are located in the config folder when added to the scripts section of package.json controls what environment the tests are run against.

e.g. `cypress open --env configFile=test`

where test refers to `config\test.json` the configuration file for the test environment.

Switching between environments is setup by following this [guide](https://docs.cypress.io/api/plugins/configuration-api.html#Switch-between-multiple-configuration-files") If the config file is not set then configuration defaults to test.json

## Scenario tagging

Tagging is used to split the regression tests out to test various scenarios. This is done with tagging the feature or scenarios with the `@smoke` tags, then specifying what tags to run in the tests passing these as an environment variable.
e.g. `cypress run --env TAGS=\"@smoke\"`

## Custom Commands

It's possible to create custom commands to extend the Cypress API
https://docs.cypress.io/api/cypress-api/custom-commands.html

A custom command has been created to check which brand the tests are running against to enable tests specific to that brand in `cypress\support\command.js`

This then can be utilised by using `cy.checkBrand` command.

## Reporting

Reporting is configured in the cypress.json file.
All test results are stored in cypress\results folder, a report tool called [Mochawesome](https://www.npmjs.com/package/mochawesome) which [Mocha awesome report generator](https://www.npmjs.com/package/mochawesome-report-generator) collates those results into an html report stored in the public folder as `index.html`. This can be run by using the command `npm run report:generate`

Note that there are cleanup tasks `pretest` that run before the `npm run test` script in `scripts/cypress.js` to empty the reports folder and mochawesome.json file.

## Plugins

[chai-in-viewport](https://www.npmjs.com/package/chai-in-viewport) has been added to this project to improve the `'be.visible'` assertion to now check if the element is in the viewport. It's recommended to use both in this format `'be.visible.and.inViewport'`
For more details on the difference between to the two (https://github.com/cypress-io/cypress/issues/877)
