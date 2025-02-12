const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: [true, 'Silahkan isikan nama']
  },
  email: {
    type: String,
    required: [true, 'Email harus diisi'],
    unique: true
  }
});

module.exports = mongoose.model('User', UserSchema);
