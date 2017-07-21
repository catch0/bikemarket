let express = require('express');
let bp = require('body-parser');
let session = require('express-session');

let app = express();

app.use(express.static(__dirname + '/public/dist'));
app.use(session({
  secret: 'mysecretestsecret',
  resave:false,
  saveUninitialized:true,
  cookie: {}
}))

app.use(bp.json());
app.use(express.static(__dirname + '/public/dist'));

//add this to the server config file to include the mongoose file we jsut created
require('./server/config/mongoose');
//connect with our routes file which is a function that take in app
require('./server/config/routes')(app);

app.listen(6789, function(){
  console.log('listening on port 6789...')
})
