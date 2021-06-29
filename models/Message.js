const mongoose = require('mongoose');


const MessageSchema = mongoose.Schema({
  message: {
    type: String,
    required: true,
    min: (4),
    max: (50)

  }

});


mongoose.connect(process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, () => {
    console.log('conneted to the DB')
  });


module.exports = mongoose.model('messages', MessageSchema);