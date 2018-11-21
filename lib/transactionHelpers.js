module.exports = (knex) => ({
  getAllTransactions: () => {
    return knex.select().from('transactions')
  },
  authenticateUser: () => {},
  getUserByEmail: () => {},
  getTransactionById: (id) => {
    return knex.select().from('transactions').where('id', id);
  }
});