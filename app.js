const express = require('express');
const app = express();
const bodyParser = require('body-parser')


app.use(bodyParser.json());
//app.use(express.urlencoded({ extended: false }));


const postRoute = require('./routes/post');

app.use(postRoute);


app.listen(6000, () => {
  console.log('listening on port 6000')
})