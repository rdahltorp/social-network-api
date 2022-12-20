const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

// Get all users OR add a user
router.route('/')
    .get(getUsers)
    .post(createUser);

// Get a single user OR update a user OR delete a user
//May need to change the ':_id' address
router.route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

// Add friend to user's friend's list OR Remove friend to user's friend's
//May need to change the ':_id' & 'friendId' address
// router.route('/:userId/friends/:friendId')
//     .post(addFriend)
//     .delete(deleteFriend);

module.exports = router;
