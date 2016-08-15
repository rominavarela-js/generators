function *foo() {

  console.log("\nfoo > running")
  yield 1;

  console.log("\nfoo > running")
  yield 2;

  console.log("\nfoo > running")
  yield 3;

  console.log("\nfoo > done")
}

var it = foo();
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
