// create own module
const even = array => array.filter(item => item % 2 === 0);
const odd = array => array.filter(item => item % 2 !== 0);

const test = 4;

// default export
// module.exports = even;

// Multiple exports in commonJs
module.exports = {
  even, odd
}

// es6 export
/*export default {
  even, odd
}*/ /* file extension has to be mjs*/