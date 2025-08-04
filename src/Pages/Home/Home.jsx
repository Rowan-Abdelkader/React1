import React from 'react'
import"./Home.css"
import myImg from"./../../assets/img/avataaars.svg"
const Home = () => {
  return (
<>
<div className='Hbody'>
	<div className="d-flex justify-content-center">
  <img src={myImg} alt="" />
</div>
<h1 className=' text-center text-white pb-3'>START FRAMEWORK</h1>
<div className='d-flex justify-content-center align-items-center pb-3'>
	<div className='line me-3'> </div>
	<i className="fa-solid fa-star text-white"></i>
	<div className='line ms-3'> </div>
</div>
<p className='text-center text-white pb-5'>Graphic Artist - Web Designer - Illustrator</p>
</div>


</>
)
}

export default Home