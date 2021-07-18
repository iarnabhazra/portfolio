import React from 'react'
import './project_card.css'
function ProjectCard() {
    return (
        <div className="card">
            <img src={require('../../../../assets/Project.png').default} alt="Avatar" className="project__image" />
            <div className="container">
                <h4><b>Jane Doe</b></h4> 
                <p>Interior Designer</p> 
            </div>
        </div>
    )
}

export default ProjectCard
