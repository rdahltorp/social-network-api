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
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
)

//Virtual to pull number of reactions in the thought's "reactions" array. 
thoughtSchema
    .virtual('reactionCount')
    .get(function () {
        return this.reactions.length
    });

const Thought = model('thought', thoughtSchema)

module.exports = Thought