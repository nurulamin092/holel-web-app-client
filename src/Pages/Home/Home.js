import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import Subscribe from '../Subscribe';
import CustomerFeedback from './CustomerFeedback';
import Service from './Service';
const Home = () => {
    return (
        <div className='section'>
            <Navbar/>
            <Service/>
            <CustomerFeedback/>
            <Subscribe/>
            <Footer/>
                         
        </div>
    );
};

export default Home;