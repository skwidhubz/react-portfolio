import React, { useState } from 'react';
import '../styles/contact.css';

export default function Contact () {

  const [notificationText, setNotificationText] = useState('');
  const onBlurHandler = (e) => {
    if (e.target.value === ''){
      if (e.target.id === 'name'){
        setNotificationText('Name is required..')
      } else if (e.target.id === 'email'){
        setNotificationText('Email is requred..')
      } else if (e.target.id === 'message'){
        setNotificationText('Message is requred..')
      }
    }};

// create use states for text input feilds

const handleSubmit = (event) => {
  event.preventDefault();
  console.log('submitted with:', name, email, message);
  window.alert('submitted with: ' 
  + name + ', '
  + email + ', and the message: '
  + message,
  )};

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const handleOnChangeName = (event) => {
    setName(event.target.value);
  }
  const handleOnChangeEmail = (event) => {
    setEmail(event.target.value);
  }
  const handleOnChangeMessage = (event) => {
    setMessage(event.target.value);
  }

  return (
    <div className='main-container'>
      <h2 id='notification-header'>{notificationText}</h2> 
    <section className="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" required value={name} onBlur={onBlurHandler} onChange={handleOnChangeName}/>
        
        <label htmlFor="email">Email</label>
        <input type="email" id="email" required value={email} onBlur={onBlurHandler} onChange={handleOnChangeEmail}/>
        
        <label htmlFor="message">Message</label>
        <textarea id="message" required value={message} onBlur={onBlurHandler} onChange={handleOnChangeMessage}></textarea>
        
        <input type="submit" value="Submit"/>
      </form>
    </section>
    </div>
  );
};


