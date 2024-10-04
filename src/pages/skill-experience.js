import React from "react";
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

export default function experience(){
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
                            <button className="download-resume-btn">Download Resume</button>
                        </div>
                    </div>
                </div>
                <div className="skills-summary-section mt-3">
                    <div className="container">
                        <h5 className="about-page-heading">Skill Highlight</h5>
                        <div className="specialization-card summary-skill-card">
                            <div class="card-group">
                                <div class="card">
                                    <img src={FrontendLogo} class="card-img-top" alt="frontend"/>
                                    <div class="card-body">
                                        <h5 class="card-title">Frontend</h5>
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
                                <div class="card">
                                    <img src={BackendLogo} class="card-img-top" alt="php-wordpress"/>
                                    <div class="card-body">
                                        <h5 class="card-title">Backend</h5>
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
                                <div class="card">
                                    <img src={Others} class="card-img-top" alt="react"/>
                                    <div class="card-body">
                                        <h5 class="card-title">Others</h5>
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
                        <div class="skill-progress-bar row">
                            <div className="col-sm-6">
                                <h6>HTML / CSS / Bootstrap</h6>
                                <div class="progress-bar skill-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="col-sm-6">
                                <h6>JavaScript</h6>
                                <div class="progress-bar js-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="col-sm-6 mt-3">
                                <h6>JQuery</h6>
                                <div class="progress-bar jquery-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="col-sm-6 mt-3">
                                <h6>React Js</h6>
                                <div class="progress-bar reactjs-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="col-sm-6 mt-3">
                                <h6>WordPress</h6>
                                <div class="progress-bar wordpress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="col-sm-6 mt-3">
                                <h6>PHP</h6>
                                <div class="progress-bar php-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="col-sm-6 mt-3">
                                <h6>Node</h6>
                                <div class="progress-bar node-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="col-sm-6 mt-3">
                                <h6>Express Js</h6>
                                <div class="progress-bar express-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="col-sm-6 mt-3">
                                <h6>MySQL</h6>
                                <div class="progress-bar sql-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="col-sm-6 mt-3">
                                <h6>Mongo DB</h6>
                                <div class="progress-bar mongo-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="col-sm-6 mt-3">
                                <h6>Java</h6>
                                <div class="progress-bar java-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="col-sm-6 mt-3">
                                <h6>Python</h6>
                                <div class="progress-bar python-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="col-sm-6 mt-3">
                                <h6>Unit Testing</h6>
                                <div class="progress-bar testing-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="col-sm-6 mt-3">
                                <h6>Ms Office</h6>
                                <div class="progress-bar office-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="col-sm-6 mt-3">
                                <h6>Project Management</h6>
                                <div class="progress-bar project-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="col-sm-6 mt-3">
                                <h6>Mentoring</h6>
                                <div class="progress-bar mentor-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="col-sm-6 mt-3">
                                <h6>Teaching</h6>
                                <div class="progress-bar teaching-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="col-sm-6 mt-3">
                                <h6>Active Listening</h6>
                                <div class="progress-bar listen-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Working-tools-section">
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
            </div>
        </div>
    )
}