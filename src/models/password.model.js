const mongoose = require('mongoose');

const passwordSchema = new mongoose.Schema({
  name: { type: String, required: true },
  website: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
},{ timestamps: true });

const Password = mongoose.model('Password', passwordSchema);

module.exports = Password;
