
const User = require('./user.model');

const login = (req, res) => {
  const user = {
    name: req.body.user.name,
    uid: req.body.user.uid,
    admin: req.body.user.admin
  };
  User.findOneAndUpdate(
    { uid: user.uid },
    { $set: user },
    { upsert: true, new: true },
    (error, doc) => {
      if (checkServerError(res, error)) return;
      res.status(200).json(doc);
      console.log('User logged-in successfully!');
    },
  );
};

const checkServerError = (res, error) => {
  if (error) {
    res.status(500).send(error);
    return error;
  }
  return false;
};

module.exports = { login };
