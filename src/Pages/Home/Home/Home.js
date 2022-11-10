import React from 'react';
import About from '../About/About';
import Achievement from '../Achievement/Achievement';
import Activities from '../Activities/Activities';
import Banner from '../Banner/Banner';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Achievement></Achievement>
            <Activities></Activities>
            
        </div>
    );
};

export default Home;