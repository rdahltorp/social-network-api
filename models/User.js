const { Schema, model } = require('mongoose')
const thoughtSchema = require('./Thought')

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            //Need to add in email validation here. 
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'user'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

//Virtual to pull number of friends in the user's "friends" array. 
userSchema
    .virtual('friendCount')
    .get(function () {
        return this.friends.length
    });

const User = model('user', userSchema);

module.exports = User;