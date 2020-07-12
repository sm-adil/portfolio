import React from 'react'
import xd from '../static/images/skills/xd.svg'
import html from '../static/images/skills/html.svg'
import css from '../static/images/skills/css.svg'
import js from '../static/images/skills/js.svg'
import reactjs from '../static/images/skills/react.svg'

const Skills: React.FC = () => {
  return (
    <section className='skills' id='skills'>
      <div className='container'>
        <h2>My Skills</h2>
        <p>
          Over 2.5 years of design and development experience using <br /> these
          technologies.
        </p>
        <div className='programs'>
          <img src={xd} alt='Adobe Xd' />
          <img src={html} alt='HTML' />
          <img src={css} alt='CSS' />
          <img src={js} alt='JavaScript' />
          <img src={reactjs} alt='React Js' />
        </div>
      </div>
    </section>
  )
}

export default Skills
