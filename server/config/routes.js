//passing this all on to angular routing
let path = require('path');
let Users = require('./../controllers/users');
let Bikes = require('./../controllers/bikes');

//this helps us get access to our app this file is a function that takes  in app
module.exports = function(app){
  app.get('/users', Users.index);
  app.post('/users', Users.create);
  app.get('/users/:id', Users.show);
  app.get('/session', Users.session);
  app.delete('/users/:id', Users.logout);

  app.get('/session', Users.session);
  app.post('/session', Users.authenticate);

  app.get('/bikes', Bikes.index);
  app.post('/bikes', Bikes.create);
  app.patch('/bikes/:id', Bikes.update);
  app.delete('/bikes/:id', Bikes.destroy);

  app.all('*', function(req, res, next){
    res.sendFile(path.resolve('./public/dist/index.html'))
  })


}
