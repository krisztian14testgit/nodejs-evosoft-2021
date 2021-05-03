
// ES5 version
// variable default declaration: undefined always.
function adder(a, b) {
  console.log(a, b);
  return a + b;
}

let result = adder();
console.log(result);

// ES6: default arguments
function multiplier(a = 3, b = 2) {
  return a * b;
}
result = multiplier(undefined, 6);
console.log('multi:', result);

// function expression
const divider = function(a, b) {
  return a / b;
};

// callback function
const myMath = function(a, b, callback) {
  return callback(a, b);
};
result = myMath(2, 2, adder);
console.log(myMath(2, 2, multiplier));

// es6: spread operators:
const showMessage = function(...args) {
  console.log(args.join(' '));
}
showMessage(10, 'adfa', adder);
// spread array:
console.log( ...[1, 2, 3]) // 1, 2, 3
// add extra element
let array = [1, 2, 3];
array = [...array, 10,12];
console.log(array);

// ES6: array function, lamda
const power = (base, p) => {
  return Math.pow(base, p);
};

result = power(10, 2);
console.log('power:', result);

console.log(power.toString());

// re-define function
globalThis.adder = function() {};

// const expression function is not overrided

console.log(power.toString());
power = adder;
console.log(power.toString());
