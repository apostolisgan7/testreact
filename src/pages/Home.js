import React from 'react';
import HeroSection from "../components/HeroSection";
import BoxSlider from "../components/BoxSlider";
import PageTransition from "../components/PageTransition";

function Home(props) {
    return (
        <PageTransition>
            <HeroSection/>
            <BoxSlider/>
        </PageTransition>
    );
}

export default Home;