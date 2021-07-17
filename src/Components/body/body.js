import React from 'react'
import About from './about/about';
import Contacts from './contacts/contacts';
import Skills from './skills/skills'
import Work from './work/work';
import Projects from './projects/projects';
import './body.css';
const Body = () => {
    return (
        <div className="body">
             <section className="" id="about"> <About /> </section>
             <section className="" id="projects"> <Projects /> </section>
             <section className="" id="skills"> <Skills /> </section>
             <section className="" id="work"> <Work /> </section>
             <section className="" id="contacts"> <Contacts /> </section>
        </div>
    )
}

export default Body
