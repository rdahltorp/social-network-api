const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction')

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxLength: 280,
            minLength: 1,
        }, 
        createdAt: {
            type: Date, 
            default: Date.now,
            //Need a getter method to format the timestamp on query
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema]
    }
)

const Thought = model('thought', thoughtSchema)

module.exports = Thought