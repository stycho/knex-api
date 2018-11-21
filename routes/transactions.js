const express = require('express');
const router = express.Router();

module.exports = (transactionHelpers) => {
  router.get('/', (req, res) => {
    transactionHelpers.getAllTransactions()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        console.log(err)
      })

    
  });

  // router.get('/', (req, res) => {
  //   transactionHelpers.getAllTransactions((err, transactions) => {
  //     if (err) {
  //       console.log('Knex select Error: ', err);
  //     } else {
  //       res.send(transactions);
  //     }
  //   });
  // });

  return router;
}

// router.get('/', (req, res) => {
//   dataHelper.getAllTransactions(req, res);
//   // knex.select().from('transactions')
//   //   .then(transactions => {
//   //     res.send(transactions);
//   //   })
//   //   .catch(err => {
//   //     console.log('Knex select Error: ', err);
//   //   });
// });

// router.get('/:id', (req, res) => {
//   const userId = req.params.id;
//   knex.select()
//     .from('transactions')
//     .where('id', userId)
//     .then(transactions => {
//       res.send(transactions);
//     })
//     .catch(err => {
//       console.log('Knex select Error: ', err);
//     });
// });

// router.post('/', (req, res) => {
//   const newTransaction = req.body;
//   knex('transactions').returning('id').insert(newTransaction)
//     .then(([ transactionId ]) => {
//       console.log(transactionId);
//       knex.select('id', 'amount_cents', 'created_at').where('id', transactionId).from('transactions')
//         .then((transactions) => {
//           res.send(transactions);
//         })
//         .catch(err => {
//           console.log(err);
//         });
//     })
//     .catch(err => {
//       console.log(err);
//     });
// });





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

// module.exports = router;