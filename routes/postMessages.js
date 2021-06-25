const express = require('express');
const router = express.Router();
const Message = require('../models/Message')


router.post('/message', (req, res) => {
  const message = new Message({
    message: req.body.message
  });

  message.save(error => {
    if (error) {
      res.status(404).send('Message not found!!')
    } else {
      res.status(200).json(message)
    };
  });

});

module.exports = router
