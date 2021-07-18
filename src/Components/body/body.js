import React from 'react'
import About from './about/about';
import Contacts from './contacts/contacts';
import Skills from './skills/skills'
import Work from './work/work';
import Projects from './projects/projects';
import Seperator from './seperator/seperator';
import './body.css';
const Body = () => {
    return (
        <div className="body">
             <section id="about"> <About /> </section>
            <Seperator />
             <section id="projects"> <Projects /> </section>
            <Seperator />

             <section id="skills"> <Skills /> </section>
             <Seperator />

             <section id="work"> <Work /> </section>
             <Seperator />
             <section id="contacts"> <Contacts /> </section>
        </div>
    )
}

export default Body
