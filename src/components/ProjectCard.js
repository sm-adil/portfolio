import React from 'react'
import { Img } from 'react-progressive-loader'

const ProjectCard = ({projects}) => {
  const projectList = projects.length ? (
    projects.map(project => {
      return (
        <div className="project" key = {project.id}>
            <div className="project-image">
                <Img
                  bgColor='#1614113d'
                  src={project.image_url}
                  alt="Project Preview"
                />
            </div>
            <div className="project-data">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul>          
                  {project.tags.map(function(tag){
                    return <li key={tag}>{tag}</li>
                  })}
                </ul>
                <a href={project.link} className="button">View Online</a>
            </div>
        </div>
      )
    })
  ) : (
    <p>No projects to show!</p>
  )
  return (
    <React.Fragment>
      { projectList }
    </React.Fragment>
  )
}
export default ProjectCard