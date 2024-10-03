import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./Components/header";
import Footer from "./Components/footer";
import Homepage from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact"
import Experience from "./pages/skill-experience"
import Errorpage from "./pages/404-page";

export default function MainFunction(){
    return(
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<Homepage/>}/>
                <Route exact path="/about-me" element={<About/>}/>
                <Route exact path="/skill-and-experience" element={<Experience/>}/>
                <Route exact path="/contact-me" element={<Contact/>}/>
                <Route exact path="*" element={<Errorpage />} />
            </Routes>
            <Footer/>
        </Router>
    )
}