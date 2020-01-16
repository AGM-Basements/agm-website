import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import './Assets/Styles/styles.scss';
import ScrollToTop from './ScrollToTop';
const Header = lazy(() => import('./Common/header'));
const Footer = lazy(() => import('./Common/footer'));
const Estimate = lazy(() => import('./Containers/Estimate'));
const Home = lazy(() => import('./Containers/Home'));
const TheAGMDifference = lazy(() => import('./Containers/TheAGMDifference'));
const OutClients = lazy(() => import('./Containers/OurClients'));
const OurWork = lazy(() => import('./Containers/OurWork'));
const ThankYou = lazy(() => import('./Containers/ThankYou'));
const FinanceIt = lazy(() => import('./Containers/FinanceIt'));
const FinishedBasements = lazy(() => import('./Containers/FinishedBasements'));
const Blog = lazy(() => import('./Containers/Blog'));
const SingleBlog = lazy(() => import('./Containers/SingleBlog'));
const OurTeam = lazy(() => import('./Containers/OurTeam'));
const ContactUs = lazy(() => import('./Containers/ContactUs'));
const Vote = lazy(() => import('./Containers/Vote'));
const EmployeeOfTheMonth = lazy(() => import('./Containers/EmployeeOfTheMonth'));
const TradeOfTheMonth = lazy(() => import('./Containers/TradeOfTheMonth'));
const Realtors = lazy(() => import('./Containers/Realtors'));
const Catalogue = lazy(() => import('./Containers/Catalogue'));
const Financing = lazy(() => import('./Containers/Financing'));
const AboutUs = lazy(() => import('./Containers/AboutUs'));
const AgmBBQ2016 = lazy(() => import('./Containers/AgmBBQ2016'));
const AgmBBQ2017 = lazy(() => import('./Containers/AgmBBQ2017'));
const ChristmasParty2016 = lazy(() => import('./Containers/ChristmasParty2016'));
const AgmOfficeChristmas2016 = lazy(() => import('./Containers/AgmChristmasInOffice'));
const BasementRenovationInBrampton = lazy(() => import('./Containers/BasementRenovationInBrampton'));
const BasementRenovationsInVaughan = lazy(() => import('./Containers/BasementRenovationsInVaughan'));
const BasementRenovationInTheDurhamRegion = lazy(() => import('./Containers/BasementRenovationInTheDurhamRegion'));
const BasementRenovationInRichmondHill = lazy(() => import('./Containers/BasementRenovationInRichmondHill'));
const BasementRenovationsInHamilton = lazy(() => import('./Containers/BasementRenovationsInHamilton'));
const BasementRenovationsInMarkham = lazy(() => import('./Containers/BasementRenovationsInMarkham'));
const BasementRenovationsInMississauga = lazy(() => import('./Containers/BasementRenovationsInMississauga'));
const BasementRenovationsInOakville = lazy(() => import('./Containers/BasementRenovationsInOakville'));
const BasementRenovationsInToronto = lazy(() => import('./Containers/BasementRenovationsInToronto'));
const BasementRenovationServices = lazy(() => import('./Containers/BasementRenovationServices'));
const BasementBathroomRenovation = lazy(() => import('./Containers/BasementBathroomRenovation'));
const BasementApartmentRenovation = lazy(() => import('./Containers/BasementApartmentRenovation'));
const BasementWorkoutRoom = lazy(() => import('./Containers/BasementWorkoutRoom'));
const BasementFamilyRoomRenovation = lazy(() => import('./Containers/BasementFamilyRoomRenovation'));
const BasementSaunasRenovation = lazy(() => import('./Containers/BasementSaunasRenovation'));
const BasementOfficeRenovation = lazy(() => import('./Containers/BasementOfficeRenovation'));
const BasementBedroomRenovation = lazy(() => import('./Containers/BasementBedroomRenovation'));
const BasementInlawSuiteRenovation = lazy(() => import('./Containers/BasementInlawSuiteRenovation'));
const BasementRecRoomRenovation = lazy(() => import('./Containers/BasementRecRoomRenovation'));
const BasementTheaterRoomRenovation = lazy(() => import('./Containers/BasementTheaterRoomRenovation'));
const BasementFireplaceRenovation = lazy(() => import('./Containers/BasementFireplaceRenovation'));
const BasementBarRenovation = lazy(() => import('./Containers/BasementBarRenovation'));
const BasementKitchenRenovation = lazy(() => import('./Containers/BasementKitchenRenovation'));
const CallCenter = lazy(() => import('./Containers/CallCenter'));
const CallCenterBrandon = lazy(() => import('./Containers/BrandonCallCenter'));
const Dordana = lazy(() => import('./Containers/Dordana'));
const Garth = lazy(() => import('./Containers/Garth'));
const Areas = lazy(() => import('./Containers/Areas'));
const Careers = lazy(() => import('./Containers/Careers'));
const WhyUs = lazy(() => import('./Containers/WhyUs'));
const JobPostings = lazy(() => import('./Containers/JobPostings'));
const CustomerServiceAssociate = lazy(() => import('./Containers/CustomerServiceAssociate'));
const DoorToDoor = lazy(() => import('./Containers/DoorToDoor'));
const FieldSaleRepresentative = lazy(() => import('./Containers/FieldSaleRepresentative'));
const FrontDesk = lazy(() => import('./Containers/FrontDesk'));
const IncomingCallToCRM = lazy(() => import('./Containers/IncomingCallToCRM'));
const InteriorFinishing = lazy(() => import('./Containers/InteriorFinishing'));
const PrivatePolicy = lazy(() => import('./Containers/PrivatePolicy'));
const Refer = lazy(() => import('./Containers/Refer'));
const Staff = lazy(() => import('./Containers/Staff'));
const AgmChristmasParty2019 = lazy(() => import('./Containers/AgmChristmasParty2019'));
const Warranty = lazy(() => import('./Containers/Warranty'));
const WarrantyClaimForm = lazy(() => import('./Containers/WarrantyClaimForm'));
const PaymentReceipt = lazy(() => import('./Containers/PaymentReceipt'));

function RedirectWithStatus({ from, to, status }) {
  return (
    <Route
      render={({ staticContext }) => {
        // there is no `staticContext` on the client, so
        // we need to guard against that here
        if (staticContext) staticContext.status = status;
        return <Redirect from={from} to={to} />;
      }}
    />
  );
}

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>AGM Basements | Basement Renovations</title>
        <meta name="description" content="AGM Basements has a 4.5-star rating with over 200 Google Reviews as GTA’s top-rated basement renovations we provide 100% customer satisfaction." />
      </Helmet>
      <ScrollToTop>
        <Suspense fallback={<div></div>}>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/estimate" component={Estimate} />
            <Route exact path="/the-agm-difference" component={TheAGMDifference} />
            <Route exact path="/our-clients" component={OutClients} />
            <Route exact path="/our-work" component={OurWork} />
            <Route exact path="/thank-you" component={ThankYou} />
            <Route exact path="/financeit" component={FinanceIt} />
            <Route exact path="/finished-basements" component={FinishedBasements} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/post/:slug" component={SingleBlog} />
            <Route exact path="/contact-us" component={ContactUs} />
            <Route exact path="/vote" component={Vote} />
            <Route exact path="/employeeofthemonth" component={EmployeeOfTheMonth} />
            <Route exact path="/tradeofthemonth" component={TradeOfTheMonth} />
            <Route exact path="/realtors" component={Realtors} />
            <Route exact path="/catalogue" component={Catalogue} />
            <Route exact path="/financing" component={Financing} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/our-team/agm-renovations-bbq-event-summer-2016" component={AgmBBQ2016} />
            <Route exact path="/our-team/agm-renovations-bbq-event-summer-2017" component={AgmBBQ2017} />
            <Route exact path="/our-team/agm-hollywood-christmas-party-2016" component={ChristmasParty2016} />
            <Route exact path="/our-team/agm-renovations-christmas-in-the-office-2016" component={AgmOfficeChristmas2016} />
            <Route exact path="/brampton" component={BasementRenovationInBrampton} />
            <Route exact path="/vaughan" component={BasementRenovationsInVaughan} />
            <Route exact path="/durham-region" component={BasementRenovationInTheDurhamRegion} />
            <Route exact path="/hamilton" component={BasementRenovationsInHamilton} />
            <Route exact path="/markham" component={BasementRenovationsInMarkham} />
            <Route exact path="/mississauga" component={BasementRenovationsInMississauga} />
            <Route exact path="/richmond-hill" component={BasementRenovationInRichmondHill} />
            <Route exact path="/oakville" component={BasementRenovationsInOakville} />
            <Route exact path="/toronto" component={BasementRenovationsInToronto} />
            <Route exact path="/basement-renovation-services" component={BasementRenovationServices} />
            <Route exact path="/all-service/basement-bathroom-renovation" component={BasementBathroomRenovation} />
            <Route exact path="/all-service/basement-apartment-renovation" component={BasementApartmentRenovation} />
            <Route exact path="/all-service/basement-home-workout-room" component={BasementWorkoutRoom} />
            <Route exact path="/all-service/basement-home-family-room" component={BasementFamilyRoomRenovation} />
            <Route exact path="/all-service/basement-home-saunas" component={BasementSaunasRenovation} />
            <Route exact path="/all-service/basement-home-office" component={BasementOfficeRenovation} />
            <Route exact path="/all-service/basement-home-bedroom" component={BasementBedroomRenovation} />
            <Route exact path="/all-service/basement-home-inlaw-suite" component={BasementInlawSuiteRenovation} />
            <Route exact path="/all-service/basement-home-recreation-room" component={BasementRecRoomRenovation} />
            <Route exact path="/all-service/basement-home-theater" component={BasementTheaterRoomRenovation} />
            <Route exact path="/all-service/basement-home-fireplace" component={BasementFireplaceRenovation} />
            <Route exact path="/all-service/basement-home-bar" component={BasementBarRenovation} />
            <Route exact path="/all-service/basement-home-kitchen" component={BasementKitchenRenovation} />
            <Route exact path="/contactcenter" component={CallCenter} />
            <Route exact path="/brandon" component={CallCenterBrandon} />
            <Route exact path="/dordana" component={Dordana} />
            <Route exact path="/garth" component={Garth} />
            <Route exact path="/areas" component={Areas} />
            <Route exact path="/careers" component={Careers} />
            <Route exact path="/why-us" component={WhyUs} />
            <Route exact path="/jobs-posting" component={JobPostings} />
            <Route exact path="/customer-service-associate" component={CustomerServiceAssociate} />
            <Route exact path="/door2door" component={DoorToDoor} />
            <Route exact path="/field-sale-representative" component={FieldSaleRepresentative} />
            <Route exact path='/front-desk' component={FrontDesk} />
            <Route exact path='/phone' component={IncomingCallToCRM} />
            <Route exact path="/interior-finishing" component={InteriorFinishing} />
            <Route exact path="/private-policy" component={PrivatePolicy} />
            <Route exact path="/refer-friend-earn-1000-basement-renovations" component={Refer} />
            <Route exact path="/staff" component={Staff} />
            <Route exact path="/our-team/christmas-party-2019" component={AgmChristmasParty2019} />
            <Route exact path="/warranty" component={Warranty} />
            <Route exact path="/warranty-claim-form" component={WarrantyClaimForm} />
            <Route exact path="/payment-receipt" component={PaymentReceipt} />


            {/* OLD BLOG POST and PAGE REDIRECT */}
            <RedirectWithStatus status={301} from="/figuring-out-the-best-flooring-material-for-your-basement" to="/post/figuring-out-the-best-flooring-material-for-your-basement" />
            <RedirectWithStatus status={301} from="/how-should-lighting-work-in-your-basement" to="/post/how-should-lighting-work-in-your-basement" />
            <RedirectWithStatus status={301} from="/finished-basement-suite" to="/post/finished-basement-suite" />
            <RedirectWithStatus status={301} from="/agm-basements-is-a-proud-supporter-of-360okids" to="/post/agm-supports-360-kids" />
            <RedirectWithStatus status={301} from="/event" to="/" />
            <RedirectWithStatus status={301} from="/reviews" to="/our-clients" />
            <RedirectWithStatus status={301} from="/membership-join" to="/" />
            <RedirectWithStatus status={301} from="/our-team" to="/about-us" />
            <RedirectWithStatus status={301} from="/service-area" to="/" />
            <RedirectWithStatus status={301} from="/r-estimate" to="/estimate" />
            <RedirectWithStatus status={301} from="/schedule-home-estimation" to="/estimate" />
            <RedirectWithStatus status={301} from="/homeshow" to="/estimate" />
            <RedirectWithStatus status={301} from="/our-team/agm-hollywood-christmas-party-2016/estimate" to="/our-team/agm-hollywood-christmas-party-2016" />
            <RedirectWithStatus status={301} from="/our-team/agm-renovations-bbq-event-summer-2016/estimate" to="/our-team/agm-renovations-bbq-event-summer-2016" />
            <RedirectWithStatus status={301} from="/our-team/agm-renovations-bbq-event-summer-2017/estimate" to="/our-team/agm-renovations-bbq-event-summer-2017" />
            <RedirectWithStatus status={301} from="/our-team/agm-renovations-christmas-in-the-office-2016/estimate" to="/our-team/agm-renovations-christmas-in-the-office-2016" />
          </Switch>
          <Footer />
        </Suspense>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
