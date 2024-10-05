import React from "react";
import BannerTwo from '../asset/contact-me-two.webp';
import contactIcon from '../asset/contact-me.webp';
import ContactFlyer from '../asset/contact-flyer-tansparent.webp'
import LinkedinIcon from '../asset/linkedin.png';
import GmailIcon from '../asset/gmail.png';
import GithubIcon from '../asset/github.png';
import CallIcon from '../asset/call-icon.png';
import GoToTop from "../Components/go-to-top";
import { NavLink } from "react-router-dom";
export default function Contact(){
    return(
        <div className="app-body">
            <div className="main-content">
                <div className="contact-banner-section">
                    <div className="container">
                        <img src={BannerTwo} alt="banner" className="contact-me-banner"/>
                        <div className="box">
                            <div className="flyer-container">
                                <img src={ContactFlyer} className="contact-me-flyer" alt="banner"/>
                            </div>
                            <div style={{textAlign:"center"}}>
                                <h3 className="contact-heading-txt">Connect With Me</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-me-links-section">
                    <div className="container">
                        <div className="contact-me-links-container">
                            <div className="contact-links">
                                <div className="social-icons">
                                    <img src={LinkedinIcon} alt="linkedin"/>
                                    <div className="social-icon-body">
                                        <h6>Let's Connect Over Linked In</h6>
                                        <NavLink className="btn btn-primary social-icon-btn" to="https://www.linkedin.com/in/krishnendu-1997tech/">Visit Profile</NavLink>
                                    </div>
                                </div>
                                <div className="social-icons">
                                    <img src={GmailIcon} alt="gmail"/>
                                    <div className="social-icon-body">
                                        <h6>Drop a Mail to contact me on Gmail</h6>
                                        <NavLink className="btn btn-primary social-icon-btn" to="mailto:krishnendunandy6@gmail.com">Drop Mail</NavLink>
                                    </div>
                                </div>
                                <div className="social-icons">
                                    <img src={CallIcon} alt="call"/>
                                    <div className="social-icon-body">
                                        <h6>Give a Phone Call on my mobile number</h6>
                                        <NavLink className="btn btn-primary social-icon-btn" to="tel:+918768119770">Call Me</NavLink>
                                    </div>
                                </div>
                                <div className="social-icons">
                                    <img src={GithubIcon} alt="github"/>
                                    <div className="social-icon-body">
                                        <h6>Visit my Github Profile</h6>
                                        <NavLink className="btn btn-primary social-icon-btn" to="https://github.com/krish-97-it">Visit Profile</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="image-section">
                                <img src={contactIcon} alt="banner"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <GoToTop/>
        </div>
    )
}