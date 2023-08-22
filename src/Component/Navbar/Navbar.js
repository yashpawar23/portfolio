import React from 'react'
import './Navbar.css'
import {  Link } from 'react-scroll'

const Navbar = () => {
    return (
        <>
            <div className='Navbar_wrapper'>
                <div className='navbar_left'>
                    <p className='navbar_name'>Portfolio</p>
                </div>


                <div className='navbar_right'>
                    <div className="n-list">
                        <ul>
                            <Link spy={true} to="Navbar" smooth={true} activeClass='activeClass'><li>Home</li></Link>
                            <Link spy={true} to="Services" smooth={true}><li>Services</li></Link>
                            <Link spy={true} to="Experience" smooth={true}><li>Experience</li></Link>
                            <Link spy={true} to="Portfolio" smooth={true}><li>Portfolio</li></Link>
                            <Link spy={true} to="Testimonials" smooth={true}><li>Testimonials</li></Link>

                        </ul>
                    </div>

                </div>
                     
                <Link spy={true} to="inputForm" smooth={true}>
                                <button className='contactus-btn'>Contact us</button>
                 </Link>

            </div>

        </>

    )
}

export default Navbar