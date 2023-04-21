const fs = require('fs');
const rfs = require('rotating-file-stream');
const path = require('path');


const logDirectory = path.join(__dirname, '../production_logs');
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

const accessLogStream = rfs.createStream('access.log', {
    interval: '1d',
    path: logDirectory
});


const development = {
    name: 'development',
    asset_path: './assets',
    session_cookie_key: 'blahsomething',
    db: 'codeial_development',
    smtp: {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: '587',
        secure: 'false',
        auth: {
            user: 'saklainhmd@gmail.com',      
            pass: 'ehqifyqwtgibxoka'
        }
    
    },
    google_client_id: "940547004575-o5odqs8vv1prts5a9hg9omfgfvm2bt2t.apps.googleusercontent.com",
    google_client_secret: "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",
    google_call_back_url: "http://localhost:8000/users/auth/google/callback",
    jwt_secret: 'codeial',
    morgan: {
        mode : 'dev',
        options: {stream: accessLogStream }
    }


}


const production = {
    name:  process.env.CODEIAL_ENVIRONMENT,
    asset_path: process.env.CODEIAL_ASSET_PATH,
    session_cookie_key: process.env.CODEIAL_SESSION_COOKIE_KEY,     //website::randomkeygen
    db:  process.env.CODEIAL_DB,  
    smtp: {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: '587',
        secure: 'false',
        auth: {
            user: process.env.CODEIAL_GMAIL_USERNAME,    
            pass: process.env.CODEIAL_GMAIL_PASSWORD
        }
    
    },
    google_client_id: process.env.CODEIAL_GOOGLE_CLIENT_ID,
    google_client_secret: process.env.CODEIAL_GOOGLE_CLIENT_SECRET,
    google_call_back_url: process.env.CODEIAL_GOOGLE_CALL_BACK_URL,
    jwt_secret: process.env.CODEIAL_JWT_SECRET,
    morgan: {
        mode : 'combined',
        options: {stream: accessLogStream }
    }

} 



// module.exports = development;
module.exports = eval(process.env.NODE_ENV) == undefined ? development : eval(process.env.NODE_ENV);
// module.exports = development;
