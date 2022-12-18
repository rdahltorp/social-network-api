const { User, Thought } = require('../models')

module.exports = {
    //Get all users
    getUsers(req, res) {
        User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err))
    },
    //Get a single user
    getSingleUser(req, res){
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .then((user) => 
                !user
                    ? res.status(404).json({ message: 'No user found with that ID' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err))
    },
    //Add a new user
    createUser(req, res){
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },
    //Update existing user
    updateUser(req, res){
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
        .then((user) => 
            !user
                ? res.status(404).json({ message: 'No user found with that ID' })
                : res.json(user)
        )
        .catch((err) => res.status(500).json(err))
    },
    //Remove user + remove the user's thoughts
    deleteUser(req, res){
        User.findOneAndDelete({ _id: req.params.userId })
            .then((user) => 
                !user
                    ? req.status(404).json({ message: 'No user found with that ID' })
                    : Thought.deleteMany({ _id: { $in: user.thoughts } })
            )
            .then(() => res.json({ message: "User and User's thoughts deleted!" }))
            .catch((err) => res.status(500).json(err));
    },
    //Add user to user's friends list
    addFriend(req, res){
        //Need to add code
    },
    //Remove user from user's friends list
    deleteFriend(req, res){
        //Need to add code
    },
}