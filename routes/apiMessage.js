const express = require('express');
const router = express.Router();
const Message = require('../db/models/message')

router.get('/messages', (req, res, next) => {
  Message.findAll()
    .then(messages => res.json(messages))
    .catch(next)
})

router.post('/messages', (req, res, next) => {
  Message.create(req.body)
    .then(newMessage => res.status(201).json(newMessage))
    .catch(next)
})

router.get('/messages/:messageId', (req, res, next) => {
  Message.findById(req.params.messageId)
    .then(foundMessage => res.json(foundMessage))
    .catch(next)
})

module.exports = router;
