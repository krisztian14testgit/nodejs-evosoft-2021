'use strict'

// ES1 version: var is function scope (live in root, or function)
var company = 'evosoft';

// ES6 variables.
let user = 'Józsi';
const age = 33; // immutable
age = 44 // it cannot be change

// Types of variables
  // primitives: boolean, number, string, null, undefined, Symbol
  // collection: object, array, map, weekMap

// Scopes of variables:
console.log(company);

function test() {
  globalThis.withOuthVar = 'sss';
  console.log(company);
}


test();
console.log(withOuthVar); // comment out: ctrl + ü
// console.log(globalThis); 

// Block Scoped variables.
user = 'Gergely'
{
  let user = 'Norbert';
  console.log(user);
}

console.log(user);