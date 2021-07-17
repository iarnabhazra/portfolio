import React from 'react'
import './web.css'
function Web() {
    return (
        <div className="web">
            <div className="web__option">
                <a href="#projects">
                    <i className="fi-rr-briefcase option__icon"></i>
                    Projects
                </a>
            </div>
            <div className="web__option">
                <a href="#Skills">
                    <i className="fi-rr-briefcase  option__icon"></i>
                    Skills
                </a>
            </div>
            <div className="web__option">
                <a href="#Work">
                    <i className="fi-rr-briefcase  option__icon"></i>
                    Work
                </a>
            </div>
            <div className="web__option">
                <a href="#Contact">
                    <i className="fi-rr-briefcase  option__icon"></i>
                    Contact
                </a>
            </div>
        </div>
    )
}

export default Web
