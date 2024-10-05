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

    function DownloadCv(){
        const getPdf = "https://drive.google.com/file/d/1KlOr4ZlK9jmfObn2Xx5KG_RV3mNrnIYR/view?usp=sharing";
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

    return(
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<Homepage DownloadCv={DownloadCv}/>}/>
                <Route exact path="/about-me" element={<About/>}/>
                <Route exact path="/skill-and-experience" element={<Experience DownloadCv={DownloadCv} GlobsynCertificate={GlobsynCertificate} OgmaCertificate={OgmaCertificate}/>}/>
                <Route exact path="/contact-me" element={<Contact/>}/>
                <Route exact path="*" element={<Errorpage />} />
            </Routes>
            <Footer DownloadCv={DownloadCv}/>
        </Router>
    )
}