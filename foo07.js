var sys = require('sys')
var exec = require('child_process').exec;

function legacy ( callback ) {
  return exec("ping -c 3 localhost", callback);
}

// sync with promises
var promise = new Promise( (resolve,reject) => {

    legacy( () => {
      console.log("hello world");
      resolve();
    })

  }
);

promise.then( () => {
  console.log("bye bye world");
});

console.log("EOF");
