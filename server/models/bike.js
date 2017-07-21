let mongoose=require('mongoose');
let BikeSchema = new mongoose.Schema({
  title:{
    type:String,
    required:[true,'Please enter a title']
  },
  description:{
    type:String,
    required:[true,'please enter a description'],
    maxlength: [200, 'Description cannot be 200 charachters']
  },
  location:{
    type:String,
    required:[true, 'please enter a location']
  },
  price:{
    type:Number,
    min:[1, 'Price must be at least $1.00']
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {timestamps:true});

mongoose.model('Bike', BikeSchema);
