function *foo() {
  yield 1;
  yield 2;
  yield 3;
}

var it = foo();
while( i=it.next().value )
  console.log(i)
