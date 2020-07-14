import React, { Component, Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import GeneralBanner from '../Common/BannerParts/GeneralBanner';
import BraintreeComponent from './Braintree';
import Modal from 'react-modal';

const customStyles = {
    content : {
        borderRadius          : '20px',
        backgroundColor       : '#00aede',
        width                 : '40%',
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

class PaymentReceipt extends Component {
    static propTypes = {
    };

    state = {
        amount: 150,
        planname: 'DCA Charge',
        isPaymentSucceedModal: false,
        isPaymentSucceed: false,
        name: '',
        address: '',
        email: '',
        phone: '',
        transaction: ''
    };
    
    componentWillMount() {
        let routeName = window.location.pathname,
            amt = 150;
        if(routeName === "/payment-receipt-150"){
            amt = 150;
        } else if(routeName === "/payment-receipt-250"){
            amt = 250;
        } else if(routeName === "/payment-receipt-350"){
            amt = 350;
        }
        this.setState({amount: amt});
    }

    paymentSucceed(data) {
        this.setState({isPaymentSucceed: true, transaction: data, isPaymentSucceedModal: true});
    }

    toggleModal = () => {
        this.setState(state => ({ isPaymentSucceedModal: !state.isPaymentSucceedModal }));
    };

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

    render() {
        const {name, email, transaction, address, phone, amount, planname, isPaymentSucceed, isPaymentSucceedModal} = this.state;
        
        var transactionHTML = <div className='card-value'>NA</div>;
        if(transaction && transaction.id) {
            transactionHTML = <div className='card-value'>
                <img src={transaction.creditCard.imageUrl} alt={transaction.creditCard.cardType} />
                {transaction.creditCard.cardType}
            </div>;
        }
        return (
            <>
            <Helmet>
                <title>AGM Basements | Basement Renovations | Payment</title>
                <meta name="description" content="AGM Basements has a 4.5-star rating with over 200 Google Reviews as GTA’s top-rated basement renovations we provide 100% customer satisfaction." />
            </Helmet>
            <GeneralBanner title="Payment Receipt" />
            
            <div id="payment-receipt-container" className="container">
                {
                    isPaymentSucceed ? null : 
                        <div className="row align-items-start">
                            <div className="col-lg-3" />
                            <div className="col-lg-6 payment-container">
                                <div id="card-styles" className="container">
                                    <p className="card-title card-data">Client Information:</p>
                                    <p className="card-data payment-reciept">
                                        <input ref={input => {
                                            this['name'] = input;
                                        }} type='text' className="hosted-field" placeholder="Full Name" onChange={(e) => {
                                            this.setState({name: e.target.value});
                                        }} />
                                        <input ref={input => {
                                            this['email'] = input;
                                        }} type='email' className="hosted-field" placeholder="email@emailaddress.com" onChange={(e) => {
                                            this.setState({email: e.target.value});
                                        }} />
                                        <input ref={input => {
                                            this['address'] = input;
                                        }} type='text' className="hosted-field" placeholder="Address, City, State, Postal Code" onChange={(e) => {
                                            this.setState({address: e.target.value});
                                        }} />
                                        <input ref={input => {
                                            this['phone'] = input;
                                        }} type='phone' className="hosted-field" placeholder="416 XXX-XXXX" onChange={(e) => {
                                            this.setState({phone: e.target.value});
                                        }} />
                                    </p>
                            </div>
                        </div>
                        <div className="col-lg-3" />
                    </div>
                }
                <div className="row align-items-start mt-2">
                    <div className="col-lg-12">
                        {
                            isPaymentSucceed ? (
                                <div className="row">
                                    <div className="col-lg-3" />
                                    <div className="col-lg-6">
                                        <div id="card-styles" className="container">
                                            <div className='card-label'>Date Recieved</div>
                                            <div className='card-value'>{this.getTodayDate()}</div>
                                            <div className='clear' />
                                            <div className='card-label'>Payment Method</div>
                                            {transactionHTML}
                                            <div className='clear' />
                                            <div className='card-label'>Cheque/Ref. No.</div>
                                            <div className='card-value'>{transaction && transaction.id}</div>
                                            <div className='clear' />
                                            <div className='card-label'>Cost</div>
                                            <div className='card-value'>${amount.toFixed(2)}</div>
                                            <div className='clear' />
                                        </div>
                                    </div>
                                    <div className="col-lg-3" />
                                </div>
                            ) : <BraintreeComponent name={name} email={email} address={address} phone={phone} amount={amount} planname={planname} paymentSucceed={this.paymentSucceed.bind(this)} />
                        }
                    </div>
                </div>
                <Modal
                    isOpen={isPaymentSucceedModal}
                    onRequestClose={this.toggleModal}
                    style={customStyles}
                    shouldCloseOnOverlayClick={true}>
                    <div className="modal-container">
                        <div>
                            <p>Success! Your payment was completed and an email confirmation has been sent.</p>
                            <div className="action-button" onClick={() => { this.setState({isPaymentSucceedModal: false}) }}>Close</div>
                        </div>
                    </div>
                </Modal>
            </div>
            </>
        );
    }
}

export default PaymentReceipt;
