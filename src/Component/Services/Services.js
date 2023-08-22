import React from 'react'
import './Services.css'
import Resume from '../Services/Resume/yash_pawar_cv.pdf'
import Html from './Images/html.svg'
import Css from './Images/css.svg'
import Js from './Images/js.svg'
import ReactImg from './Images/react.svg'
import Node from './Images/node.svg'
import Netlify from './Images/netlify.svg'


const Services = () => {
  return (
    <div className='Services-wrapper' id='Services'>

      <div className='services-left'>
        <span>My Awesome Services</span>
        <p>Hello  I am yash pawar. <br />
          I am a software devloper,with a passion for coding and problem solving. <br />
          I am well acquainted with HTML,CSS, Javascript,React.js and  Node.js. </p>
        <a href={Resume} download>
          <button className='dwdResume-btn'>Download</button>
        </a>
      </div>


      <div className='services-right'>
        <div>
        <img src={Html} alt='error' className='lan-icon'/>
        <p>HTML</p>
        </div>

        <div>
        <img src={Css} alt='error'className='lan-icon'/>
        <p>CSS</p>
        </div>

        <div>
        <img src={Js} alt='error'className='lan-icon'/>
        <p>Java Script</p>
        </div>

        <div>
        <img src={ReactImg} alt='error'className='lan-icon'/>
        <p>React.js</p>
        </div>

        <div>
        <img src={Node} alt='error'className='lan-icon'/>
        <p>Node.js</p>
        </div>

        <div>
        <img src={Netlify} alt='error'className='lan-icon'/>
        <p>Netlify</p>
        </div>
      </div>

    </div>
  )
}

export default Services