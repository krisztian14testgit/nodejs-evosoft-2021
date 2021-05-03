// Arrays.
const nums = [1, 2, 4, 7, 3];
console.log( nums.length );

nums[0] = 9;

// Push, Pop
console.log( nums.push(33) );
console.log( nums.pop() );

// Unshift, Shift
console.log( nums.unshift(100) );
console.log( nums.shift() );

// Sort
console.log( nums.sort() );
console.log( nums );

// Filter: return a new array
const greatherThenFive = nums.filter( item => item > 5 );
console.log( greatherThenFive );

// Map: return a new array
const mappedNumbers = nums.map( item => item * 2 );
console.log( mappedNumbers, nums );

// Sort users array
const users = [
    {
        id: 1, 
        name: 'Zoltán',
        email: 'j@gmail.com',
    },
    {
        id: 2, 
        name: 'Ádám',
        email: 'j@outlook.com',
    },
    {
        id: 3, 
        name: 'Alfréd',
        email: 'j@gmail.com',
    },
    {
        id: 4, 
        name: 'Géza',
        email: 'j@hotmail.com',
    },
];
users.sort( (a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()) );
console.log( users );

const filterFn = phrase => {
    // Everywhere
    return item => {
        const base = Object.values(item).join('').toLowerCase();
        return base.includes(phrase);
    }
};

const currentFilter = filterFn('gmail');
const fUsers = users.filter( currentFilter );
console.log( fUsers );

// Same functionality with bind.
const binded = function(item) {
    console.log( this );
    const base = Object.values(item).join('').toLowerCase();
    return base.includes(this.phrase);
};
const bUsers = users.filter( binded.bind({phrase: 'hotmail'}) );
console.log( bUsers );
