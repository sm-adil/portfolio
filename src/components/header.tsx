import React from 'react'
import hero from '../static/images/user.svg'
import { Img } from 'react-progressive-loader'

const Header: React.FC = () => {
  return (
    <section className='hero-section'>
      <div className='container'>
        <div className='hero-column'>
          <Img bgColor='#161E2A' src={hero} alt='Hero' />
        </div>
        <div className='hero-column'>
          <h1 className='hero-title'>
            Hi, I'm Adil{' '}
            <span role='img' aria-label='Wave'>
              👋
            </span>
          </h1>
          <p className='hero-paragraph'>
            I’m a free software <strong>hacktivist</strong>,{' '}
            <strong>developer</strong> and <strong>designer</strong> from
            Bangalore, India{' '}
            <span role='img' aria-label='Indian Flag'>
              🇮🇳
            </span>
            . I build free and open source projects and also focus on UI/UX
            designing and development.
          </p>
          <a className='button' href='#skills'>
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}

export default Header
