import React from 'react'
import"./Footer.css";

const Footer = () => {
	return (
		<>

			<div className='footer-content Fcolor'>
				<div className='container text-white  px-0 text-center'>
					<div className='row g-5'>
						<div className='col-lg-4'>
							<h3>LOCATION</h3>
							<p>2215 John Daniel Drive</p>
							<p className='mt-3'>Clark, MO 65243</p>
						</div>
						<div className='col-lg-4'>
							<h3>AROUND THE WEB</h3>
<div className="justify-content-center d-flex align-items-center flex-wrap ">
	<i className="fa-brands fa-facebook-f me-3 icon"></i>
	<i className="fa-brands fa-twitter me-3 icon"></i>
	<i className="fa-brands fa-linkedin-in me-3 icon"></i>
	<i className="fa-solid fa-globe icon"></i>
</div>
						</div>
						<div className='col-lg-4'>
							<h3>ABOUT FREELANCER</h3>
							<p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
						</div>
					</div>
				</div>
			</div>
			<div className='text-center py-4 down text-white'>
				<p>Copyright © Your Website 2025</p>
			</div>

		</>
	)
}

export default Footer