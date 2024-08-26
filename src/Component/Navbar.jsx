import React from 'react'
import './Navbar.css'
import icon1 from '../assets/.png'
import icon2 from '../assets/tools.png'
import icon3 from '../assets/Vector.png'
import icon4 from '../assets/Ellipse 53.png'
const Navbar = () => {
  return (
    <>
 <div className='nav_bar'>
       <div className='nav-content-1'>
        <img className='company-logo-img' src='https://deepthought.education/assets/images/logo/logo.svg'></img>
       </div>
       <div className='nav-content-2 d-flex'>
          <div className='icon-div'>
            <img className='nav-icon-img' src={icon1}></img>
          </div>
          <div className='icon-div'>
            <img className='nav-icon-img' src={icon2}></img>
          </div>
          <div className='bell-img-div'>
          <img className='bell-img nav-icon-img' src={icon3}></img>
          <div className='red-circle'></div>
          </div>
          <div className='icon-div-1'>
            <img className='person-img' src={icon4}></img>
          </div>
          <div className=''>
          <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
       </div>
       </div>
    </>
   
  )
}

export default Navbar
