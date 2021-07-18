import React from 'react'
import './mobile.css'
function Mobile({isOpen, setIsOpen}) {
    return (
        <div className="mobile">
            <div className="mobile__close" onClick={() => setIsOpen(!isOpen)}>
                <i className="fi-rr-cross"></i>
            </div>
            <div className="mobile__option" >
                <a href="#projects" onClick={() => setIsOpen(!isOpen)}>
                    <i className="fi-rr-briefcase option__icon"></i>
                    Projects
                </a>
            </div>
            <div className="mobile__option" >
                <a href="#Skills" onClick={() => setIsOpen(!isOpen)}>
                    <i className="fi-rr-briefcase  option__icon"></i>
                    Skills
                </a>
            </div>
            <div className="mobile__option">
                <a href="#Work" onClick={() => setIsOpen(!isOpen)} >
                    <i className="fi-rr-briefcase  option__icon"></i>
                    Work
                </a>
            </div>
            <div className="mobile__option">
                <a href="#Contact" onClick={() => setIsOpen(!isOpen)}>
                    <i className="fi-rr-briefcase  option__icon"></i>
                    Contact
                </a>
            </div>

        </div>
    )
}

export default Mobile
