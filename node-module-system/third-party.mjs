import { cloneDeep, sortBy } from 'lodash-es';
// const _ = require('lodash');

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

const sorted = sortBy(users, [ u => u.email ]);
console.log( sorted );

const u2 = cloneDeep(users);
u2[0].name = 'Gábor';
console.log( users );
