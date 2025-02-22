import React from "react";
import ProfileIcon from "../asset/dev-img-3-cropped.webp";
import ProfileIcon2 from '../asset/profile-pic-two.webp';
import ReactDevLogo from '../asset/reactjs-developer.webp';
import PhpWpDevLogo from '../asset/php-wordpress-developer.webp';
import FrontEndDevLogo from '../asset/frontend-developer.webp';
import GoToTop from "../Components/go-to-top";
import { NavLink } from "react-router-dom";
import FourMonksLogo from '../asset/4_monks.svg';
import ByjusLogo from '../asset/byjus_logo.svg';
import WhjrLogo from '../asset/whjr_logo.webp';
import { HashLink } from 'react-router-hash-link';

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
                                <p>I am a Software Engineer from Kolkata, West Bengal having 3.7years of experience in website development and maintaince.</p>
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
                                <p data-aos="fade-up" data-aos-duration="1000" data-aos-offset="100" data-aos-delay="0">Being a Developer, I always love to learn & develop something new and my goal is always to improve my skills and efficiency more. After completing B.Tech in Information Technology, my Journey was satrted in 2021 by joining in an ICSE School as a part-time Programming Teacher. After few months I got opportunity to work in BYJU'S and later on 2023 I have joined WhitehatJr. Overall, I have over 3.7 years of experience in creating new websites & webpages, adding dynamic and user interactive features, creating automation tool for controlling features from CMS etc.</p>
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
                                <div className="card" data-aos="flip-card" data-aos-duration="2000" data-aos-offset="100" data-aos-easing="ease-in-quad">
                                    <img src={FrontEndDevLogo} className="card-img-top" alt="frontend"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Frontend Developer</h5>
                                        <p className="card-text">Skilled Front-end Developer with more than 3.7 years of experience in designing, developing and maintaining responsive web applications.</p>
                                    </div>
                                </div>
                                <div className="card" data-aos="flip-card" data-aos-duration="1500" data-aos-offset="100" data-aos-easing="ease-in-quad">
                                    <img src={PhpWpDevLogo} className="card-img-top" alt="php-wordpress"/>
                                    <div className="card-body">
                                        <h5 className="card-title">PHP/WordPress Developer</h5>
                                        <p className="card-text">Experinced in creating and managing web applications with WordPress CMS using PHP, MySQL, HTML, CSS, JS</p>
                                    </div>
                                </div>
                                <div className="card" data-aos="flip-card" data-aos-duration="1500" data-aos-offset="100" data-aos-easing="ease-in-quad">
                                    <img src={ReactDevLogo} className="card-img-top" alt="react"/>
                                    <div className="card-body">
                                        <h5 className="card-title">React Developer</h5>
                                        <p className="card-text">Builts responsive, browser based, single page web applications using React Js, Node Js, Express Js and MongoDb.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="about-me-btn-section">
                            <HashLink to="/skill-and-experience#skills" className="text-reset">View All Skills</HashLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="experience-section">
                    <div className="container">
                        <h3>Professional Experience</h3>
                        <div className="experience-card">
                            <div className="intro-para">
                                <p data-aos="fade-up" data-aos-duration="1000" data-aos-offset="50">I learn and gain a diverse range of skills, experience and knowledge over the years by developing and maintaining rich and responsive web applications that serves million of users under working in various organizations as both frontend and backend developer by working in various tech stacks.</p>
                            </div>
                            <div className="item-group">
                                <div className="img-wrapper" data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="50">
                                    <img className="byjus card-img-top" src={ByjusLogo} alt="Byjus"/>
                                    {/* <p>Associate Software Engineer</p> */}
                                </div>
                                <div className="img-wrapper" data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="50">
                                    <img className="whjr card-img-top" src={WhjrLogo} alt="WhiteHatJr"/>
                                    {/* <p>Software Engineer</p> */}
                                </div>
                                <div className="img-wrapper" data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="50">
                                    <img className="monks card-img-top" src={FourMonksLogo} alt="4monks"/>
                                    {/* <p>Consultant Web Developer</p> */}
                                </div>
                            </div>

                            <div className="about-me-btn-section">
                                <HashLink to="/skill-and-experience#experiences" className="text-reset">Check More</HashLink>
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