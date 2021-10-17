function isValidEmail(email) {
  return /^[a-z0-9]+@[a-z]+(\.[a-z]+)+$/i.test(email);
}

console.log(isValidEmail('Foo@baz.com.ph')    === true);
console.log(isValidEmail('Foo@mx.baz.com.ph') === true);
console.log(isValidEmail('foo@baz.com')       === true);
console.log(isValidEmail('foo@baz.ph')        === true);
console.log(isValidEmail('HELLO123@baz')      === false);
console.log(isValidEmail('foo.bar@baz.to')    === false);
console.log(isValidEmail('foo@baz.')          === false);
console.log(isValidEmail('foo_bat@baz')       === false);
console.log(isValidEmail('foo@bar.a12')       === false);
console.log(isValidEmail('foo_bar@baz.com')   === false);
console.log(isValidEmail('foo@bar.....com')   === false);
