# NHS number validator (JS)

A simple NHS number validator, following the process described in the [NHS Data Dictionary](http://www.datadictionary.nhs.uk/data_dictionary/attributes/n/nhs/nhs_number_de.asp?shownav=0?query=%22nhs+number%22&rank=100&shownav=1).

## Installation

##### NPM

```
npm install --save nhs-number-validator
```

##### Bower

```
bower install --save nhs-number-validator
```

#### Running and testing

Some useful commands:

* `npm run`: run the validator CLI.
* `npm test`: run the test suite.
* `npm run test-watch --silent`: watch for changes and run the test suite each time.
* `npm run lint --silent`: run the code linter.

NPM is overly verbose [at the moment](https://github.com/npm/npm/issues/5452), hence the additional `--silent` to suppress the unnecessary noise.

You can run the tests on every change with:

```bash
karma start
```
