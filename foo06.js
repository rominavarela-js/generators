var sys = require('sys')
var exec = require('child_process').exec;

function legacy ( callback ) {
  exec("ping -c 3 localhost", callback);
}

legacy(function () {
  console.log("hello world");
});

console.log("EOF");
