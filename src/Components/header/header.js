import React, {useState } from 'react'
import Mobile from './mobile/mobile';
import Web from './web/web'
import './header.css'
function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="header">
            
            <div className="logo">Arnab Hazra</div>
            <div className="menu">
                <div className="menu__web">
                    <Web />
                </div>
                <div className="menu__mobile">
                    <div>
                        <div className="menu__mobile-icon" onClick={() => setIsOpen(!isOpen)}>
                            <i className="fi-rr-apps"></i>
                        </div>
                        {isOpen && <Mobile setIsOpen={setIsOpen} isOpen={isOpen} />}
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default Header;
