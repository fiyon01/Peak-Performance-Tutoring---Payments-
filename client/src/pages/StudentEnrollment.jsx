import React from 'react';
import Navbar from "../components/StudentEnrollment/Navbar"
import HeroSection from "../components/HeroSection"
import Programs from "../components/Programs"
const StudentEnrollment = () => {
    return (
        <div>
            <Navbar/>
            <HeroSection/>
            <Programs/>
        </div>
    );
};

export default StudentEnrollment;