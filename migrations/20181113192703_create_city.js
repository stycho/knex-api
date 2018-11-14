
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cites', table => {
      table.increments();
      table.string('name');
      table.integer('famous_people_id');
      table.foreign('famous_people_id').references('famous_people.id')
      table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cites');
};
