import React from 'react'
import logo from "../assets/images/astronout.png"
import logo1 from "../assets/images/astronout1.png"
import bg from "../assets/images/bg.jpg"
import Navbar from './Navbar'
import "../styles.css"

function Header() {
  return (
   <>
   <div id='home' style={{backgroundImage: `url(${bg})`}} className=' bg-center bg-cover bg-no-repeat h-screen flex flex-col '>
    <Navbar/>
    <div className="wrapper flex justify-between items-center h-screen w-full px-20 lg:justify-center lg:px-6">
      <div className="content lg:text-center">
        <h1 className='text-white text-5xl font-bold'>Hi! I'm Roman</h1>
        <p className='text-white py-4 max-w-lg '>I'm  a front-end developer with a passion for creating beautiful and functional websites. My love for technology and design began at a young age, and I've been honing my skills ever since.
          As a front-end developer, I'm dedicated to crafting elegant user interfaces that engage and delight users. I enjoy working with HTML, CSS, and JavaScript to bring designs to life and create seamless user experiences. I'm always on the lookout for new technologies and techniques to improve my skills and stay ahead of the curve.
          </p>
      </div>
      <div className="image banner-astronout lg:hidden absolute w-[300px] flex ">
      <img className='w-96 ast-img' src={logo1} alt="" />
    
      </div>
      <div className="image banner-astronout1 lg:hidden absolute w-[300px] flex ">
     
      <img className='w-96 ast-img' src={logo} alt="" />
      </div>
   
    </div>
   </div>
   </>
  )
}

export default Header