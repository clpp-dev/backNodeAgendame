const mongoose = require('mongoose');

const EventModel = mongoose.model('Events', {
  username: { type: String, required: true, minLength: 3 },
  idUser: { type: String, required: true, minLength: 3 },
  description: { type: String, required: true, minLength: 3 },
  hour: { type: String, required: true },
  date: { type: String, required: true},
  place: { type: String, required: true},
});

module.exports = EventModel;
