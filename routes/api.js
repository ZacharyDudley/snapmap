const express = require('express');
const router = express.Router();
const User = require('../db/models/user')
const Picture = require('../db/models/picture')
const Message = require('../db/models/message')

router.get('/', (req, res, next) => {

  let everything = {}

  User.findAll()
    .then(users => {
      everything.users = users
      return Picture.findAll()
    })
    .then(pics => {
      everything.pictures = pics
      return Message.findAll()
    })
    .then(messages => {
      everything.messages = messages
      res.json(everything)
    })
    .catch(next)
})

router.get('/users', (req, res, next) => {
  User.findAll()
    .then(users => res.json(users))
    .catch(next)
})

router.post('/users', (req, res, next) => {
  User.create(req.body)
    .then(newUser => res.status(201).json(newUser))
    .catch(next)
})

router.get('/users/:userId', (req, res, next) => {
  User.findById(req.params.userId)
    .then(foundUser => res.json(foundUser))
    .catch(next)
})

router.get('/pictures', (req, res, next) => {
  Picture.findAll()
    .then(pics => res.json(pics))
    .catch(next)
})

router.post('/pictures', (req, res, next) => {
  console.log(req.body)
  Picture.create(req.body)
    .then(newPicture => res.status(201).json(newPicture))
    .catch(next)
})

router.get('/pictures/:pictureId', (req, res, next) => {
  Picture.findById(req.params.pictureId)
    .then(foundPic => res.json(foundPic))
    .catch(next)
})

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
