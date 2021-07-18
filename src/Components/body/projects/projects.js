import React from 'react';
import ProjectCard from './project_card/project_card'
import './projects.css'

function Projects() {
    const projectsData = [
        {
            id: 1,
            title: 'Random Project 1',
            descption: 'This is a random project name. This is a random project. I have given the description in this project to make things similar to what it would look in real life.',
            demo: "www.google.com",
            github: "www.github.com/iarnabhazra",
            tags: ['ReactJs', 'Node.js', 'Spring Boot', 'Java', 'JavaScript'],
            image: '../../../assets/Project.png'
        },
        {
            id: 2,
            title: 'Random Project 1',
            descption: 'This is a random project name. This is a random project. I have given the description in this project to make things similar to what it would look in real life.',
            demo: "www.google.com",
            github: "www.github.com/iarnabhazra",
            tags: ['ReactJs', 'Node.js', 'Spring Boot', 'Java', 'JavaScript'],
            image: '../../../assets/Project.png'
        },
        {
            id: 3,
            title: 'Random Project 1',
            descption: 'This is a random project name. This is a random project. I have given the description in this project to make things similar to what it would look in real life.',
            demo: "www.google.com",
            github: "www.github.com/iarnabhazra",
            tags: ['ReactJs', 'Node.js', 'Spring Boot', 'Java', 'JavaScript'],
            image: '../../../assets/Project.png'
        },
        {
            id: 4,
            title: 'Random Project 1',
            descption: 'This is a random project name. This is a random project. I have given the description in this project to make things similar to what it would look in real life.',
            demo: "www.google.com",
            github: "www.github.com/iarnabhazra",
            tags: ['ReactJs', 'Node.js', 'Spring Boot', 'Java', 'JavaScript'],
            image: '../../../assets/Project.png'
        }

    ];

    return (
        <div className="projects">
            <label className="section__title"> Projects</label> 
            <div className="project__cards">
                { 
                    projectsData.map( (project) => { 
                        return (
                            <div className="project__card" key={project.id}>
                                <ProjectCard />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Projects
