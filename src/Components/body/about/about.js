import React from 'react'
import Developer  from '../../../assets/developer.svg'
import './about.css'
function About() {
    const socialMediaLinks = [
        {
           platform: 'Facebook',
           icon: require('../../../assets/facebook.svg').default,
           link: "https://www.facebook.com/harnab" 
        },
        {
            platform: 'Leetcode',
            icon: require('../../../assets/leetcode.svg').default,
            link: "https://www.leetcode.com/iarnabhazra"
        },
        {
            platform: 'Linkedin',
            icon: require('../../../assets/linkedin.svg').default,
            link: "https://www.linkedin.com/in/iarnabhazra"
        },
        {
            platform:"Github",
            icon: require('../../../assets/github.svg').default,
            link: "https://github.com/iarnabhazra"
        },
        {
            platform:"HackerEarth",
            icon: require('../../../assets/hackerrank.svg').default,
            link: "https://www.hackerearth.com/@iarnabhazra"
        },
        {
            platform:"Gmail",
            icon: require('../../../assets/gmail.svg').default,
            link: "mailto:harnab28@gmail.com"
        }
    ]
    
    return (
        <div className="about">
            <div className="about__top">
                <div className="about__top-info">Hello Visitor! 👋 <br/>I am a  <span> Random Guy 😉</span> <br /> Who Loves to Code <br/>Interested in Building new Application</div>
                <div className="about__top-photo">
                    <object type="image/svg+xml" data={Developer} className="picture">svg-animation</object>
                </div>
            </div>
            <div className="about__bottom">
                {socialMediaLinks.map(social => {
                    return(
                        <a href={social.link} key={social.platform}>
                            <div className="social__media">
                                <img src={social.icon} alt={social.platform} className="social__icon" />
                            </div>
                        </a>
                    );
                })}

            </div>
        </div>
    )
}

export default About
