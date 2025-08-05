import React from 'react'
import "./About.css";

const About = () => {
	return (
		<>
			<div className='about-content'>
				<div className='container d-flex flex-column justify-content-center align-items-center text-white'>
					<h1>ABOUT COMPONENT</h1>
					<div className='d-flex pt-3 justify-content-center align-items-center'>
						<div className='line me-3'> </div>
						<i className="fa-solid fa-star text-white"></i>
						<div className='line ms-3'> </div>
					</div>
					<div className='pt-3'>
<div className='row'>
	<div className='col-lg-6 space1 '>
		Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
	</div>
	<div className='col-lg-6 space2 '>
		Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
	</div>
</div>
</div>
				</div>
			</div>
		</>
	)
}

export default About