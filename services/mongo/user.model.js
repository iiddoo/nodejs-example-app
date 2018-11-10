
const mongoose = require('mongoose');

const { usersCollection } = require('./config');

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
        trim: true,
        unique: true
    },
    admin: {
        type: Boolean,
        required: true,
        default: false
    },
    lastLogin: {
      type: Date,
      required: true,
      default: new Date()
    }
  },
  {
    collection: usersCollection,
    read: 'nearest',
  },
);

userSchema.pre('save', next => {
  const user = this;
  user.lastLogin = new Date();
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
