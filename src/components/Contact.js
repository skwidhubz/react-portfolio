import React, { useState } from 'react';
import '../styles/contact.css';

export default function Contact () {

  const [notificationText, setNotificationText] = useState('');
  const onBlurHandler = (e) => {
    if (e.target.value == ''){
      if (e.target.id == 'name'){
        setNotificationText('Name is required..')
      } else if (e.target.id== 'email'){
        setNotificationText('Email is requred..')
      } else if (e.target.id == 'message'){
        setNotificationText('Message is requred..')
      }
    }};

// create use states for text input feilds

const handleSubmit = (event) => {
  event.preventDefault();
  }

  
  return (
    <div className='main-container'>
      <h2 id='notification-header'>{notificationText}</h2> 
    <section className="contact">
      <h2>Contact</h2>
      <form onSubmit={handlesubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" required onBlur={onBlurHandler}/>
        
        <label htmlFor="email">Email</label>
        <input type="email" id="email" required onBlur={onBlurHandler}/>
        
        <label htmlFor="message">Message</label>
        <textarea id="message" required value={something} onChange={something} onBlur={onBlurHandler}></textarea>
        
        <input type="submit" value="Submit" onChange={handleOnChange}/>
      </form>
    </section>
    </div>
  );
};


