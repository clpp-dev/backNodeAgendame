const mongoose = require('mongoose');

const Users = mongoose.model('User', {
  username: { type: String, required: true, minLength: 3 },
  nombre: { type: String, required: true, minLength: 3 },
  apellidos: { type: String, required: true, minLength: 3 },
  edad: Number,
  ocupacion: { type: String, required: true, minLength: 3 },
  email: { type: String, required: true, minLength: 6 },
  password: { type: String, required: true, minLength: 3 },
});

module.exports = Users;
