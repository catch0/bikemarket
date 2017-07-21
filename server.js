let express = require('express');
let bp = require('body-parser');
let session = require('express-session');

let app = express();

app.use(express.static(__dirname + '/public/dist'));
app.use(session({
  secret: 'mysecretestsecret',
  resave:false,
  saveUninitialized:true
}))

//add this to the server config file to include the mongoose file we jsut created
require('./server/config/mongoose');

app.listen(6789, function(){
  console.log('listening on port 6789...')
})
