const express = require('express');
const router = express.Router();
const User = require('../db/models/user')
const Picture = require('../db/models/picture')

router.get('/', (req, res, next) => {
  let everything = {}

  User.findAll()
    .then(users => {
      everything.users = users
      return Picture.findAll()
    })
    .then(pics => {
      everything.pictures = pics
    })
    .then( () => {
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
  Picture.create(req.body)
    .then(newPicture => res.status(201).json(newPicture))
    .catch(next)
})

router.get('/pictures/:pictureId', (req, res, next) => {
  Picture.findById(req.params.pictureId)
    .then(foundPic => res.json(foundPic))
    .catch(next)
})

module.exports = router;
