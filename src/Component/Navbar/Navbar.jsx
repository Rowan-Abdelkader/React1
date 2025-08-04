import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import "./Navbar.css"



const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg fixed-top py-3">
			<div className="container">
				<Link className="navbar-brand fs-2" to="/">START FRAMEWORK</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink className="nav-link  px-3" aria-current="page" to='/about'>ABOUT</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link  px-3" aria-current="page" to='/portfolio'>PORTFOLIO</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link  px-3" aria-current="page" to='/contact'>CONTACT</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>)
}

export default Navbar