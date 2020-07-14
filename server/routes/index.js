const braintree = require('braintree');
var nodemailer = require('nodemailer');

var gateway = braintree.connect({
    environment: braintree.Environment.Production,
    // Use your own credentials from the sandbox Control Panel here
    merchantId: process.env.BRAINTREE_MERCHANT_ID,
    publicKey: process.env.BRAINTREE_PUBLIC_KEY,
    privateKey: process.env.BRAINTREE_PRIVATE_KEY
});

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.send({"message": 'Server is working fine.'});
    });
    
    app.get('/api/braintree/getToken', async function(req, res) {
        try {
            gateway.clientToken.generate({}, function(err, response) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.send(response);
                }
            });
        } catch (err) {
            res.status(500).send(err);
        }
    });
  
    app.post('/api/braintree/purchase', async function(req, res) {
        try {
            // Use the payment method nonce here
            var nonceFromTheClient = req.body.paymentMethodNonce,
                amount = req.body.amount;
            
            // Create a new transaction for $n
            var newTransaction = gateway.transaction.sale(
                {
                    amount: amount.toFixed(2),  // convert number into currency
                    paymentMethodNonce: nonceFromTheClient,
                    options: {
                        // This option requests the funds from the transaction once it has been
                        // authorized successfully
                        submitForSettlement: true
                    }
                },
                function(error, result) {
                    if (result) {
                        res.send(result);
                    } else {
                        res.status(500).send(error);
                    }
                }
            );
        } catch (err) {
            // Deal with an error
            res.send(err);
        }
    });

    app.post('/api/sendEmail', async function(req, res) {
        try {
            var transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: 'mathew@agmrenovations.com',
                    pass: 'agmrenovationsMm!'
                }
            });
            
            var name = req.body.name,
                email = req.body.email,
                address = req.body.email,
                phone = req.body.phone,
                planname = req.body.planname,
                amount = req.body.amount;
            
            var mailOptions = {
                from: '"AGM" mathew@agmrenovations.com',
                to: email+', lyuba@basementfinishing.ca, tandice@basementfinishing.ca',
                subject: 'AGM Basements',
                html: '<h3>Hello, </h3><p>$'+amount+' has been paid towards '+planname+' by '+name+' at '+address+'</p><br/><p>Thank you, <br />"AGM Team”</p>'
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
};