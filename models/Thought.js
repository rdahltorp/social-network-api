const { Schema, model } = require('mongoose');
const userSchema = require('./User')
const reactionSchema = require('./Reaction')

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            max_length: 280,
            min_length: 1,
        }, 
        createdAt: {
            type: Date, 
            default: Date.now,
            //Need a getter methgod to format the timestamp on query
        },
        username: {
            //Need to link this to the user that made the thought. 
        },
        reactions: [reactionSchema]
    }
)

const Thought = model('thought', thoughtSchema)

module.export = Thought