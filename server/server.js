// Add variables from dotenv into process.env vars
require('dotenv').config();

var nodemailer = require('nodemailer');
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

const morgan = require('morgan');
const app = express();
const cors = require('cors');

// Routes Setup
const routes = require('./routes');

const morganFormat = process.env.NODE_ENV === 'production' ? 'combined' : 'dev';
app.use(morgan(morganFormat));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/api/submitWarrantyIssue', upload.any(), async function(req, res) {
    try {
        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'mathew@agmrenovations.com',
                pass: 'agmrenovationsMm!'
            }
        });
        
        var name = req.body.first_name+' '+req.body.last_name,
            mobile_number = req.body.mobile_number,
            email_address = req.body.email_address,
            street_address = req.body.street_address,
            street_address_line_two = req.body.street_address_line_two,
            city = req.body.city,
            state_province_region = req.body.state_province_region,
            postal_code = req.body.postal_code,
            type_of_issue = req.body.type_of_issue,
            description = req.body.description;
        
        var all_files = [];
        req.files.map((file) => {
            all_files.push({
                filename: file.originalname,
                content: new Buffer(file.buffer, 'utf-8')
            })
        });
        
        var mailOptions = {
            from: '"AGM" mathew@agmrenovations.com',
            to: 'developer@speer.io, lyuba@basementfinishing.ca, tandice@basementfinishing.ca, sean@basementfinishing.ca',
            subject: 'Warranty Issue',
            html: '<h3>Hello, </h3><p>Name: '+name+'</p><p>Mobile Number: '+mobile_number+'</p><p>Email Address: '+email_address+'</p><p>Street Address: '+street_address+'</p><p>Street Address Line 2: '+street_address_line_two+'</p><p>City: '+city+'</p><p>State / Province / Region: '+state_province_region+'</p><p>Postal / Zip Code: '+postal_code+'</p><p>Type of issue: '+type_of_issue+'</p><p>Description: '+description+'</p><br/><p>Thank you</p>',
            attachments: all_files
        };
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                res.status(500).send({"success": false});
            } else {
                res.send({"success": true});
            }
        });
    } catch (err) {
        // Deal with an error
        res.send({"success": false});
    }
});

// Add routes after setting up middleware
routes(app);

const port = process.env.NODE_ENV == 'production' ? 80 : 8080;
const server = http.createServer(app);
server.listen(port);
console.log('Express server is running on:'+port)