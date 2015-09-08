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

* `npm run`: run the validator CLI.
* `npm test`: run the test suite.
* `npm run test-watch --silent`: watch for changes and run the test suite each time.
* `npm run lint --silent`: run the code linter.

NPM is overly verbose [at the moment](https://github.com/npm/npm/issues/5452), hence the additional `--silent` to suppress the unnecessary noise.

You can run the tests on every change with:

```bash
karma start
```

### Creating a release

Making a release is pretty straightforward:

```bash
VERSION_NUMBER=1.0.0

git checkout master && git pull
git checkout develop && git pull

git flow release start $VERSION_NUMBER

# Bump the version in package.json now!
jq ".version = \"${VERSION_NUMBER}\"" package.json > package.json.new && mv package.json.new package.json
git add package.json
git commit -m "Update package version number to $VERSION_NUMBER"

# The following command requires user input
git flow release finish $VERSION_NUMBER

git checkout master && git push
git checkout develop && git push
git push --tags

git checkout master
hub release create -m "$VERSION_NUMBER" $VERSION_NUMBER
npm publish
# Bower is published automatically using Git tags, so don't worry about that
git checkout develop
```
