import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./Components/header";
import Footer from "./Components/footer";
import Homepage from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact"
import Experience from "./pages/skill-experience"
import Errorpage from "./pages/404-page";
import AOS from 'aos';

AOS.init();

// aos below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

export default function MainFunction(){

    function DownloadCv(){
        const getPdf = "https://drive.google.com/file/d/1b-Tcm0RwLCGLwjHBIFP38Ejy_6d3qytm/view?usp=sharing";
        window.open(getPdf);
        return true;
    }

    function GlobsynCertificate(){
        const getPdf = "https://drive.google.com/file/d/1oXBdX0eefSmkIb4BBIakqJ7dh1tI7g9l/view?usp=sharing";
        window.open(getPdf);
        return true;
    }

    function OgmaCertificate(){
        const getPdf = "https://drive.google.com/file/d/1OA3wzGNpRolp72G0llry9XnJwnqI7uz-/view?usp=sharing";
        window.open(getPdf);
        return true;
    }

    const [toolTip, setToolTip] = useState('false')
    function copyURL(){
        navigator.clipboard.writeText(window.location.origin);
        setToolTip('true');
        setTimeout(function(){
            setToolTip('false');
        },1000)
    }

    return(
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<Homepage DownloadCv={DownloadCv}/>}/>
                <Route exact path="/about-me" element={<About/>}/>
                <Route exact path="/skill-and-experience" element={<Experience DownloadCv={DownloadCv} GlobsynCertificate={GlobsynCertificate} OgmaCertificate={OgmaCertificate}/>}/>
                <Route exact path="/contact-me" element={<Contact copyURL={copyURL} toolTip={toolTip}/>}/>
                <Route exact path="*" element={<Errorpage />} />
            </Routes>
            <Footer DownloadCv={DownloadCv}/>
        </Router>
    )
}