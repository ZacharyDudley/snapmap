const express = require('express');
const router = express.Router();

// const apiRouter = require('./api')
// router.use('/api', apiRouter)

const Users = require('./apiUser')
const Pictures = require('./apiPicture')
const Messages = require('./apiMessage')

const User = require('../db/models/user')
const Picture = require('../db/models/picture')
const Message = require('../db/models/message')

router.get('/api', (req, res, next) => {
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

router.use('/api/users', Users)
router.use('/api/pictures', Pictures)
router.use('/api/messages', Messages)

module.exports = router;
