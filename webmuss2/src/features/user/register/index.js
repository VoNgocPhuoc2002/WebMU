// src/Register.js
import React from 'react';
import './styles.scss';

const Register = () => {
  return (
    <div className="register-container">
      <form className="register-form">
        <h1>Register</h1>
        <p>Sign up using your email address or social media account</p>
        
        <div className="form-group">
          <input type="email" placeholder="vongocphuocit2002@gmail.com" className="email-input" />
        </div>
        
        <div className="form-group">
          <input type="email" placeholder="vongocphuocit2002@gm" className="email-confirm-input" />
        </div>
        
        <div className="form-group">
          <input type="password" placeholder="Password" className="password-input" />
        </div>
        
        <div className="form-group captcha-group">
          <input type="text" placeholder="Captcha" className="captcha-input" />
          <img src="captcha-image-url" alt="captcha" className="captcha-image" />
        </div>
        
        <div className="form-group">
          <input type="checkbox" id="age-check" />
          <label htmlFor="age-check">I am 16 years of age or older.</label>
        </div>
        
        <div className="form-group">
          <input type="checkbox" id="terms-check" />
          <label htmlFor="terms-check">I agree to the <a href="#">Terms of Service</a> and the <a href="#">Privacy Policy</a>.</label>
        </div>
        
        <div className="form-group">
          <input type="checkbox" id="newsletter-check" />
          <label htmlFor="newsletter-check">Yes, I would like to receive newsletters from WEBZEN.</label>
        </div>
        
        <button type="submit" className="submit-button">Create</button>
      </form>
      
      <div className="social-login">
        <p>or</p>
        <div className="social-buttons">
          <button className="social-button facebook">Facebook</button>
          <button className="social-button google">Google</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
