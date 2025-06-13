# NHS number validator (JS)
[![Build Status](https://travis-ci.org/spikeheap/nhs-number-validator.svg?branch=develop)](https://travis-ci.org/spikeheap/nhs-number-validator)

A simple NHS number validator, following the process described in the [NHS Data Dictionary](http://www.datadictionary.nhs.uk/data_dictionary/attributes/n/nhs/nhs_number_de.asp?shownav=0?query=%22nhs+number%22&rank=100&shownav=1).

## Installation

##### NPM

```bash
npm install --save nhs-number-validator
```

##### Bower

```bash
bower install --save nhs-number-validator
```

## Usage

##### Command line / terminal

To run the interactive validation tool, install the NPM module globally:

```bash
npm install -g nhs-number-validator
```

and `nhs-number-validator` will be added to your path:

```bash
$ nhs-number-validator
Enter NHS numbers to validate, Ctrl-D to exit
> 123
*INVALID
> 2983396339
 VALID
```

You can also install the tool for a single project, and just reference the executable in your project:

```bash
npm install nhs-number-validator
./node_modules/.bin/nhs-number-validator
# or
`npm bin`/nhs-number-validator
```

##### Node/Browserify

For environments supporting `require`/`exports`:

```javascript
var validator = require('nhs-number-validator');

validator.validate('2983396339') // => true
validator.validate('test') // => false
```

##### Browsers

Any environment which exposes `window` will have the `nhsNumberValidator` variable attached when `index.js` is loaded, e.g.:

```html
<script src="./bower_components/nhs-number-validator/index.js"></script>
<script>
  var validator = window.nhsNumberValidator
  validator.validate('2983396339') // => true
  validator.validate('test') // => false

  // or just use it directly if you prefer:
  window.nhsNumberValidator.validate('2983396339') // => true

  // you don't even need `window`:
  nhsNumberValidator.validate('2983396339') // => true
</script>
```


## Contributing

Pull requests, issues, and questions are all welcome.

Some useful commands:

* `npm test`: run the test suite.
* `npm run test-watch --silent`: watch for changes and run the test suite each time.
* `npm run lint --silent`: run the code linter.
* `npm run cli`: run the validator CLI.

NPM is overly verbose [at the moment](https://github.com/npm/npm/issues/5452), hence the additional `--silent` to suppress the unnecessary noise.

### Creating a release

Making a release is pretty straightforward:

1. Update the version in `package.json` in the `main` branch.
2. Tag the commit with the same version number (e.g. `git tag -l "1.1.1" && git push --tags`), which will trigger GitHub Actions to publish to NPM.

