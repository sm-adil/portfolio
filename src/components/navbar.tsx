import React from 'react'
import logo from '../static/images/logo.svg'

const Header: React.FC = () => {
  return (
    <header>
      <div className='container'>
        <img className='logo' src={logo} alt='SMA.' />
        <nav>
          <ul>
            <li>
              <a href='#skills'>Skills</a>
            </li>
            <li>
              <a href='#projects'>Projects</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header