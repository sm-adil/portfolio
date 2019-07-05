import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Header() {
  return (		
        <header>
            <div className="container">
				<img className="logo" src="/images/logo.svg" alt="SMA." />
				<nav>
					<ul>
						<li><AnchorLink href='#skills'>Skills</AnchorLink></li>
						<li><AnchorLink href='#projects'>Projects</AnchorLink></li>
						<li><AnchorLink href='#contact'>Contact</AnchorLink></li>
					</ul>
				</nav>
            </div>
        </header>
    )
}
