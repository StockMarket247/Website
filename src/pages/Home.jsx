import React from 'react';
import Faq from '../components/page-components/Faq';
import Mobile from '../components/page-components/Mobile';
import Preloader from '../components/page-components/Preloader';
import Blog from '../components/page-components/Blog';
import WhyUs from '../components/page-components/WhyUs';
import HowItWorks from '../components/page-components/HowItWorks';
import TradingTool from '../components/page-components/TradingTool';
import TradeCharts from '../components/page-components/TradeCharts';
import Partners from '../components/page-components/Partners';
import AccountTypes from '../components/page-components/AccountTypes';
import ForexTrading from '../components/page-components/ForexTrading';
import About from '../components/page-components/About';
import Banner from '../components/page-components/Banner';

const Home = () => {

    return (
        <div>
            {/* <Preloader /> */}
            <Banner />
            <About />
            <ForexTrading />
            <AccountTypes />
            <Partners />
            <TradeCharts />
            <TradingTool />
            <HowItWorks />
            <WhyUs />
            <Blog />
            <Mobile />
            <Faq />
        </div>
    );
};

export default Home;