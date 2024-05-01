const mongoose = require('mongoose');


// Define schema for the user
const userSchema = new mongoose.Schema({

  username: {
     type: String,
      required: true,
       unique: true 
   },
  email: { 
    type: String,
     required: true, 
     unique: true 
    },
  password: { 
    type: String,
     required: true 
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;