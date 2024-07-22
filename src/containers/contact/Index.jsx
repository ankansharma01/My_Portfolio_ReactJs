import React from "react";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import './styles.scss'
import {Animate} from 'react-simple-animate'

const Contact = () => {
const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [message,setMessage]=useState("")

const handleSubmit =(e)=> {
  e.preventDefault();

  const serviceId='service_vmie1bo'
  const templateId='template_0y1h1cn'
  const publicKey='bQI9nRxRuJzBE9oN6'

  const templateParams = {
    from_name: name,
    from_email: email,
    to_name:'Ankan Sharma',
    message: message,
  };
  
  emailjs.send(serviceId,templateId,templateParams,publicKey)
   .then((response) => { console.log('Email sent successfully',response);
  setName('');
   setEmail('')
  setMessage('')})
.catch((error) => {
  console.log('Error sending email :',error)
});
}

  return (
    <div className="form1">
    <div className="emailForm">
    <Animate
            play
            duration={1}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
    <form onSubmit={handleSubmit} >
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        cols="30"
        rows="10"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Description....."
    >

    </textarea>
    <button type="submit">Send Email</button>
   
    </form>
    </Animate>
    </div>
    </div>
  );
};

export default Contact;
