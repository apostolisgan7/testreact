import Header from "./components/Header";
import React from "react";
import HeroSection from "./components/HeroSection";
import BoxSlider from "./components/BoxSlider";
import './App.css';


function App() {
        return (
            <div className={"app"} style={{overflow:"clip"}}>
        <Header/>
        <HeroSection/>
        <BoxSlider/>
            </div>
    );
}

export default App;
