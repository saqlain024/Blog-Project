const nodemailer = require('../config/nodemailer');


// newComment = function ...                      //instead of doing this we use anther way as below 
// module.exports = newComment

//this is another way of exporting a method
exports.newComment = (comment) => {                                        //using arrow function here

    let htmlString = nodemailer.renderTemplate({comment: comment}, '/comments/new_comment.ejs'); 

    nodemailer.transporter.sendMail({
        from: 'saklainhmd@gmail.com',
        to: comment.user.email,       
        subject : "New Comment Published!",
        html: htmlString
    }, (err, info) => {
        if(err){
            console.log("Error in sending mail", err);
            return;
        }

        // console.log('Message sent', info);
    });

}