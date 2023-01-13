const { Schema, model } = require('mongoose');
const User = require('./User');


const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
      },
    username: [
        {
            type: Schema.Types.ObjectId,
            ref: 'thoughts',
          }
    ],
    reactions: {
        reactionId: {},
        reactionBody: {},
        username: {},
        createdAt: {
            type: Date,
            default: Date.now,
          },
    }
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);


thoughtSchema.virtual('friendCount').get(function () {
    return this.friends.length
})

const Thought = model('thought', thoughtSchema)

module.exports = Thought;
