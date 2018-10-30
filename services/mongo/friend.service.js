
const Friend = require('./friend.model');

const getFriends = (req, res) => {
  Friend.find({})
    .then(friends => res.status(200).json(friends))
    .catch(error => res.status(500).send(error));
};

const postFriend = (req, res) => {
  const originalFriend = {
    name: req.body.name,
    description: req.body.description,
  };
  originalFriend.id = `Friend${originalFriend.name}`;
  const friend = new Friend(originalFriend);
  friend.save(error => {
    if (checkServerError(res, error)) return;
    res.status(201).json(friend);
    console.log('Friend created successfully!');
  });
};

const putFriend = (req, res) => {
  const updatedFriend = {
    id: req.body.id,
    name: req.body.name,
    description: req.body.description,
  };

  Friend.findOneAndUpdate(
    { id: updatedFriend.id },
    { $set: updatedFriend },
    { upsert: true, new: true },
    (error, doc) => {
      if (checkServerError(res, error)) return;
      res.status(200).json(doc);
      console.log('Friend updated successfully!');
    },
  );
};

const deleteFriend = (req, res) => {
  const id = req.body.id;
  Friend.findOneAndRemove({ id })
    .then(friend => {
      if (!checkFound(res, friend)) return;
      res.status(200).json(friend);
      console.log('Friend deleted successfully!');
    })
    .catch(error => checkServerError(res, error));
};

const checkServerError = (res, error) => {
  if (error) {
    res.status(500).send(error);
    return error;
  }
  return false;
};

const checkFound = (res, friend) => {
  if (!friend) {
    res.status(404).send('Friend not found.');
    return false;
  }
  return friend;
};


module.exports = {
  getFriends,
  postFriend,
  putFriend,
  deleteFriend,
};
