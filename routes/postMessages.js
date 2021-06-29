const express = require('express');
const router = express.Router();
const Message = require('../models/Message')


const Joi = require('@hapi/joi');

const schema = {
  message: Joi.string().min(4).max(50).required()
}

router.post('/message', async (req, res) => {
  const { errors } = new Joi.ValidationError(req.body, schema)
  if (errors) return res.status(400).send(errors.message.message)

  const message = new Message({
    message: req.body.message
  });

  try {
    const savedMessage = await message.save();
    res.json(savedMessage)
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router
