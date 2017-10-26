const express = require('express');
const router = express.Router();
const User = require('../db/models/user')

router.get('/', (req, res, next) => {
  User.findAll()
    .then(users => res.json(users))
    .catch(next)
})

router.post('/', (req, res, next) => {
  User.create(req.body)
    .then(newUser => res.status(201).json(newUser))
    .catch(next)
})

router.get('/:userId', (req, res, next) => {
  User.findById(req.params.userId)
    .then(foundUser => res.json(foundUser))
    .catch(next)
})

module.exports = router;
