let mongoose = require('mongoose');
let Bike = mongoose.model('Bike');

module.exports = {
  index: function(req,res){
    Bike: find({}, function(err,bikes){
      if(err){
        return res.json(err);
      }
      return res.json(bikes);
    })
  },
  create: function(res,req){
    Bike.create(req.body, function(err,bike){
      if(err){
        return res.json(err);
      }
      User.findByIdAndUpdate(req.body.user,{$push:{bikes:bike._id}}, {new:true}, function(err,user){
        if(err){
          return res.json(err);
        }
        return res.json(bike)
      })
    })
  },
  update: function(res,req){
    Bike.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true},function(err, Bike){
      if(err){
        return res.json(err);
      }
      return res.json(bike);
    })
  },
  destroy: function(res,req){
    Bike.findByIdAndRemove(req.params.id, function(err,bike){
      if(err){
        return res.json(err);
      }
      return res.json(bike);
    })

  }
}
