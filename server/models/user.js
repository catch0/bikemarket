let mongoose = require("mongoose");
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
  this.password = bcrypt.hashSynch(this.password, bcrypt.genSalt)
})

//now lets register that Schema
mongoose.model('User', UserSchema);
