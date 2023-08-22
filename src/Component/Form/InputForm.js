import React from 'react'
import './Form.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const InputForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zavll4s', 'template_s53zgli', form.current, '66F6lRuRmZD9u3JPL')
      .then((result) => {
          console.log(result.text);
          alert("Message sent to shakifk1@gmail.com...thanks for Contacting us.");
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='inpur-wrapper' id='inputForm'>
      <div className='form-left'>
        <span>Get In Touch</span><br />
        <span className='contactMe-text'>Contact Me</span>
      </div>
      <div className='input-form-right'>
        <form ref={form} onSubmit={sendEmail}>
        <input type='name' placeholder='Name'  className='form-inputFields'/>
        <input type='email' placeholder='Email' className='form-inputFields'/>
        <textarea name="message" className="form-inputFields" placeholder='Message' />
        <button className='Send-btn'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default InputForm