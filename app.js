const knex = require('/db/knex.js');

knex('famous_people').asCallback((err, rows) => {
    console.log(err || rows);
});

module.exports = function sum(arr) {
    if (!Array.isArray(arr)) return 0;
    return arr.reduce((acc, val) => {
        return acc + val;
    })