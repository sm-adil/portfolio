import React from 'react'
import github from '../static/images/social-media/github.svg'
import twitter from '../static/images/social-media/twitter.svg'
import linkedIn from '../static/images/social-media/linkedin.svg'

const Footer: React.FC = () => {
  return (
    <footer>
      <div className='container'>
        <h3>Let's work together!</h3>
        <p>
          If you’d like to reach out about a project or to chat, just drop me a
          message at <a href='mailto: info@smadil.co'>info@smadil.co</a>
        </p>
        <div className='social-media' id='contact'>
          <a href='https://www.github.com/sm-adil'>
            <img src={github} alt='github' />
          </a>
          <a href='https://twitter.com/smadil_'>
            <img src={twitter} alt='twitter' />
          </a>
          <a href='https://www.linkedin.com/in/sm-adil'>
            <img src={linkedIn} alt='linkedIn' />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
