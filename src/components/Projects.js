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
          "description": "A travell guider android application targeted for a local area, using PHP for backend to retrieve data from database.",
          "tags": ['HTML', 'CSS', 'blog', 'static-site']
        },
        {
          "id": 3,
          "title": "Portal",
          "link": `https://github.com/mohammed-adil/portal`,
          "description": "A travell guider android application targeted for a local area, using PHP for backend to retrieve data from database.",
          "tags": ['Python', 'Flask', 'MySQLi']
        },
      {
        "id": 4,
        "title": "react-todo",
        "link": `https://github.com/mohammed-adil/react-todo`,
        "description": "A travell guider android application targeted for a local area, using PHP for backend to retrieve data from database.",
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
      <div className="works">
        <h2>Some of my works.</h2>
        <div className="work-container">
          <ProjectCard projects={this.state.projects}/>
        </div>
      </div>
    )
  }
}

export default Projects