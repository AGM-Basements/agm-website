import React, { Component, Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import GeneralBanner from '../Common/BannerParts/GeneralBanner';

import CustomerInfo from './WarrantySteps/CustomerInfo';
import UploadFiles from './WarrantySteps/UploadFiles';
import Issues from './WarrantySteps/Issues';

class Warranty extends Component {
    static propTypes = {
    };

    state = {
        step: 1,
        loading: false,
        data: {}
    };

    submitWarrantyIssue = async (data) => {
        const formData = new FormData();
        formData.append('first_name', data.first_name);
        formData.append('last_name', data.last_name);
        formData.append('mobile_number', data.mobile_number);
        formData.append('email_address', data.email_address);
        formData.append('street_address', data.street_address);
        formData.append('street_address_line_two', data.street_address_line_two);
        formData.append('city', data.city);
        formData.append('state_province_region', data.state_province_region);
        formData.append('postal_code', data.postal_code);
        formData.append('type_of_issue', data.type_of_issue);
        formData.append('description', data.description);

        data.warrany_files.map(file => {
            formData.append('warranty_files', file)
        });
        data.issue_files.map(file => {
            formData.append('warranty_files', file)
        });

        const requestOptions = {
            method: 'POST',
            body: formData
        };
        
        const response = await fetch(`https://braintreeagm.afuntestenvironment.dev/api/submitWarrantyIssue`, requestOptions);
        try {
            const res = await response.json(); // If returned as JSON string
            if(res.success !== false){
                this.setState({loading: false, data: {}, step: 1})
            } else {
                this.setState({loading: false});
            }
        } catch(e) {
            this.setState({loading: false});
        }
    };

    stepComplete = (v) => {
        const {step, data} = this.state;
        if(step === 1) {
            this.setState({
                data: v
            }, () => {
                this.setState({ step: 2 });
            });
        } else if (step === 2) {
            data.warrany_files = v;
            this.setState({
                data: data
            }, () => {
                this.setState({ step: 3 });
            });
        } else if (step === 3) {
            data.type_of_issue = v.type_of_issue;
            data.description = v.description;
            data.issue_files = v.files;
            this.setState({
                data: data,
                loading: true
            }, () => {
                this.submitWarrantyIssue(data)
            });
        }
    }

    render() {
        const {step} = this.state;
        return (
            <>
            <Helmet>
                <title>AGM Basements | Basement Renovations | Warranty</title>
                <meta name="description" content="AGM Basements has a 4.5-star rating with over 200 Google Reviews as GTA’s top-rated basement renovations we provide 100% customer satisfaction." />
            </Helmet>
            <GeneralBanner title="Warranty" />
            <div id="form-steps">
                <div className={"step customer_info "+(step === 1 ? 'current' : '')}>
                    <div className="count">1</div>
                    <p>Your Info</p>
                </div>

                <div className={"step warranty_info "+(step === 2 ? 'current' : '')}>
                    <div className="count">2</div>
                    <p>Warranty Info</p>
                </div>

                <div className={"step issue_info "+(step === 3 ? 'current' : '')}>
                    <div className="count">3</div>
                    <p>Issue</p>
                </div>
            </div>
            {/* <!-- end steps --> */}

            <div id="form">
                <div className="container">
                    <form action="/" id="warranty-form" className="dropzone">
                        <div className="step1">
                            {this.state.step === 1 && <CustomerInfo stepComplete={(data) => this.stepComplete(data)} />}
                        </div>

                        <div className="step2">
                            {this.state.step === 2 && <UploadFiles stepComplete={(data) => this.stepComplete(data)} />}
                        </div>

                        <div className="step3">
                            {this.state.step === 3 && <Issues stepComplete={(data) => this.stepComplete(data)} loading={this.state.loading} />}
                        </div>
                    </form>
                </div>
            </div>
            </>
        );
    }
}

export default Warranty;