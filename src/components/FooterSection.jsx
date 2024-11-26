import React from "react";
import './FooterSection.css';

const FooterSection = () => {
    return (
        <footer>
            <div className="footer-box">
                <div className="left-section">
                    <img 
                        src="https://img.freepik.com/free-vector/creative-computer-logo-template_23-2149199475.jpg" 
                        alt="Cybercell Logo" 
                        className="footer-logo" 
                    />
                    <h3>Cybercell</h3>
                </div>
                <div className="line"></div>
                <div className="right-section">
                    <h3>Reach us at: </h3>
                    <div>
                        <span><a href="#">LinkedIn</a></span>
                        <span><a href="#">Instagram</a></span>
                        <span><a href="#">Gmail</a></span>
                        <span><a href="#">Facebook</a></span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
