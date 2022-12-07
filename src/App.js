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
import {useColorMode, useColorModeValue} from "@chakra-ui/color-mode";


function App() {
    const location = useLocation();
    const { toggleColorMode } = useColorMode();
    const color = useColorModeValue('#420099', '#d9ccbb');
        return (
            <div className={"app fragment"} style={{overflow:"clip", color:color}}>
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
