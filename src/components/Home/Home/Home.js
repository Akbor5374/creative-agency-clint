import React from 'react';
import ClintFeedback from '../ClintFeedback/ClintFeedback';
import CompanyClint from '../CompanyClint/CompanyClint';
import CompanyWorks from '../CompanyWorks/CompanyWorks';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ProvideService from '../ProvideService/ProvideService';

const Home = () => {
    return (
        <>
          <Header />
          <CompanyClint />
          <ProvideService />
          <CompanyWorks />
          <ClintFeedback />
          <Footer />
        </>
    );
};

export default Home;