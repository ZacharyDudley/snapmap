const express = require('express');
const router = express.Router();
const Picture = require('../db/models/picture')

router.get('/', (req, res, next) => {
  Picture.findAll()
    .then(pics => res.json(pics))
    .catch(next)
})

router.post('/', (req, res, next) => {
  console.log(req.body)
  Picture.create(req.body)
    .then(newPicture => res.status(201).json(newPicture))
    .catch(next)
})

router.get('/:pictureId', (req, res, next) => {
  Picture.findById(req.params.pictureId)
    .then(foundPic => res.json(foundPic))
    .catch(next)
})

module.exports = router;
