import React from "react";
import { NavLink } from "react-router-dom";
import SkillBanner from "../asset/skill-banner.webp";
import BackendLogo from "../asset/backend_dev.webp";
import FrontendLogo from "../asset/frontend-developer.webp";
import Others from '../asset/others.webp';
import git from '../asset/tool-icons/git.png';
import gitbash from '../asset/tool-icons/git-bash.svg';
import postman from '../asset/tool-icons/postman.png';
import jira from '../asset/tool-icons/jira.png';
import wamp from '../asset/tool-icons/wamp.webp';
import mamp from '../asset/tool-icons/mamp.png';
import sql from '../asset/tool-icons/sql-workbench.png';
import mongo from '../asset/tool-icons/mongo-db.png';
import vscode from '../asset/tool-icons/vscode.png';
import sqlyog from '../asset/tool-icons/sqlyog.webp';
import whjr from '../asset/tool-icons/whithatjr.png';
import byjus from '../asset/tool-icons/byjus.png';
import sva from '../asset/tool-icons/sva.webp';
import globsyn from '../asset/tool-icons/globsyn_business_school_logo.jpeg';
import ogma from '../asset/tool-icons/ogma_techlab_logo.jpeg';
import GoToTop from "../Components/go-to-top";
import portfolio from "../asset/portfolio-ss.webp";
import krishmish from "../asset/krishmish-ss.webp";

export default function experience({DownloadCv, OgmaCertificate, GlobsynCertificate}){
    return(
        <div className="app-body">
            <div className="main-content">
                <div className="experience-banner-section">
                    <div className="container">
                        <img src={SkillBanner} className="skill-experience-banner" alt="banner"/>
                        <div className="experience-summary">
                            <h3>Overview</h3>
                            <p>
                                I have more than 3 years' experience in building and maintaining rich web applications that serves million of users all over the world. Below is a brief details of my experience along with my main technical skill sets and tools I use. You can check and download my resume also. 
                            </p>
                            <button className="download-resume-btn" onClick={DownloadCv}>Download Resume</button>
                        </div>
                    </div>
                </div>
                <div className="skills-summary-section mt-3">
                    <div className="container">
                        <h5 className="about-page-heading">Highlighted Skills</h5>
                        <div className="specialization-card summary-skill-card">
                            <div className="card-group">
                                <div className="card">
                                    <img src={FrontendLogo} className="card-img-top" alt="frontend"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Frontend</h5>
                                        <ul className="skill-list">
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>Bootstrap</li>
                                            <li>JavaScript</li>
                                            <li>JQuery</li>
                                            <li>React Js</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src={BackendLogo} className="card-img-top" alt="php-wordpress"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Backend</h5>
                                        <ul className="skill-list">
                                            <li>PHP</li>
                                            <li>MySQL</li>
                                            <li>Node Js</li>
                                            <li>Mongo Db</li>
                                            <li>Express Js</li>
                                            <li>Api Development</li>
                                        </ul>  
                                    </div>
                                </div>
                                <div className="card">
                                    <img src={Others} className="card-img-top" alt="react"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Others</h5>
                                        <ul className="skill-list">
                                            <li>WordPress</li>
                                            <li>Java Basics</li>
                                            <li>Python Basics</li>
                                            <li>Unit Testing</li>
                                            <li>Teaching</li>
                                            <li>Mentoring</li>
                                        </ul>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="skills-analysis-section mt-3">
                    <div className="container">
                        <h5 className="about-page-heading">Skill Analysis</h5>
                        <div className="skill-progress-bar row">
                            <div className="col-sm-6">
                                <h6>HTML / CSS / Bootstrap</h6>
                                <div className="progress-bar skill-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="col-sm-6 javscript-div">
                                <h6>JavaScript</h6>
                                <div className="progress-bar js-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="col-sm-6 mt-3">
                                <h6>JQuery</h6>
                                <div className="progress-bar jquery-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="col-sm-6 mt-3">
                                <h6>React Js</h6>
                                <div className="progress-bar reactjs-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="col-sm-6 mt-3">
                                <h6>WordPress</h6>
                                <div className="progress-bar wordpress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="col-sm-6 mt-3">
                                <h6>PHP</h6>
                                <div className="progress-bar php-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="col-sm-6 mt-3">
                                <h6>Node</h6>
                                <div className="progress-bar node-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="col-sm-6 mt-3">
                                <h6>Express Js</h6>
                                <div className="progress-bar express-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="col-sm-6 mt-3">
                                <h6>MySQL</h6>
                                <div className="progress-bar sql-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="col-sm-6 mt-3">
                                <h6>Mongo DB</h6>
                                <div className="progress-bar mongo-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="col-sm-6 mt-3">
                                <h6>Java</h6>
                                <div className="progress-bar java-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="col-sm-6 mt-3">
                                <h6>Python</h6>
                                <div className="progress-bar python-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="col-sm-6 mt-3">
                                <h6>Unit Testing</h6>
                                <div className="progress-bar testing-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="col-sm-6 mt-3">
                                <h6>Ms Office</h6>
                                <div className="progress-bar office-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="col-sm-6 mt-3">
                                <h6>Project Management</h6>
                                <div className="progress-bar project-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="col-sm-6 mt-3">
                                <h6>Mentoring</h6>
                                <div className="progress-bar mentor-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="col-sm-6 mt-3">
                                <h6>Teaching</h6>
                                <div className="progress-bar teaching-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="col-sm-6 mt-3">
                                <h6>Active Listening</h6>
                                <div className="progress-bar listen-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Working-experience-section">
                    <div className="container">
                        <h5 className="about-page-heading">Work Experiences</h5>
                        <div className="experience-lists">
                            <div className="card">
                                <h5 className="card-header">July 2023 - Current</h5>
                                <div className="card-body">
                                    <div className="experience-title-section">
                                        <img src={whjr} alt="whitehatjr"/>
                                        <h5 className="card-title">WhiteHatJr</h5>
                                    </div>
                                    <h5 className="card-title">Software Engineer</h5>
                                    <div className="description-section">
                                        <p className="card-text">Wrote and developed new and well-tested code for different websites with individual ownership</p>
                                        <ul className="experience-websites">
                                            <li>
                                                <p>
                                                    <NavLink to="https:/byjus.com/us/math/">https:/byjus.com/us/math/</NavLink> - Worked Byjus US math websiteusing react and next js
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    <NavLink to="https://byjus.com/us/math/blogs/">https://byjus.com/us/math/blogs/</NavLink> - Have developed this blog website from scratch under byjus us math in WordPress CMS by creating new theme and templates using HTML, CSS, JQuery and Php.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    <NavLink to="https://www.playosmo.com/kids-learning/">https://www.playosmo.com/kids-learning/</NavLink> - Worked this static content website of OSMO in WordPress CMS by adding features like dynamic
                                                    features like Popups, Form slides, Delayed Toast etc.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    <NavLink to="https://blog.playosmo.com/"> https://blog.playosmo.com/ </NavLink>- create and modify amp based page templates.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    <NavLink to="https://www.byjusfutureschool.com/"> https://blog.playosmo.com/ </NavLink> and <NavLink to="https://www.whitehatjr.com">https://www.whitehatjr.com</NavLink> - Also
                                                    worked on small fixes on these EJS projects.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-3">
                                <h5 className="card-header">June 2021 - June 2023</h5>
                                <div className="card-body">
                                    <div className="experience-title-section">
                                        <img src={byjus} alt="byjus"/>
                                        <h5 className="card-title">BYJUS's</h5>
                                    </div>
                                    <h5 className="card-title">Associate Software Engineer</h5>
                                    <div className="description-section">
                                        <p className="card-text">Wrote clean and dynamic code across multiple programming languages to
                                        meet diverse requirements. Worked on two major projects of BYJU'S</p>
                                        <ul className="experience-websites">
                                            <li>
                                                <p>
                                                    <NavLink to="https://byjus.com/">https://byjus.com/</NavLink> - Developed Dynamic Features such as Quick Links, Bottom Toast, Multi select dropdown, Forms, Backend API. Also developed automated tools to change features dynamically from backend CMS itself.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    <NavLink to="https://blog.byjus.com/">https://blog.byjus.com/</NavLink> - Have developed this blog website from scratch under byjus us math in WordPress CMS by creating new theme and templates using HTML, CSS, JQuery and Php.
                                                </p>
                                            </li>
                                            <li>
                                                <p>Contributes in sprint planning, prioritizing backlogs, learning sessions, mentoring etc</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-3">
                                <h5 className="card-header">January 2021 - June 2021</h5>
                                <div className="card-body">
                                    <div className="experience-title-section">
                                        <img src={sva} alt="sva"/>
                                        <h5 className="card-title">Swami Vivekananda Academy</h5>
                                    </div>
                                    <h5 className="card-title">Programming Teacher</h5>
                                    <ul className="experience-websites">
                                        <li>
                                            <p>Worked as part-time Java Programming Teacher for students of class IX and X by using BlueJ</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card mt-3">
                                <h5 className="card-header">Jun 2019 - July 2019</h5>
                                <div className="card-body">
                                    <div className="experience-title-section">
                                        <img src={globsyn} alt="globsyn"/>
                                        <h5 className="card-title">Globsyn Business School</h5>
                                    </div>
                                    <h5 className="card-title">Trainee</h5>
                                    <ul className="experience-websites">
                                        <li>
                                            <p>Summer Training on Data Science using Python</p>
                                            <button className="download-resume-btn" onClick={GlobsynCertificate}>Download Cerificate</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card mt-3">
                                <h5 className="card-header">January 2019 - February 2019</h5>
                                <div className="card-body">
                                    <div className="experience-title-section">
                                        <img src={ogma} alt="Ogma Tech" style={{paddingRight:"3px"}}/>
                                        <h5 className="card-title">OgmaTechLab</h5>
                                    </div>
                                    <h5 className="card-title">Trainee</h5>
                                    <ul className="experience-websites">
                                        <li>
                                            <p>Industrial Training on Angular and Node js</p>
                                            <button className="download-resume-btn" onClick={OgmaCertificate}>Download Cerificate</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Working-tools-section mt-3">
                    <div className="container">
                        <h5 className="about-page-heading">Working Tools & Softwares</h5>
                        <div className="tool-icons">
                            <img src={git} alt="git"/>
                            <img src={gitbash} alt="git bash"/>
                            <img src={postman} alt="postman"/>
                            <img src={jira} alt="jira"/>
                            <img src={sql} alt="workbench"/>
                            <img src={mongo} alt="mongo"/>
                            <img src={wamp} alt="wamp"/>
                            <img src={mamp} alt="mamp"/>
                            <img src={vscode} alt="vs code"/>
                            <img src={sqlyog} alt="sql yog"/>
                        </div>
                    </div>
                </div>
                <div className="personal-websites-section mt-3">
                    <div className="container">
                        <h5 className="about-page-heading">Personal Websites</h5>
                        <div className="projects-section">
                            <div class="card card-one">
                                <div class="card-body project-card-body">
                                    <div>
                                        <h5 class="card-title" style={{fontWeight:"600", color:"wheat"}}>Krishmish - Order Food Online</h5>
                                        <p class="card-text">Have deeveloped a MERN stack applicationnfor a resturant online food service. Built several features - Email OTP login Flow, Food Cart, Wishlist, Order Foos, Order History, User Profile, User Session and data track on local storage by using React, Node, Mongo, Express.</p>
                                        <div>
                                            <NavLink to="https://krishmish-order.onrender.com/" className="download-resume-btn project-section-btn">Visit Once</NavLink> 
                                        </div>
                                    </div>
                                    <div>
                                        <img src={krishmish} className="personal-website-ss" alt="KrishMish"/>
                                    </div>
                                </div>
                            </div>
                            <div class="card card-two mt-3">
                                <div class="card-body project-card-body">
                                    <div>
                                        <h5 class="card-title" style={{fontWeight:"600", color:"#185961"}}>Personal Portfolio</h5>
                                        <p class="card-text">Have Created a Portfolio Website made with React Js, Bootstrap and Css with colorful designs and css animations. This website is hosted on Vercel</p>
                                        <div>
                                            <NavLink to="https://portfolio-krishnendu.vercel.app/" className="download-resume-btn project-section-btn">Portfolio Link</NavLink> 
                                        </div>
                                    </div>
                                    <div>
                                        <img src={portfolio} className="personal-website-ss" alt="Portfolio"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <GoToTop/>
        </div>
    )
}