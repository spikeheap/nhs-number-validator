#!/usr/bin/env node

var rl = require('readline').createInterface(process.stdin, process.stdout);
var validator = require('./index.js');

console.log('Enter NHS numbers to validate, Ctrl-D to exit');

rl.setPrompt('> ');
rl.prompt();

rl.on('line', function(line) {
  var result = validator.validate(line);
  console.log(result ? '  VALID' : ' *INVALID')
  rl.prompt();

}).on('close', function() {
  process.exit(0);
});
