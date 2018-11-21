module.exports = (knex) => ({
  getAllUsers: () => {
    return knex.select().from('users');
  },
  getUserById: (id) => {
    return knex.select().from('users').where('id', id);
  },
  getUserByEmail: () => {

  },
  createUser: () => {

  },
  authenticateUserName: (email, password) => {
    return getUserByEmail(email)
      .then(foundUser => {
        if (foundUser && foundUser.password === password) {
          return foundUser;
        }
        return undefined;
      })
    }
});