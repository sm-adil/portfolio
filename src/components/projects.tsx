import React from 'react'
import { Img } from 'react-progressive-loader'
import projectsData from '../projects-data.json'

const Projects: React.FC = () => {
  if (projectsData.length === 0) return null

  return (
    <section className='projects' id='projects'>
      <div className='container'>
        <h2>My Projects</h2>
        {projectsData.map(project => (
          <div className='project' key={project.id}>
            <div className='project-image'>
              <Img bgColor='#1614113d' src={project.imageUrl} alt='Preview' />
            </div>
            <div className='project-data'>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul>
                {project.tags &&
                  project.tags.map(tag => <li key={tag}>{tag}</li>)}
              </ul>
              <a href={project.link} className='button'>
                View{' '}
                {project.link.indexOf('https://github.com') > -1
                  ? 'Code'
                  : 'Online'}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
