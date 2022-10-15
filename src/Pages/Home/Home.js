import React from 'react';
import Footer from '../Footer';
import Navbar from '../Shared/Navbar';
import Subscribe from '../Subscribe';
const Home = () => {
    return (
        <div className='section'>
            <Navbar/>
            <Subscribe/>
            <Footer/>
                         
        </div>
    );
};

export default Home;