import React from 'react';
import web from '../src/Images/avion.svg';
import Common from './Common';

const Home = () => {

    return(
        <>

            <Common 
                name="Grow your business with"
                imgsrc={web}
                visit="/Services"
                btname="Get Started"
            />
        </>
    );
};
export default Home;