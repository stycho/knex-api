
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('transactions').del()
    .then(function () {
      // Inserts seed entries
      return knex('transactions').insert([
        {amount_cents: 500, sender_id: 1, receiver_id: 2},
        {amount_cents: 10000, sender_id: 1, receiver_id: 3},
        {amount_cents: 250, sender_id: 2, receiver_id: 3},
      ]);
    });
};