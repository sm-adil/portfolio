import React, { Component } from 'react'
import ProjectCard from './ProjectCard'

const projectData = {
  projects:
    [
        {
            "id": 1,
            "title": "Trawell",
            "link": `https://github.com/mohammed-adil/Trawell`,
            "description": "A travell guider android application targeted for a local area, using PHP for backend to retrieve data from database.",
            "tags": ['Android', 'PHP', 'MySQLi']
        },
        {
          "id": 2,
          "title": "glug-pace.github.io",
          "link": `https://github.com/mohammed-adil/glug-pace.github.io`,
          "description": "Official website for GLUG PACE which is a group of people who works for Free Software Movement Karnataka.",
          "tags": ['HTML', 'CSS', 'blog', 'static-site']
        },
        {
          "id": 3,
          "title": "Portal",
          "link": `https://github.com/mohammed-adil/portal`,
          "description": "A simple blog application, developed using flask (a python library for used developing web applications).",
          "tags": ['Python', 'Flask', 'MySQLi']
        },
      {
        "id": 4,
        "title": "react-todo",
        "link": `https://github.com/mohammed-adil/react-todo`,
        "description": "A plain and simple practical representation of CRUD app done using REACT JS(JavaScript library).",
        "tags": ['React.js', 'todo','CRUD']
      }
  ]
}

class Projects extends Component {
  state = {
    projects: projectData.projects
  }
  render() {
    return (
      <section className="projects">
        <div className="container">
          <h2>My Projects</h2>
    			<div class="project-cards">
            <ProjectCard projects={this.state.projects}/>
          </div>
        </div>
      </section>
    )
  }
}

export default Projects