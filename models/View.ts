const mongoose = require('mongoose');

const videoHistorySchema = new mongoose.Schema({
  _id: mongoose.ObjectId,
  title: String,
});

const View = mongoose.model('View', videoHistorySchema);

export { View };
