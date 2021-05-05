// ES module
// import { cloneDeep, sortBy } from 'lodash-es';

// Common module, megőrzi az állapotát végig a futási idő alatt.
const { cloneDeep, sortBy } = require('lodash');

/**
 * 3 types of modules in nodeJS
 *  - outwards(third-party) bundles (common -.js, ES moduels - .mjs)
 *  - inside, interval modules (build-in)
 *  - custom modules (own bundles)
 */

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
