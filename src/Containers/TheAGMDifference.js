import React, { Component } from "react";
import { Helmet } from "react-helmet";
import TwentyTwenty from "react-twentytwenty";
import Image from "react-image-webp";
import { Link } from "react-router-dom";
import { isWebpSupported } from "react-image-webp/dist/utils";

// Regular Image Formats
import DifferenceAfter from "../Assets/Images/difference-after.jpg";
import Sketch from "../Assets/Images/sketch.png";
import EstablishWantsAndNeeds from "../Assets/Images/establish_wants_and_needs.jpeg";
import InHomeConsultation from "../Assets/Images/in_home_consultation.jpeg";
import DesignCenterAppt from "../Assets/Images/design_center_appt.jpeg";
import PreBuildInspection from "../Assets/Images/pre_build_inspection.jpeg";
import FinishSelection from "../Assets/Images/finish_selection.jpeg";
import TheBuild from "../Assets/Images/the_build.jpeg";
import ProjectCompletion from "../Assets/Images/project_completion.jpg";
import HappyFamilyWithChildren from "../Assets/Images/happy_family_with_children.jpeg";
import Basement1 from "../Assets/Images/basement1.png";
import Basement2 from "../Assets/Images/basement2.png";
import Basement3 from "../Assets/Images/basement3.png";
import Basement4 from "../Assets/Images/basement4.png";
import Basement5 from "../Assets/Images/basement5.png";

// WebP File Versions
import DifferenceAfterWebP from "../Assets/Images/difference-after.webp";
import SketchWebP from "../Assets/Images/sketch.webp";
import EstablishWantsAndNeedsWebP from "../Assets/Images/establish_wants_and_needs.webp";
import InHomeConsultationWebP from "../Assets/Images/in_home_consultation.webp";
import DesignCenterApptWebP from "../Assets/Images/design_center_appt.webp";
import PreBuildInspectionWebP from "../Assets/Images/pre_build_inspection.webp";
import FinishSelectionWebP from "../Assets/Images/finish_selection.webp";
import TheBuildWebP from "../Assets/Images/the_build.webp";
import ProjectCompletionWebP from "../Assets/Images/project_completion.webp";
import HappyFamilyWithChildrenWebP from "../Assets/Images/happy_family_with_children.webp";
import Basement1WebP from "../Assets/Images/basement1.webp";
import Basement2WebP from "../Assets/Images/basement2.webp";
import Basement3WebP from "../Assets/Images/basement3.webp";
import Basement4WebP from "../Assets/Images/basement4.webp";
import Basement5WebP from "../Assets/Images/basement5.webp";

class TheAGMDifference extends Component {
    static propTypes = {};

    state = {};

    render() {
        return (
        <>
            <Helmet>
                <title>AGM Basements | Basement Renovations | AGM Difference</title>
            </Helmet>
            <div className="sticky-nav-top-margin">
                <div className="container agm-difference-container">
                <div id="agm-difference-top">
                    <div className="left">
                    <h1>
                        The AGM
                        <br />
                        <span>Difference</span>
                    </h1>
                    <p>
                        <span>We transform your dreams in reality.</span> AGM
                        Renovations experts provide quality basement finishing services
                        throughout the GTA and the surrounding area.
                    </p>
                    <p>
                        We offer 100% satisfaction guarantee on our workmanship and
                        offer competitive prices with exceptional quality.
                    </p>

                    <Link to="/estimate" className="btn light-blue-btn">
                        Get Started
                    </Link>
                    </div>
                    <div className="right">
                    <TwentyTwenty
                        slider={<div className="before-after-holder" />}
                        left={
                        <img
                            src={
                            isWebpSupported() ? DifferenceAfterWebP : DifferenceAfter
                            }
                            alt="Difference After"
                        />
                        }
                        right={
                        <img
                            src={isWebpSupported() ? SketchWebP : Sketch}
                            alt="Difference Sketch"
                        />
                        }
                    />
                    </div>
                </div>
                </div>

                <section id="large-blue">
                <div className="container agm-difference-wide-container">
                    <div id="difference-below-banner">
                    <div className="inner">
                        <div className="item experience">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm16 400c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v352zm-200.5-96.4l-115-115.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L224 296l99.5-99.5c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17l-115 115.1c-4.8 4.5-12.4 4.5-17.1-.1z" />
                        </svg>{" "}
                        Experience
                        <div className="hover-content">
                            20 years proudly serving the GTA, the industry leader, with
                            hundreds of successful finished basement projects. Your
                            Basement Renovation Professionals.
                        </div>
                        </div>
                        <div className="item quality">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm16 400c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v352zm-200.5-96.4l-115-115.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L224 296l99.5-99.5c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17l-115 115.1c-4.8 4.5-12.4 4.5-17.1-.1z" />
                        </svg>{" "}
                        Quality
                        <div className="hover-content">
                            High quality construction materials, focused on preserving
                            your basement investment. 15 year mold resistant drywall,
                            mold resistant flooring to name a few. Plus an array of
                            premium included finishes for flooring, tile, cabinetry and
                            more. Seasoned tradespeople executing every detail.
                        </div>
                        </div>
                        <div className="item assurance">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm16 400c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v352zm-200.5-96.4l-115-115.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L224 296l99.5-99.5c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17l-115 115.1c-4.8 4.5-12.4 4.5-17.1-.1z" />
                        </svg>{" "}
                        Assurance
                        <div className="hover-content">
                            Active BILD Member and Renomark certified. Transferable 2
                            year warranty on all work and AGM exclusive 15 Year
                            Worry-Free Foundation Warranty on any cracks repaired by our
                            Foundation Specialist. We provide a thorough foundation
                            inspection; if we repair any cracks we provide a 15 yr
                            warranty on the crack and will repair ANY DAMAGE to your
                            basement from ANY future leak or water damage. An
                            unparalleled warranty for unparalleled confidence in your
                            finished project.
                        </div>
                        </div>
                        <div className="item customer-satisfaction">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm16 400c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v352zm-200.5-96.4l-115-115.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L224 296l99.5-99.5c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17l-115 115.1c-4.8 4.5-12.4 4.5-17.1-.1z" />
                        </svg>{" "}
                        Customer Satisfaction
                        <div className="hover-content">
                            Hundreds of satisfied customers have been kind enough to
                            leave their feedback in Google reviews. See for yourself,
                            and compare.
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>

                <section id="process">
                <div className="container">
                    <h2>Our Process</h2>
                    <div className="process-item">
                    <div className="item-image">
                        <Image
                        src={EstablishWantsAndNeeds}
                        webp={EstablishWantsAndNeedsWebP}
                        alt="Establish Your Wants and Needs"
                        />
                    </div>
                    <div className="content">
                        <h3>ESTABLISH YOUR WANTS AND NEEDS</h3>
                        <p>
                        With any successful project, doing your homework upfront
                        guarantees success. Consider how you want to live in your new
                        basement. Will this be a gathering place for family and
                        friends? Perhaps with a bar or entertainment area? Do you want
                        a home theatre, home gym or wine room? A kitchen or guest
                        suite? Are you looking for an income-generating rental
                        apartment? Contact us and we can get started on making your
                        dream a reality.
                        </p>
                    </div>
                    </div>

                    <div className="process-item">
                    <div className="item-image">
                        <Image
                        src={InHomeConsultation}
                        webp={InHomeConsultationWebP}
                        alt="Establish Your Wants and Needs"
                        />
                    </div>
                    <div className="content">
                        <h3>IN-HOME CONSULTATION</h3>
                        <p>
                        A member of our trained Design Team will come to your home, to
                        discuss your needs and create your Wish List of features for
                        your basement. They will assess and measure your space and
                        will provide an estimate on the spot.
                        </p>
                    </div>
                    </div>

                    <div className="process-item">
                    <div className="item-image">
                        <Image
                        src={DesignCenterAppt}
                        webp={DesignCenterApptWebP}
                        alt="Design Centre Appointment"
                        />
                    </div>
                    <div className="content">
                        <h3>DESIGN CENTRE APPOINTMENT</h3>
                        <p>
                        An experienced Designer will present the most creative and
                        most functional 3D concept for your basement, based on your
                        Wish List and our years of experience in optimal basement
                        design. Changes can be made in real-time, so you can fully
                        visualize your basement come to life. They will walk you
                        through an itemized list of our inclusive package of
                        high-quality building materials, and all included features and
                        components. You can browse our well-curated showroom of
                        features and finishes. Once the design is just right, we’ll
                        provide the detailed agreement and payment structure. We also
                        offer budget-friendly financing for you to consider.
                        </p>
                    </div>
                    </div>

                    <div className="process-item">
                    <div className="item-image">
                        <Image
                        src={PreBuildInspection}
                        webp={PreBuildInspectionWebP}
                        alt="Pre-Build Inspection"
                        />
                    </div>
                    <div className="content">
                        <h3>PRE-BUILD INSPECTION</h3>
                        <p>
                        One of our seasoned Project Managers along with a Designer
                        will review your space with the Design Concept, assessing
                        structural, plumbing and mechanical layouts. We’ll capture any
                        necessary adjustments to the design, or changes you have
                        decided on since the Design Centre Appointment. All of this
                        information will be used to create a Final Design that will be
                        the blueprint for the build.
                        </p>
                    </div>
                    </div>

                    <div className="process-item">
                    <div className="item-image">
                        <Image
                        src={FinishSelection}
                        webp={FinishSelectionWebP}
                        alt="Finish Selection"
                        />
                    </div>
                    <div className="content">
                        <h3>FINISH SELECTION</h3>
                        <p>
                        We invite you to our Design Centre to finalize your interior
                        finish selections. Our Designers can guide you through our
                        array of high-quality included finishes and other optional
                        choices to make your basement suit your personal style.
                        </p>
                    </div>
                    </div>

                    <div className="process-item">
                    <div className="item-image">
                        <Image src={TheBuild} webp={TheBuildWebP} alt="The Build" />
                    </div>
                    <div className="content">
                        <h3>THE BUILD</h3>
                        <p>
                        Your dedicated Project Manager is all set to go! We order all
                        of the required materials for your project and will have them
                        delivered. We do ask that you provide space in part of your
                        garage to keep these materials clean and safe. Alternately,
                        you can elect to have a storage container delivered for the
                        materials. You’ll receive regular updates from our CC team and
                        your dedicated PM during the course of the build.
                        </p>
                    </div>
                    </div>

                    <div className="process-item">
                    <div className="item-image">
                        <Image
                        src={ProjectCompletion}
                        webp={ProjectCompletionWebP}
                        alt="Project Completion"
                        />
                    </div>
                    <div className="content">
                        <h3>PROJECT COMPLETION</h3>
                        <p>
                        We make sure you are completely satisfied. Know that with our
                        warranty and commitment to you, we’ll come back to fix any
                        minor imperfections that may arise. Our dedicated team of
                        handymen can address any outstanding items to ensure your
                        project is just perfect. We’re so proud of our work, we love
                        to take photography of your finished project.
                        </p>
                    </div>
                    </div>

                    <div className="process-item">
                    <div className="item-image">
                        <Image
                        src={HappyFamilyWithChildren}
                        webp={HappyFamilyWithChildrenWebP}
                        alt="Satishfied Customers"
                        />
                    </div>
                    <div className="content">
                        <h3>BECOME ONE OF OUR MANY SATISFIED CUSTOMERS</h3>
                        <p>
                        But don’t take our word for it, see our Google Reviews of
                        hundreds of satisfied customers. More in fact, than any of our
                        competitors. We offer you the AGM Difference and would be
                        honored for you to choose us for your basement renovation
                        project.
                        </p>
                    </div>
                    </div>
                </div>
                </section>

                <section id="new-inner-recent-work">
                <div className="container">
                    <div className="section-title">
                    <h2>Recent work</h2>
                    <Link to="/estimate" className="btn dark-blue-btn">
                        Get Started
                    </Link>
                    </div>

                    <div className="section-contents">
                    <div className="row-item top">
                        <div className="recent-work-item">
                        <Link to="/our-work">
                            <Image
                            src={Basement1}
                            webp={Basement1WebP}
                            alt="AGM Basements Recent Work"
                            />
                        </Link>
                        </div>

                        <div className="recent-work-item">
                        <Link to="/our-work">
                            <Image
                            src={Basement2}
                            webp={Basement2WebP}
                            className="second-top"
                            alt="AGM Basements Recent Work"
                            />
                        </Link>
                        </div>
                    </div>

                    <div className="row-item bottom">
                        <div className="left">
                        <Link to="/our-work">
                            <Image
                            src={Basement3}
                            webp={Basement3WebP}
                            alt="AGM Basements Recent Work"
                            />
                        </Link>
                        </div>
                        <div className="right">
                        <Link to="/our-work">
                            <Image
                            src={Basement4}
                            webp={Basement4WebP}
                            alt="AGM Basements Recent Work"
                            />
                        </Link>
                        <Link to="/our-work">
                            <Image
                            src={Basement5}
                            webp={Basement5WebP}
                            alt="AGM Basements Recent Work"
                            />
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            </div>
        </>
        );
    }
}

export default TheAGMDifference;
