import React, { Component } from 'react'
import ProjectCard from './ProjectCard'

const projectData = {
  projects:
    [
        
      {
        "id": 1,
        "title": "Tutor.co: blogging web app",
        "link": `http://tutor-co.000webhostapp.com/`,
        "description": "A assignment management website for a modernized institution that take cares of every aspect of learning including exam preparation, overcoming the weaknesses & skill enhancement.",
        "image_url": `/images/projects/tutor.jpg`,
        "tags": ['HTML5', 'CSS3', 'PHP', 'MySQLi']
      },
      {
            "id": 2,
            "title": "Trawell: android app",
            "link": `https://github.com/mohammed-adil/Trawell`,
            "description": "A travell guider android application targeted for a local area, using PHP for backend to retrieve data from database.",
            "image_url": `/images/projects/trawell.jpg`,
            "tags": ['Android', 'PHP', 'MySQLi']
        },
        {
          "id": 3,
          "title": "GLUG PACE Official website",
          "link": `https://mohammed-adil.github.io/glugpace/`,
          "description": "Official website for GLUG PACE which is a group of people who works for Free Software Movement Karnataka.",
          "image_url": `/images/projects/glugpace.jpg`,
          "tags": ['HTML5', 'CSS3', 'blog', 'static-site']
        }
  ]
}

class Projects extends Component {
  state = {
    projects: projectData.projects
  }
  render() {
    return (
      <section className="projects" id="projects">
        <div className="container">
          <h2>My Projects</h2>
            <ProjectCard projects={this.state.projects}/>
        </div>
      </section>
    )
  }
}

export default Projects