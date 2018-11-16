
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {first_name: 'Bob', last_name: 'Robertson', email: 'bob@bob.bob'},
        {first_name: 'Tim', last_name: 'Tomson', email: 'tim@tim.tim'},
        {first_name: 'Anne', last_name: 'Cran', email: 'anne@anne.anne'},
      ]);
    });
};
