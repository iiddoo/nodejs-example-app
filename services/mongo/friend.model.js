
const mongoose = require('mongoose');

const { Schema } = mongoose;
const friendSchema = new Schema(
  {
    id: String,
    name: String,
    description: String,
  },
  {
    collection: 'friends',
    read: 'nearest',
  },
);
const Friend = mongoose.model('Friend', friendSchema);
module.exports = Friend;
