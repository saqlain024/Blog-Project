const mongoose = require('mongoose');

const friendshipSchema = new mongoose.Schema({
    //the user who sent this request
    from_user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    //the user who received this request, naming is just to understand otherwise, user won't see any diffrence
    to_user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},{
    timestamps:true
});


const Friendship  = mongoose.model('Friendship' , friendshipSchema);
module.exports = Friendship;
