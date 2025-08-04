import React from 'react'
import "./Contact.css"
import { useState } from 'react';
const Contact = () => {

	const [formtData, setformtData] = useState({
		userName: "",
		userAge: "",
		userEmail: "",
		userPassword: ""
	});

	const handlechange = (e) => {
		const { id, value } = e.target;
		setformtData((param) => ({
			...param,
			[id]: value
		}))
	}


	return (
		<>
			<div className=' d-block m-auto text-center contact-body '>
				<h1>CONTATCT SECTION</h1>
				<div className='d-flex justify-content-center align-items-center pb-5'>
					<div className='linee me-3'> </div>
					<i className="fa-solid fa-star star-color"></i>
					<div className='linee ms-3 '> </div>
				</div>
				<div className="container py-5">
					<form className="w-50 mx-auto">

						<div className="floating-label-group pb-2 position-relative">
							<input onChange={handlechange} type="text" id="userName" placeholder=" userName " value={formtData.userName}/>
							<label className={`${formtData.userName ? "label-moved" : "label-hidden"}`}>userName:</label>

						</div>


						<div className="floating-label-group pb-2 position-relative">
							<input onChange={handlechange} type="text" id="userAge" placeholder=" userAge " value={formtData.userAge} />
							<label className={`${formtData.userAge? "label-moved" : "label-hidden"}`}>userAge:</label>

				</div>


				<div className="floating-label-group pb-2 position-relative">
					<input onChange={handlechange} type="email" id="userEmail" placeholder=" userEmail " value={formtData.userEmail} />
					<label className={`${formtData.userEmail ?"label-moved" : "label-hidden"}`}>userEmail:</label>

			</div>


			<div className="floating-label-group pb-2 position-relative">
				<input onChange={handlechange} type="password" id="userPassword" placeholder=" userPassword " value={formtData.userPassword} />
				<label className={`${formtData.userPassword ? "label-moved" : "label-hidden"}`}>userPassword:</label>

			</div>


			<div className="text-start">
				<button className="bt-color">Send Message</button>
			</div>
		</form >
				</div >

			</div >
		</>)
}

export default Contact