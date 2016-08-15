var sys = require('sys')
var exec = require('child_process').exec;

function legacy ( callback ) {
  exec("ping -c 3 localhost", callback);
}

//sync with generators
function *main_generator() {

  yield legacy( () => {
    console.log("hello world");
    main.next();
  });

  console.log("bye bye world");
}

var main  = main_generator();
main.next();

console.log("EOF")
