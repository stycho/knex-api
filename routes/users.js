const express = require('express');
const router = express.Router();

module.exports = (userHelpers) => {
  router.get('/', (req, res) => {
    userHelpers.getAllUsers()
      .then(users => {
        res.send(users);
      })
      .catch(err => {
        console.log('Error: ', err)
      })
  });

  router.get('/:id', (req, res) => {
    userHelpers.getUserById(req.params.id)
      .then(user => {
        res.send(user);
      })
      .catch(err => {
        console.log('Error: ', err)
      })
  })

  return router;
}