import React from "react";
import { NavLink } from "react-router-dom";
import PrifileIcon from "../asset/kn-profile.webp";

export default function Footer({DownloadCv}){
    return(
        <footer className="footer">
            <div className="portfolio-footer-section">
                <div className="container">
                    <div className="portfolio-footer-row">
                        <div className="footer-profile-image-section">
                            <div className="footer-logo-wrapper text-center text-md-start">
                                <img src={PrifileIcon} className="footer-profile-icon" alt="profile"/>
                            </div>
                            <div className="portfolio-signature">
                                <p>Personal portfolio by</p>
                                <p className="sig-name">Krishnendu Nandy</p>
                            </div>
                        </div>
                        <div className="footer-quick-links-section">
                            <h5>Quick Links:</h5>
                            <div className="footer-links-section">
                                <button onClick={DownloadCv}>Download Cv</button>
                                <NavLink className="btn-link" to="/about-me/">Education</NavLink>
                                <NavLink className="btn-link" to="/skill-and-experience">Skills</NavLink>
                                <NavLink className="btn-link" to="mailto:krishnendunandy6@gmail.com">Email Me</NavLink>
                                <button className="btn-link" to="https://www.linkedin.com/in/krishnendu-1997tech/">Connect On Linkedin</button>
                                <NavLink className="btn-link" to="https://github.com/krish-97-it">My Github</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copy-right-section">
                <div className="container">
                    <p>© 2024 All Rights Reserved</p>
                    <p className="dash">-</p>
                    <p>krishnendunandy6@gmail.com</p>
                </div>
            </div>
        </footer>
    )
}