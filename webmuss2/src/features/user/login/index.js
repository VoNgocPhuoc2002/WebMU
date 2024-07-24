// src/Login.js
import React from 'react';
import './styles.scss';

const Login = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <h1>Login</h1>
        <p>Sign in using your email address</p>

        <div className="form-group">
          <input type="email" placeholder="Email" className="email-input" />
        </div>

        <div className="form-group">
          <input type="password" placeholder="Password" className="password-input" />
        </div>

        <div className="form-group">
          <input type="checkbox" id="remember-me-check" />
          <label htmlFor="remember-me-check">Remember me</label>
        </div>

        <button type="submit" className="submit-button">Login</button>
        
        <div className="forgot-password">
          <a href="#">Forgot your password?</a>
        </div>
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

export default Login;
