var mongoose = require('mongoose');  
var userSchema = new mongoose.Schema({  
   user_id : {type: Number, required: true , unique : true},
  fullname: {type: String, required: true },
  address : String ,
  city : String ,
  pincode : String , 
  email_address : String ,
  mobile_number : String ,
  user_name : String , 
  password : String ,
  role_id : Number ,
    is_added : Boolean ,
  is_modified : Boolean , 
  is_deleted : Boolean ,
  created_by : Number , 
  created_date :  { type: Date, default: Date.now } , 
  updated_by : Number , 
  updated_date :  { type: Date, default: Date.now } 
 
});
mongoose.model('User', userSchema);