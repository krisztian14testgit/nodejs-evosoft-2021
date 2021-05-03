// es5: object literal
var user = {}; // recommended
// es5: object constructor
var user2 = new Object();

// es5: Object property intializer
var getUser = (name, age) => {
  return {
    name: name, // key-value pair
    age: age,
  };
};
// es6: Object property intializer
const getUser2 = (name, age) => {
  return {
    name,
    age,
  };
};

// es5: computed property name
var emplyoee = {
  id: 101,
  name: 'Amit',
};
var key = 'name';
emplyoee.key = 'Sussa'; // add new property as key
// if you want to change refer to propety
emplyoee[key] = 'Sussa';

// es6: computed property name
const departman = 'dep';
const emplyoee2 = {
  id: 101,
  name: 'Amit',
  [departman]: 'Sales'
};

// es5: object's methods
var emplyoee3 = {
  id: 101,
  name: 'Amit',
  getName: function () {
    return this.name;
  }
};
console.log(emplyoee3.getName());

// es6: object's methods
const emplyoee4 = {
  id: 101,
  name: 'Amit',
  getName() {
    return this.name;
  }
};
console.log(emplyoee4.getName());

// es5: merge two ojects
const car = { 
  type: '',
  year: 2020,
  price: 0,
};
const serverResponse = { 
  type: 'VW Jetta',
  year: 2021,
  price: 15000,
};
// target(first param) contains the merged object
const finalCar = Object.assign({} ,car, serverResponse);
console.log(finalCar);

// es5: cloning
const newCar = Object.assign({}, car);

// es6: merging
const car3 = {...car, ...serverResponse};
// es6: cloning
const car4 = {...car};

// es6: destructuring
const {type, year} = car3;
const { type: carType } = car3;

// type contains type value, args will contains other prop like then functional lang: (head | tail), haskell
// const {type, ...args} = car;

// es6: setter, getter
console.log('saved log part:');
const language = {
  savedLog: [],
  set log(name) {
    this.savedLog.push(name);
  },
  get log() {
    return this.savedLog;
  }
};

// holnap 10:30-as
language.log = 'en';
language.log = 'hun';
language.log = 'ru';
console.log('log:', language.log);

// this context
const language2 = {
  savedLog: [],
  set log(name) {
    this.savedLog.push(name);
  },
  get log() {
    return this.savedLog;
  },
  count() {
    const id = setTimeout(() => {
      console.log(this);
      console.log(this.savedLog.length);
      // remove setTimeOut from memory
      clearTimeout(id);
      return this.savedLog.length;
    }, 500);
  }
};
language2.log = 'magyar';
console.log('count:', language2.count());