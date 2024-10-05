import React from "react";
import ProfileIcon from "../asset/dev-img-3-cropped.webp";
import ProfileIcon2 from '../asset/profile-pic-two.webp';
import ReactDevLogo from '../asset/reactjs-developer.webp';
import PhpWpDevLogo from '../asset/php-wordpress-developer.webp';
import FrontEndDevLogo from '../asset/frontend-developer.webp';
import GoToTop from "../Components/go-to-top";
import { NavLink } from "react-router-dom";

const Homepage = ({DownloadCv})=>{
    return(
        <div className="app-body">
             <div className="main-content homepage-body">
                <div className="introduction">
                    <div className="container">
                        <div className="display-flex-home">
                            <div className="profile-image-section">
                                <div className="img-container">
                                    <img src={ProfileIcon} alt="profile"/>
                                </div>
                            </div>
                            <div className="introduction-para">
                                <p>Hi There,</p>
                                <h3>My name is <span>Krishnendu Nandy</span></h3>
                                <p>I am a Software Engineer from Kolkata, West Bengal having 3years of experience in website development and maintenance.</p>
                                <div className="profile-button-section">
                                    <button onClick={DownloadCv}>
                                        Download CV
                                    </button>
                                    <NavLink to="/contact-me">
                                        Contact Me
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-me-section">
                    <div className="container">                
                        <div className="home-about-me">
                            <div className="about-me-txt">
                                <h3>About Me</h3>
                                <p>Being a Developer, I always love to learn & develop something new and my goal is always to improve my skills and efficiency more. After completing B.Tech in Information Technology, my Journey was satrted in 2021 by joining in an ICSE School as a part-time Programming Teacher. After few months I got opportunity to work in BYJU'S and later on 2023 I have joined WhitehatJr. Overall, I have over 3 years of experience in creating new websites & webpages, adding dynamic and user interactive features, creating automation tool for controlling features from CMS etc.</p>
                            </div>
                            <div className="profile-img">
                                <img src={ProfileIcon2} alt="profile"/>
                            </div>
                        </div>
                        <div className="about-me-btn-section more-about-me-btn">
                            <NavLink to="/about-me">More About Me</NavLink> 
                        </div>
                    </div>
                </div>
                <div className="specialization-section">
                    <div className="container">
                        <h3>Specialization</h3>
                        <div className="specialization-card">
                            <div className="card-group">
                                <div className="card">
                                    <img src={FrontEndDevLogo} className="card-img-top" alt="frontend"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Frontend Developer</h5>
                                        <p className="card-text">Skilled Front-end Developer with more than 3 years of experience in designing, developing and maintaining responsive web applications.</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src={PhpWpDevLogo} className="card-img-top" alt="php-wordpress"/>
                                    <div className="card-body">
                                        <h5 className="card-title">PHP/WordPress Developer</h5>
                                        <p className="card-text">Experinced in creating and managing web applications with WordPress CMS using PHP, MySQL, HTML, CSS, JS</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src={ReactDevLogo} className="card-img-top" alt="react"/>
                                    <div className="card-body">
                                        <h5 className="card-title">React Developer</h5>
                                        <p className="card-text">Builts responsive, browser based, single page web applications using React Js, Node Js, Express Js and MongoDb.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="about-me-btn-section">
                                <NavLink to="/skill-and-experience">Check my Experience</NavLink> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <GoToTop/>
        </div>
    )
}

export default Homepage