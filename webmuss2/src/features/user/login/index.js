import React, { useState } from 'react';
import "./styles.scss";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="wz-member">
      <div className="wz-cont">
        <div className="login inner-cont">
          <div className="title">
            <h2>Login</h2>
            <p className="desc">Sign in using your email address or social media account</p>
          </div>
          <div className="frm-cont">
            <form onSubmit={handleSubmit}>
              <fieldset>
                <ul className="frm-list">
                  <li>
                    <span className="inpbox">
                      <input
                        className="ipt"
                        id="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="Email">Email</label>
                    </span>
                  </li>
                  <li>
                    <span className="inpbox">
                      <input
                        className="ipt"
                        id="Password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="Password">Password</label>
                    </span>
                  </li>
                </ul>
                <div className="btn-auth">
                  <button type="submit" className="btn-type btn-submit">
                    Login
                  </button>
                </div>
              </fieldset>
            </form>
            <div className="title nonepd">
              <h2 className="tit-half">or</h2>
              <p className="desc">Sign in quickly with your social media account</p>
            </div>
            <div className="btn-auth double">
              <button className="btn-type btn-facebook" onClick={() => { /* Handle Facebook login */ }}>
                <span>Facebook</span>
              </button>
              <button className="btn-type btn-google" onClick={() => { /* Handle Google login */ }}>
                <span>Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
