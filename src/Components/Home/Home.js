import React from 'react';
import Header from '../Header/Header';
import HomeMoreContain from '../HomeMoreContain/HomeMoreContain';

import './Home.css';

const Home = () => {
    return (
        <div className='large-width'>
            {/* header section */}
            <div><Header></Header></div>
            {/* other section */}
            <HomeMoreContain></HomeMoreContain>


        </div>
    );
};

export default Home;