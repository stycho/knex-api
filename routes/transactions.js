const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/', (req, res) => {
  knex.select().from('transactions')
    .then(transactions => {
      res.send(transactions);
    })
    .catch(err => {
      console.log('Knex select Error: ', err);
    });
});

// app.get('/api/transactions/:id', (req, res) => {
//   console.log(req.params);
//   knex.select().from('transactions').where('id', req.params.id)
//     .then(transactions => {
//       res.send(transactions);
//     })
//     .catch(err => {
//       console.log('Knex Get Error:', err);
//     })
// })

// app.post('/api/transactions/', (req, res) => {
//   const myTransaction = {
//     amount_cents: 1099,
//     sender_id: 2,
//     receiver_id: 3
//   };

//   knex('transactions').insert(myTransaction)
//     .then(() => {
//       knex.select().from('transactions')
//         .then(transactions => {
//           res.send(transactions);
//         });
//     })
//     .catch(err => {
//       console.log('Knex Insert Error: ', err)
//     })
// });

module.exports = router;