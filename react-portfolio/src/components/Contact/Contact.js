import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import '../../styles/Contact.css';

function Contact() {
  const [errorMessage, setErrorMessage] = useState('');
  const [formState, setFormState] = useState(
    {
       name: '',
        email: '', 
        message: '' 
      });

  
  const { name, email, message } = formState;

  
  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      
      console.log('Handle Form', formState);
    }
  };
  const handleSend = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };
  
  return (
    <section className="contactContainer">
      <h1>Contact Me</h1>
      <form className="contact-form" onSubmit={handleSend}>
        <div>
          <label htmlFor="name">Name:</label> <br></br>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>

        <div>
          <label htmlFor="email">Email address:</label> <br></br>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>

        <div>
          <label htmlFor="message">Message:</label> <br></br>
          <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>

        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;