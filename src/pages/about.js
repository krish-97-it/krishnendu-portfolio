import React from "react";
import DevBanner from '../asset/dev-img-3-cropped.webp';
import GoToTop from "../Components/go-to-top";
import MoviesIcon from '../asset/watch-movies-bg.webp';
import PaintingIcon from '../asset/painting-bg.webp';
import ProgrammingIcon from '../asset/programming.webp';
export default function About(){
    return(
        <div className="app-body">
            <div className="main-content">
                <div className="banner-section">
                    <div className="container">
                        <div className="about-banner-image">
                            <img src={DevBanner} alt="" style={{width:"100%"}}/>
                        </div>
                        <div className="banner-content-section">
                            <h3 style={{fontWeight:"700", marginBottom:"0px"}}>Krishnendu Nandy</h3>
                            <div className="about-location-txt">
                                <p style={{color:"#436b00", fontWeight:"600"}}>Kolkata, West Bengal</p>
                            </div>
                            <div className="banner-content-p">
                            <p>Software Engineer</p>
                            <p>Website Developer</p>
                            <p>Frontend Developer</p>
                            <p>React Developer </p> 
                            <p>Php Developer </p>
                            <p>WordPress Developer</p>
                            <p>JavaScript Developer</p>
                            <p>Teacher</p>
                            </div>
                            <div className="about-page-download-cv-btn">
                                <button>Download My Cv</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="language-section">
                    <div className="container">
                        <h5 className="about-page-heading">Language Known</h5>
                        <div className="progress-bar-section">
                            <div className="card-group">
                                <div className="card">
                                    <div className="progress-bar eng-progressbar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                    <h6 style={{textAlign:"center", color:"white", paddingTop:"12px", marginBottom:"0px"}}>
                                        English
                                    </h6>
                                </div>
                            </div>
                            <div className="card-group">
                                <div className="card">
                                    <div className="progress-bar hin-progressbar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    <h6 style={{textAlign:"center", color:"white", paddingTop:"12px", marginBottom:"0px"}}>
                                        Hindi
                                    </h6>
                                </div>
                            </div>
                            <div className="card-group">
                                <div className="card">
                                    <div className="progress-bar beng-progressbar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                    <h6 style={{textAlign:"center", color:"white", paddingTop:"12px", marginBottom:"0px"}}>
                                        Bengali
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="education-details-section">
                    <div className="container">
                        <h5 className="about-page-heading">Educational Details</h5>
                        <div className="education-container">
                            <div className="education-card-section">
                                <div className="d-flex education-card graduation-card">
                                    <div className="education-card-body card">
                                        <div className="animate-card">
                                            <div className="card-body">
                                                <h5 className="card-title">B.Tech</h5>
                                                <h6 className="card-sub-title">[ 2017-2020 ]</h6>
                                                <p className="branch-name">Information Technology</p>
                                                <p className="collg-name">Govt. College Of Engineering & Ceramic Technology</p>
                                                <p className="grade-style">Grade: 77.20%</p>
                                            </div>
                                        </div>
                                        <div className="card-body-node left-node"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="education-card-section">
                                <div className="d-flex education-card diploma-card">
                                    <div className="education-card-body card">
                                        <div className="card-body">
                                            <h5 className="card-title">Diploma Engineering</h5>
                                            <h6 className="card-sub-title">[ 2014-2017 ]</h6>
                                            <p className="branch-name">Computer Science & Technology</p>
                                            <p className="collg-name">Central Calcutta Polytechnic</p>
                                            <p className="grade-style">Grade: 76.10%</p>
                                        </div>
                                        <div className="card-body-node right-node"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="education-card-section">
                                <div className="d-flex education-card hs-card">
                                    <div className="education-card-body card">
                                        <div className="card-body">
                                            <h5 className="card-title">Higher Secondary</h5>
                                            <h6 className="card-sub-title">[ 2012-2014 ]</h6>
                                            <p className="branch-name">Science</p>
                                            <p className="collg-name">Dasghara High School</p>
                                            <p className="grade-style">Grade: 65.60%</p>
                                        </div>
                                        <div className="card-body-node left-node"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="education-card-section">
                                <div className="d-flex education-card secondary-card">
                                    <div className="education-card-body card">
                                        <div className="card-body">
                                            <h5 className="card-title">Secondary Education</h5>
                                            <h6 className="card-sub-title">[ 2006-2012 ]</h6>
                                            <p className="branch-name">General Subjects</p>
                                            <p className="collg-name">Maharampur Matilal Vidyamandir</p>
                                            <p className="grade-style">Grade: 80.42%</p>
                                        </div>
                                        <div className="card-body-node right-node"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="vl"></div>
                        </div>
                    </div>
                </div>

                <div className="hobby-details-section mt-3">
                    <div className="container">
                        <h5 className="about-page-heading">Hobbies</h5>
                        <div className="hobby-card">
                            <div className="card-group">
                                <div className="card">
                                    <img src={PaintingIcon} className="card-img-top" alt="frontend"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Painting</h5>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src={ProgrammingIcon} className="card-img-top" alt="php-wordpress"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Programming</h5>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src={MoviesIcon} className="card-img-top" alt="react"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Watching Movies</h5>
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