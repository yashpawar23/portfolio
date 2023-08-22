import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-main'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="rgb(92,178,239)" fill-opacity="1" d="M0,64L120,90.7C240,117,480,171,720,176C960,181,1200,139,1320,117.3L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
            </svg>
            <p className='email'>yashpawar00@gmail.com</p>
            <p className='contactNo'>91+ 8850552415</p>
        </div>
    )
}

export default Footer