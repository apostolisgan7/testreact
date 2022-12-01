import Header from "./components/Header";
import React from "react";
import HeroSection from "./components/HeroSection";
import BoxSlider from "./components/BoxSlider";
import './App.css';
import Footer from "./components/Footer";


function App() {
        return (
            <div className={"app fragment"} style={{overflow:"clip", color:"#d9ccbb"}}>
        <Header/>
        <HeroSection/>
        <BoxSlider/>
        <Footer/>
            </div>
    );
}

export default App;
