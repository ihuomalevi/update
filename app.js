const express = require('express');
const app = express();
const bodyParser = require('body-parser')
require('dotenv/config')



app.use(bodyParser.json());
//app.use(express.urlencoded({ extended: false }));


const postRoute = require('./routes/postMessages');

app.use(postRoute);



const PORT = process.env.PORT || 6000

app.listen(PORT, () => {
  console.log('listening on port 6000')
})