function *foo_a() {
  yield 1;
}

function *foo_b() {
  yield 1;
  yield 2;
}

function *foo_c() {
  yield 1;
  yield 2;
  yield 3;
}

var it_a = foo_a();
var it_b = foo_b();
var it_c = foo_c();

while( (a=it_a.next().value) | (b=it_b.next().value) | (c=it_c.next().value)  ) {
  console.log(a)
  console.log(b)
  console.log(c)
}
