import React from "react";
import braintree from 'braintree-web';

import CheckoutTick from '../Assets/Images/checout_tick.png';

class BraintreeComponent extends React.Component {
    instance;

    state = {
        clientToken: ''
    };

    async componentDidMount() {
        var me = this;
        try {
            // Get a client token for authorization from your server
            const response = await fetch("https://braintreeagm.afuntestenvironment.dev/api/braintree/getToken");
            const res = await response.json(); // If returned as JSON string

            if(res.clientToken){
                braintree.client.create({
                    authorization: res.clientToken
                }, function(err, clientInstance) {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    me.createHostedFields(clientInstance);
                });
                this.setState({
                    clientToken: res.clientToken
                });
            } else {
                alert('Something went wrong. Please try again after some time. > '+res.name);
            }
        } catch(e) {
            alert('Something went wrong. Please try again after some time.');
        }
    }

    createHostedFields(clientInstance) {
        braintree.hostedFields.create({
            client: clientInstance,
            styles: {
                'input': {
                    'font-size': '1.5rem',
                    'font-family': 'courier, monospace',
                    'font-weight': 'lighter',
                    'color': '#ccc'
                },
                ':focus': {
                    'color': 'black'
                },
                '.valid': {
                    'color': '#8bdda8'
                },
                '.invalid': {
                    'color': '#ff0000'
                }
            },
            fields: {
                number: {
                    selector: '#card-number',
                    placeholder: '4111 1111 1111 1111'
                },
                expirationDate: {
                    selector: '#expiration-date',
                    placeholder: 'MM/YYYY'
                }
            }
        }, (err, hostedFieldsInstance) => {
            this.instance = hostedFieldsInstance;
            hostedFieldsInstance.on('cardTypeChange', function (event) {
                // Change card bg depending on card type
                document.getElementById('card-image').className = '';
                if (event.cards.length === 1) {
                    document.getElementById('card-image').className = event.cards[0].type;
                }
            })
        });
    }

    getTodayDate = () => {
        var today = new Date(),
            dd = today.getDate(),
            mm = today.getMonth()+1,
            yyyy = today.getFullYear();
        if(dd<10) {
            dd='0'+dd;
        } 

        if(mm<10) {
            mm='0'+mm;
        } 
        var today = mm+'/'+dd+'/'+yyyy;
        return today;
    }

    sendInvoice = async () => {
        const {name, email, address, phone, planname, amount} = this.props;

        var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!re.test(email)) {
            alert('You have entered an invalid email address!');
            return false;
        }
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                "name": name,
                "email": email,
                "address": address,
                "phone": phone,
                "planname": planname,
                "amount": amount
            })
        };
        const response = await fetch(`https://braintreeagm.afuntestenvironment.dev/api/sendEmail`, requestOptions);
        try {
            const res = await response.json(); // If returned as JSON string
            if(res.success === false){
                console.log("res", res);
            } else {
                console.log("res", res);
            }
        } catch(e) {
            console.log("e", e);
        }
    }

    buy() {
        const {name, email, address, phone} = this.props;
        if(name === '' || address === '' || phone === ''){
            if(name === '') alert('Name field cannot be blank');
            else if(email === '') alert('Email address field cannot be blank');
            else if(address === '') alert('Address field cannot be blank');
            else if(phone === '') alert('Phone field cannot be blank');
            return false;
        }

        // Send the nonce to your server
        this.instance.tokenize(async (err, payload) => {
            if (err) {
                alert(err.message);
                return;
            }
    
            // This is where you would submit payload.nonce to your server
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "paymentMethodNonce": payload.nonce,
                    "amount": this.props.amount
                })
            };

            try {
                const response = await fetch(`https://braintreeagm.afuntestenvironment.dev/api/braintree/purchase`, requestOptions);
                const res = await response.json(); // If returned as JSON string
                if(res.success !== true){
                    alert('Something went wrong >' + res.message);
                } else {
                    this.sendInvoice();
                    this.props.paymentSucceed(res.transaction);
                }
            } catch(e) {
                alert('Something went wrong. Please try again later.');
            }
        });
    }

    render() {
        if (!this.state.clientToken) {
            return (
                <div>
                    <h1>Loading...</h1>
                </div>
            );
        } else {
            return (
                <div>
                    <div className="row">
                        <div className="col-lg-3" />
                        <div className="col-lg-6">
                            <div id="card-styles" className="container">
                                <p className="card-title card-data">Credit Card Information:</p>
                                <div className='card-label'>Date Recieved:</div>
                                <div className='card-value'>
                                    <input type='text' className="hosted-field" defaultValue={this.getTodayDate()} />
                                </div>
                                <div className='clear' />
                                <div className='card-label'>Payment Method:</div>
                                <div className={'rel'}>
                                    <div id="card-number" className="hosted-field"></div>
                                    <div id="card-image"></div>
                                </div>
                                <div className='clear' />
                                <div className='card-label'>Expiration Date:</div>
                                <div id="expiration-date" className="hosted-field"></div>
                                <div className='clear' />
                                <div className='card-label'>Cheque/Ref. No.</div>
                                <div className='card-value'>0102312434</div>
                                <div className='clear' />
                            </div>
                        </div>
                        <div className="col-lg-3" />
                    </div>
                    <div className="row">
                        <div className="col-lg-6" />
                        <div className="col-lg-3">
                            <div className="mt-3 action-button checkout-btn" onClick={this.buy.bind(this)}>
                                <img src={CheckoutTick} alt='proceed to checkout' />
                                Submit
                            </div>
                        </div>
                        <div className="col-lg-3" />
                    </div>
                </div>
            );
        }
    }
}
export default BraintreeComponent;
