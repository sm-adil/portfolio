const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <h3>Let's work together!</h3>
        <p>
          If you’d like to reach out about a project or to chat, just drop me a
          message below{' '}
          <span role='img' aria-label='links'>
            👇
          </span>
        </p>
        <div className='social-media' id='contact'>
          <a href='https://www.github.com/sm-adil'>
            <img src='images/github.svg' alt='github' />
          </a>
          <a href='https://twitter.com/smadil_'>
            <img src='images/twitter.svg' alt='twitter' />
          </a>
          <a href='https://www.linkedin.com/in/sm-adil'>
            <img src='images/linkedin.svg' alt='linkedIn' />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
