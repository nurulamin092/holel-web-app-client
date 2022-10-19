import React from 'react';
import Footer from '../Shared/Footer';
// import Navbar from '../Shared/Navbar';
import Subscribe from '../Subscribe';
import Banner from './Banner';
import CustomerFeedback from './CustomerFeedback';
import Hotels from './Hotels';
import Services from './Services';
const Home = () => {
    return (
        <div className='section'>            
            <Banner/>
            <Hotels/>
            <Services/>
            <CustomerFeedback/>
            <Subscribe/>
            <Footer/>                      
        </div>
    );
};

export default Home;