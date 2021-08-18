# alias-error-cypress
Reproducer for Cypress alias resolution error

## Steps to reproduce

Install 

```bash
yarn install
```

Open Cypress

```bash
npx open cypress
```

Run `test.spec.js`

Receive error

```bash
Error: Webpack Compilation Error
./cypress/support/helper/helpers.js
Module not found: Error: Can't resolve '@alias-example/sub-folder/app-code.ts' in '/Users/joel.whalen/Documents/src/reproducers/alias-error-cypress/cypress/support/helper'
resolve '@alias-example/sub-folder/app-code.ts' in '/Users/joel.whalen/Documents/src/reproducers/alias-error-cypress/cypress/support/helper'
  Parsed request is a module
  using description file: /Users/joel.whalen/Documents/src/reproducers/alias-error-cypress/package.json (relative path: ./cypress/support/helper)
    Field 'browser' doesn't contain a valid alias configuration
    Looked for and couldn't find the file at the following paths:
```