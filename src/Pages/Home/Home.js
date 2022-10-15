import React from 'react';
import Footer from '../Footer';
import Navbar from '../Shared/Navbar';
import Subscribe from '../Subscribe';
import CustomerFeedback from './CustomerFeedback';
const Home = () => {
    return (
        <div className='section'>
            <Navbar/>
            <CustomerFeedback/>
            <Subscribe/>
            <Footer/>
                         
        </div>
    );
};

export default Home;