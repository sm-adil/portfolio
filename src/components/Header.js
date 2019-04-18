import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Header() {
  return (
    <section className="hero-section">
		  <div className="container">
			  <div className="hero-img">
				  <img src="/images/user.svg" alt="" />
			  </div>
			  <div className="hero-inner">
				  <h1 className="hero-title">Hi, I'm Adil</h1>
				  <p className="hero-paragraph">I’m an free software <strong>hactivist</strong>, <strong>developer</strong> and <strong>designer</strong> from Mangalore, India. I build free and open source projects and encourage others to use free software.</p>
				  <AnchorLink className="button" href="#skills">LEARN MORE</AnchorLink>
			  </div>
		  </div>
	  </section>
  )
}
