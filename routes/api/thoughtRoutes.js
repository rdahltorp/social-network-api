const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

// Get all thoughts OR add a thought
router.route('/')
    .get(getThoughts)
    .post(createThought);

// Get a single thought OR update a thought OR delete a Thought
router.route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

// Add a reaction OR remove a reaction
router.route('/:thoughtId/reactions')
    .post(addReaction)

router.route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);

module.exports = router;