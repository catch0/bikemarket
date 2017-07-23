let mongoose = require('mongoose');
let fs = require('fs');

//this overides the promise library
mongoose.Promise = global.Promise;

//lets load in those models and connect to the database
mongoose.connect('mongodb://localhost/bicycle_market',{useMongoClient:true} );
let models_path = __dirname +'./../models';

//lets use the models path we just created to check each file to see if it is a js file
fs.readdirSync(models_path).forEach(function(file){
  if(file.includes('.js')){
    console.log(`loading ${file}..`);
    require(`${models_path}/${file}`);
  }
});
