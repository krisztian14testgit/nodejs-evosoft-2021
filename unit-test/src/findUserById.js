const findUserById = (users, id) => {
    return users.find( user => user.id === id ) || null;
};

module.exports = findUserById;