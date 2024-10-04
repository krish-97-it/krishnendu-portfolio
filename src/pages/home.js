import React from "react";
import ProfileIcon from "../asset/dev-img-3-cropped.webp";
import ProfileIcon2 from '../asset/profile-pic-two.webp';
import ReactDevLogo from '../asset/reactjs-developer.webp';
import PhpWpDevLogo from '../asset/php-wordpress-developer.webp';
import FrontEndDevLogo from '../asset/frontend-developer.webp';
import GoToTop from "../Components/go-to-top";

const Homepage = ()=>{
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
                                <p>I am a Software Engineer from Kolkata, West Bengal having 3years of experience in website development and maintaince.</p>
                                <div className="profile-button-section">
                                    <button>
                                        Download CV
                                    </button>
                                    <button>
                                        Contact Me
                                    </button>
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
                                <p>Being a Developer, I always love to learn & develop something new and my goal is always to improve my skills and efficiency more. My Journey was satrted in 2021 and after Completing B.Tech in Information Technology, I have joined in an ICSE School as a part-time Programming Teacher. After few months I got opportunity to work in BYJU'S and later on 2023 I have joined WhitehatJr. Overall, I have over 3 years of experience in creating new Websites & Webpages, adding dynamic and user interactive features, Automation tool for controlling features from CMS etc.</p>
                            </div>
                            <div className="profile-img">
                                <img src={ProfileIcon2} alt="profile"/>
                            </div>
                        </div>
                        <div className="about-me-btn-section more-about-me-btn">
                            <button>More About Me</button> 
                        </div>
                    </div>
                </div>
                <div className="specialization-section">
                    <div className="container">
                        <h3>Specialization</h3>
                        <div className="specialization-card">
                            <div class="card-group">
                                <div class="card">
                                    <img src={FrontEndDevLogo} class="card-img-top" alt="frontend"/>
                                    <div class="card-body">
                                        <h5 class="card-title">Frontend Developer</h5>
                                        <p class="card-text">Skilled Front-end Developer with more than 3 years of experience in designing, developing and maintaining responsive web applications.</p>
                                    </div>
                                </div>
                                <div class="card">
                                    <img src={PhpWpDevLogo} class="card-img-top" alt="php-wordpress"/>
                                    <div class="card-body">
                                        <h5 class="card-title">PHP/WordPress Developer</h5>
                                        <p class="card-text">Experinced in creating and managing web applications with WordPress CMS using PHP, MySQL, HTML, CSS, JS</p>
                                    </div>
                                </div>
                                <div class="card">
                                    <img src={ReactDevLogo} class="card-img-top" alt="react"/>
                                    <div class="card-body">
                                        <h5 class="card-title">React Developer</h5>
                                        <p class="card-text">Builts responsive, browser based, single page web applications using React Js, Node Js, Express Js and MongoDb.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="about-me-btn-section">
                                <button>Check my Experience</button> 
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