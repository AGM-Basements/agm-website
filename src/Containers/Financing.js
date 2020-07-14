import React, { Component } from "react";
import { Helmet } from "react-helmet";
import GeneralBanner from "../Common/BannerParts/GeneralBanner";
import { Link } from "react-router-dom";

class Financing extends Component {
    static propTypes = {};

    state = {};

    render() {
        return (
        <>
            <Helmet>
                <title>AGM Basements | Financing Info and FAQ</title>
            </Helmet>
            <GeneralBanner title="Financing Info and FAQ" />
            <div className="sticky-nav-top-margin">
                <div className="finished">
                <div className="container">
                    <p>
                    <strong>PROJECT FINANCING PROCESS AND FAQ’s</strong>
                    </p>
                    <p>
                    The financing for the Home Renovation Project is performed through
                    our financial partner <strong><Link className={'blue'} to="/financeit">Financeit.</Link></strong>
                    </p>
                    <p>
                    <strong>This is the process to be followed:</strong>
                    </p>
                    <ol>
                    <li>
                        Please fill in the Financeit Application Form by clicking{" "}
                        <Link to="/financeit">here</Link>.{" "}
                        <em>
                        <em>
                            <strong>
                            Please remember that your credit application can only be
                            reviewed if submitted within not more than 24 hours of
                            signing the agreement.
                            </strong>
                        </em>
                        </em>
                        &nbsp;
                    </li>
                    </ol>
                    <ol start="2">
                    <li>
                        Once the Application Form is submitted, you will receive an
                        email from <strong>Financeit</strong> where it will be indicated
                        if the loan has been approved or not.
                    </li>
                    </ol>
                    <ol start="3">
                    <li>
                        If approved, you will see the details of the loan; the amount
                        approved, the monthly installment, term of the loan,
                        amortization period, etc.
                    </li>
                    </ol>
                    <ol start="4">
                    <li>
                        If the loan is not approved, only <strong>Financeit </strong>
                        will know the reasoning behind the decision made. Feel free to
                        contact them for any inquiries regarding the reasoning for not
                        approving the credit application.
                    </li>
                    </ol>
                </div>
                </div>
                <div className="finished">
                <div className="container">
                    <p>
                    <strong>FAQ’s:</strong>
                    </p>
                    <p>
                    <strong>1. What type of loan will be granted to me?</strong>
                    </p>
                    <p>
                    The loan granted is a <strong>HOME RENOVATION LOAN</strong>. Only
                    the registered homeowner on the title of the property can apply
                    for this loan.
                    </p>
                    <p>
                    *** There will be a HOV – Home Ownership Verification task to be
                    fulfilled by <strong>Financeit.</strong>
                    </p>
                    <p>
                    <strong>2. Will a coborrower be required?</strong>
                    </p>
                    <p>
                    In the event that you are not eligible for the full amount
                    requested, a coborrower may be added. This person does not have to
                    be registered in the title of the property.
                    </p>
                    <p>
                    <strong>3. What type of documentation is required?</strong>
                    </p>
                    <p>
                    Proof of income (last pay slip or latest T4) is required by both,
                    the principal applicant and the coborrower if this is the case.
                    </p>
                    <p>
                    <strong>4. Where is the documentation to be sent?</strong>
                    </p>
                    <p>
                    The mentioned documental evidence is to be loaded within the
                    Financeit Application; this is the link that you receive via email
                    once you have filled in the form for the Loan Application.
                    </p>
                    <p>
                    <strong>
                        5. Is it possible to pay off the loan at any moment?
                    </strong>
                    </p>
                    <p>
                    Yes, the Home Renovation Loan via <strong>Financeit</strong> is an
                    open loan. This means it may be paid off at any point in time and
                    this decision will not come attached with any type of penalties.
                    </p>
                    <p>
                    <strong>6. How will AGM Basements receive the payments?</strong>
                    </p>
                    <p>
                    The payments for the Basement Renovation Project will be addressed
                    from Financeit to AGM Basements throughout the execution of the
                    project.
                    </p>
                    <p>
                    <strong>7. When will I begin to pay my loan?</strong>
                    </p>
                    <p>
                    Once the project has been completed, then your relationship and
                    your payments with <strong>Financeit </strong>will begin. You are
                    to pay a monthly installment of xxx depending on the amount of the
                    loan and the amortization period.
                    </p>
                    <p>
                    <strong>8. Will there be any additional fees?</strong>
                    </p>
                    <p>
                    This Home Renovation Loan comes with a 3.25% fee that will be
                    deducted upon each one of the three funded amounts addressed to
                    cover your project.
                    </p>
                    <p>
                    Any further questions, please reach out to Tosan Awani – Financeit
                    Partner. Phone: (416)-433-5887.
                    </p>
                </div>
                </div>
            </div>
        </>
        );
    }
}

export default Financing;
