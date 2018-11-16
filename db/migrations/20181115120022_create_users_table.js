
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', table => {
      table.increments();
      table.string('first_name').notNullable();
      table.string('last_name').notNullable();
      table.string('email').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
    })
    .createTable('transactions', table => {
        table.increments();
        table.integer('amount_cents');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.integer('receiver_id').references('id').inTable('users');
        table.integer('sender_id').references('id').inTable('users');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('transactions')
        .dropTable('users');
};
