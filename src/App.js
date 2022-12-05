import Header from "./components/Header";
import React from "react";
import './App.css';
import Footer from "./components/Footer";
import {Route, Routes, useLocation} from "react-router-dom"
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import {AnimatePresence} from "framer-motion";


function App() {
    const location = useLocation();

        return (
            <div className={"app fragment"} style={{overflow:"clip", color:"#d9ccbb"}}>
        <Header/>
        <AnimatePresence exitBeforeEnter>
                <Routes key={location.pathname} location={location}>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/projects' element={<Projects/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                </Routes>
        </AnimatePresence>
        <Footer/>
            </div>
    );
}

export default App;
