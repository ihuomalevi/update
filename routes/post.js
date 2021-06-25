const express = require('express');
const router = express.Router();
require('../models/Post')


router.post('/', (req, res) => {
  const { title } = req.body
  if (title) {
    return res.status(200).send(title)

  }
  res.status(401).send('Please provide a title')

})


module.exports = router
