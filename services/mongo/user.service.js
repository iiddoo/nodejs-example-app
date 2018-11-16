
const User = require('./user.model');

const login = user => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await User.findOneAndUpdate(
        { uid: user.uid },
        { $set: user }, 
        { upsert: true, new: true });
      resolve(result._doc);
    } catch (error) {
      reject(error);
    }
  });
};

const getUsers = (req, res) => {
  if (req.user.admin){
    User.find({})
    .then(users => res.status(200).json(users))
    .catch(error => res.status(500).send(error));
  } else {
    res.status(403).send('User is not authorized for this action. ')
  }
};

module.exports = { login ,getUsers };
