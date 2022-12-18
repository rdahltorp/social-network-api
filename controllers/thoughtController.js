const { Thought, User } = require('../models')

module.exports = {
    //Get all thoughts
    getThoughts(req, res) {
        Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err))
    },
    //Get a single thought
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v')
        .then((thought) => 
            !thought
                ? res.status(404).json({ message: "No thought found with that ID" })
                : res.json(thought)
        )
        .catch((err) => res.status(500).json(err))
    },
    //Create a new thought - need to add code that pushes to a specific user's array of thoughts.
    createThought(req, res) {
        Thought.create(req.body)
        .then((thought) => res.json(thought)) //need to push this to the user's thought array
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },
    //Update a thought
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
        .then((thought) => 
            !thought
                ?res.status(404).json({ message: 'No thought found with that ID' })
                : res.json(thought)
        )
        .catch((err) => res.status(500).json(err))
    },
    //Remove a thought
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
        .then((thought) => 
            !thought
                ? res.status(404).json({ message: 'No thought found with that ID' })
                : User.findOneAndUpdate(
                    { thoughts: req.params.thoughtId },
                    { $pull: { thoughts: req.params.thoughtId } },
                    { new: true }
                )
        )
        .then((user) => 
            !user
                ? res.status(404).json({ message: "Thought deleted but no user found" })
                : res.json({ message: 'Thought succeffully deleted!' })
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
    },
    addReaction(req, res) {
        //Need to add code
    },
    deleteReaction(req, res) {
        //Need to add code
    }
}
