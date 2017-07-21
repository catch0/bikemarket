let mongoose = require('mongoose');
let User = mongoose.model('User');
let bcrypt = require('bcrypt');


module.exports = {
  session: function(req,res){
    if(req.session.user_id){
      return res.json({
        status:true,
        user_id:req.session.user_id
      })
    }
    return res.json({status:false})
  },
  index: function(req,res){
    User.find({}, function(err,users){
      if(err){
        return res.json
      }
    })
  },
  //makin sure the data we send is ready for the database we will either error out or create a new user
  create: function(req, res){
    User.create(req.body, function(err,user){
      if(err){
        return res.json(err);
      }
      req.session.user_id = user._id;
      return res.json(user);
    })
  },
  show: function(req,res){
    User.findById(req.params.id, function(err,user){
      if(err){
        return res.json(err);
      }
      return res.json(user);
    })
  },
  authenticate: function(req,res){
    User.findOne({email:req.body.email},function(err,user){
      if(err){
        return res.json(err);
      }
      if(user && user.authenticate(req.body.password)){
        req.session.user_id = user._id;
        return res.json(user);
      }
      return res.json({
        errors:{
          login:{
            message:'Invalid Credentials'
          }
        }
      })
    })
  },
  logout: function(req,res){
    if(req.session.user_id){
    delete req.session.user_id
    }
    return res.json({status:true})
  }
}
