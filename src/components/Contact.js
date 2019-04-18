import React from 'react'

export default function Contact() {
  return (
    <section className="contact">
		<div className="container">
			<h2>Contact Me</h2>
			<p>Want to talk to Me for any Projects or Queries? <br /> Let me know!.</p>
			<form className="contact-form">
				<div className="form-group">
					<label id="name-label" for="name">Name</label>
					<input type="text" id="name" className="form-control" placeholder="Enter Your name" required />	
				</div>

				<div className="form-group">
					<label id="email-label" for="email">Email address</label>
					<input type="email" className="form-control" id="email" placeholder="Enter Your Email" required />
				</div>
				<div className="form-group">
					<label for="comment">Message</label>
					<textarea className="form-control" placeholder="Enter Your Message" rows="7" id="comment" required></textarea>
				</div>
				<br />	
				
				<div className="btn-container">
					<button type="submit" id="submit" className="button">SUBMIT</button>	
				</div>				
			</form>
		</div>
	</section>
  )
}
