
const mongoose = require('mongoose');

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
    collection: process.env.MONGO_FRIENDS_COLLECTION,
    read: 'nearest',
  },
);
const Friend = mongoose.model('Friend', friendSchema);
module.exports = Friend;
