const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'      // refer to schema User
    },
     //include the array of ids of all comments in this postSchema itself
     comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Like'
        }
    ] 
},
    {
        timestamps: true            //it added two fields in robo3T and these are 'created at', 'updated at'
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post ;