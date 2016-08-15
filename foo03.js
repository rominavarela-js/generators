function *foo() {
  yield 1;
  yield 2;
  yield 3;
}

var it_a = foo();
var it_b = foo();
var it_c = foo();

while( (a=it_a.next().value) && (b=it_b.next().value) && (c=it_c.next().value)  ) {
  console.log(a)
  console.log(b)
  console.log(c)
}
