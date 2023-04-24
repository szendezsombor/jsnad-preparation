const undefinedVal = undefined;
const nullVal = null;
const booleanVal = true;
const numberVal = 10;
const bigintVal = 10n;

console.log('The typeof the undefinedVal is: ' + typeof undefinedVal); // undefined
console.log('The typeof the nullVal is: ' + typeof nullVal); // object -> because: https://262.ecma-international.org/5.1/#sec-11.4.3
console.log('The typeof the booleanVal is: ' + typeof booleanVal); // boolean
console.log('The typeof the numberVal is: ' + typeof numberVal); // number
console.log('The typeof the bigintVal is: ' + typeof bigintVal); // bigint
