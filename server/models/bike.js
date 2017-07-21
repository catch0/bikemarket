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
  }
})
