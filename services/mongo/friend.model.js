
const mongoose = require('mongoose');

const { friendsCollection } = require('./config');

const { Schema } = mongoose;
const friendSchema = new Schema(
  {
    id: {
      type: String
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
  },
  {
    collection: friendsCollection,
    read: 'nearest',
  },
);
const Friend = mongoose.model('Friend', friendSchema);

module.exports = Friend;
