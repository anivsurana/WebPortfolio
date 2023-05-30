import "./FooterStyles.css"

import React from 'react'
import {FaHome, FaPhone, FaMailBulk, FaGithub, FaFacebook, FaLinkedin} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div>
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                        <div>
                            <h4>Arlington, Texas</h4>
                        </div>
                    </div>
                    <div className="phone">
                        <FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                        <div>
                            <h4>+1 (682) 203-7381</h4>
                        </div>
                    </div>
                    <div className="email">
                        <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                        <div>
                            <h4>aniv.surana@gmail.com</h4>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <h4>About</h4>
                    <p>I am Aniv Surana, a student at the University of Texas at Arlington. I am majoring in Computer Science and an I'm a developer and tech enthusiast.</p>
                    <div>
                    <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                    <FaGithub size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                    <FaFacebook size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
