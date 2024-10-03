import React from "react";
import BannerTwo from '../asset/contact-me-two.webp';
import contactIcon from '../asset/contact-me.webp';
import ContactFlyer from '../asset/contact-flyer-tansparent.webp'

export default function Contact(){
    return(
        <div className="app-body">
            <div className="main-content">
                <div className="contact-banner-section">
                    <div className="container">
                        <img src={BannerTwo} alt="banner" className="contact-me-banner"/>
                        <div className="box">
                            <div className="flyer-container">
                                <img src={ContactFlyer} className="contact-me-flyer" alt="image"/>
                            </div>
                            <div style={{textAlign:"center"}}>
                                <h3 className="contact-heading-txt">Connect With Me</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-me-links-section">
                    <div className="container">
                        <div className="contact-links">
                            
                        </div>
                        <div className="image-section">
                            <img src={contactIcon} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}