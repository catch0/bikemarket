let mongoose = require('mongoose');
let bcrypt = require('bcrypt');

let UserSchema = new mongoose.Schema({
  name:{
    type: String,
    required: [true,'Name cannot be blank ya jerk!']
  },
  email:{
    type:String,
    required: [true, 'I need an email sir/maam!'],
    unique: [true, 'Good news, you have already registerd']
  },
  password:{
    type:String,
    required: [true, 'Password Cannot be blank']

  },
  bikes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bike'
  }]
}, {timestamps: true});

UserSchema.pre('save', function(next){
  this.password = bcrypt.hashSynch(this.password, bcrypt.genSalt(10));
  next();
})

UserSchema.methods.authenticate=function(password){
  return bcrypt.compareSynch(password, this.password);
}

//now lets register that Schema
mongoose.model('User', UserSchema);
