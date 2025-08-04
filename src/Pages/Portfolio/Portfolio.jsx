import React, { useState } from 'react'
import "./Portfolio.css"
import myImg from "./../../assets/img/poert1.png"
import myImg2 from "./../../assets/img/port2.png"
import myImg3 from "./../../assets/img/port3.png"

const imgList = [myImg, myImg2, myImg3 ,myImg, myImg2, myImg3]


const Portfolio = () => {

	const [selectedImage, setSelectedImage] = useState(null)

	const clickedImage = (img) => {
		setSelectedImage(img)
	}

	const handleClose = () => {
		setSelectedImage(null);
	}

	return (
		<>
			<div className='d-block m-auto text-center contact-body'>
				<h1>PORTFOLIO COMPONENT</h1>
				<div className='d-flex justify-content-center align-items-center '>
					<div className='linee me-3'> </div>
					<i className="fa-solid fa-star star-color"></i>
					<div className='linee ms-3 '> </div>
				</div>
				<div className="container">
					<div className="row  mb-5">
						{imgList.map((img, index) => (
							<div  key={index} className="col-md-4 pt-4 pb-3 pe-4 d-flex">
								<Card image={img} handlling={clickedImage} />
							</div>
						))}
					</div>
				</div>


				{
					selectedImage &&
					<div className='model' onClick={handleClose}>
						<img src={selectedImage} alt="" onClick={(e) => e.stopPropagation()} />
					</div>
				}
			</div>
		</>
	)
}

function Card({ image, handlling }) {
	return (
		<div className='my-img position-relative overflow-hidden rounded-3' >
			<img src={image} className=' rounded-3 p-0 w-100' alt="" />
			<div className='layer position-absolute  d-flex justify-content-center align-items-center' onClick={() => handlling(image)} >
				<i className=' text-white fa-solid fa-plus fa-6x'></i>
			</div>
		</div>
	)
}



export default Portfolio
