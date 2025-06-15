import React from 'react';
import { Link } from 'react-router-dom';
import LoginPageNavbar from '../components/LoginPageNavbar';
import LeftSection from '../components/LeftSection';
import RightSection from '../components/RightSection';
const LandingPage = () => {
    return (
        <>
        <LoginPageNavbar/>
        <div className='flex ml-65 mt-20'>
            <LeftSection/>
            <RightSection/>
        </div>
        </>
    );
};

export default LandingPage;
