console.log('Loading function');

const https = require ('https');
const url = require('url');

const WEB_HOOK_URL = process.env.WEB_HOOK_URL;
const TEXT = process.env.TEXT;

const PAYLOAD = {
    "text": TEXT
};

exports.handler = (event, context, callback) => {
    const parser = url.parse(WEB_HOOK_URL);

    let options = {
        host : parser.host,
        port : 443,
        path : parser.path,
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        }
    };

    let req = https.request(options, (res) => {
        if (res.statusCode === 200) {
            console.log('posted to slack');
        } else {
            console.log('status code: ' + res.statusCode);
        }
    });

    req.on('error', (e) => {
    	console.log('problem with request: ' + e.message);
    });

    req.write(JSON.stringify(PAYLOAD)); 

    req.end();
};
