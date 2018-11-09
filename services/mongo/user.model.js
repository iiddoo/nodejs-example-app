
const mongoose = require('mongoose');

const { Schema } = mongoose;
const userSchema = new Schema(
  {
    name: {
        type: String,
        required: true,
        trim: true
    },
    uid: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        required: true,
        trim: true
    },
  },
  {
    collection: process.env.MONGO_FRIENDS_COLLECTION,
    read: 'nearest',
  },
);
const Friend = mongoose.model('Friend', friendSchema);
module.exports = Friend;
