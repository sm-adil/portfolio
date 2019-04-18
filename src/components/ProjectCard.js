import React from 'react'

const ProjectCard = ({projects}) => {
  const projectList = projects.length ? (
    projects.map(project => {
      return (
        <div className="project-card" key = {project.id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <ul>          
              {project.tags.map(function(tag){
                return <li key={tag}>{tag}</li>
              })}
          </ul>
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