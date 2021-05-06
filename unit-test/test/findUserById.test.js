const { describe, it, expect } = require('jest');

const findUserById = require('../src/findUserById');

describe('Test flow', () => {
    it('findUserByID should return a user object', () => {
        const users = [{ id: 1 }];
        const id = 1;
        expect( findUserById(users, id) ).toEqual( users[0] );
    });

    it('findUserByID should return null', () => {
        const users = [{ id: 1 }];
        const id = 2;
        expect( findUserById(users, id) ).toEqual( null );
    });
})
