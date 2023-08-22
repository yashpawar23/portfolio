import React from 'react'
import { Link } from 'react-scroll'
import './Intro.css'
import Instagram from './Images/instagram (1).png'
import Linedin from './Images/linkedin (1).png'
import Github from './Images/github (1).png'
import Facebook from './Images/square-facebook.png'
import Frontend from './Images/computer-solid.png'
import Backend from './Images/database-solid.png'
import Engineer from './Images/gear-solid.png'


const Intro = () => {
  return (
    <div className='intro' id='inputForm'>
      <div className='intro-left'>
        <div className='name'>
          <span>Hello I Am</span>
          <span>Yash Vijay Pawar</span>
          <span>Frontend Devloper with Experienec in web designing and <br />Devlopment Producting The Quality Work</span>
        </div>
        <Link spy={true} to="Contact" smooth={true}><button className="button Hireme-button">Hire Me</button></Link>
        <div className='icons-wrapper'>
          <a href='https://www.instagram.com/yashpawar._23/?next=%2F' target='_blank'><img src={Instagram} alt='error' className='icons' /></a>
          <a href='https://www.linkedin.com/in/yash-pawar-5151171b2/' target='_blank'><img src={Linedin} alt='error' className='icons' /></a>
          <a href='https://github.com/yashpawar23' target='_blank'><img src={Github} alt='error' className='icons' /></a>
          <a href='https://github.com/yashpawar23' target='_blank'><img src={Facebook} alt='error' className='icons' /></a>
        </div>
      </div>
      <div className='intro-right'>

          <div className='slider slider1'>
            <img src={Frontend} alt='error' className='skills-icon' />
            <p>Frontend <br/>Devlopment</p>
            
          </div>

        <div className='slider slider2'>
          <img src={Backend} alt='error' className='skills-icon' />
            <span >Backend <br/>  Devlopment</span>
        </div>
  
        <div className='slider slider3'>
          <img src={Engineer} alt='error' className='skills-icon' />
            <span >Engineer</span>
        </div>
      </div>
    </div>
  )
}

export default Intro