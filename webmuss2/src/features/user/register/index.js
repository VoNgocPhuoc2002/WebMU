// src/Register.js
import './styles.scss';
import React, { useState } from 'react';

const Register = () => {
    const [formData, setFormData] = useState({
        email: '',
        userName: '',
        password: '',
        captchaCode: '',
        ageAgreement: false,
        policyAgreement: false,
        isNewsLetter: false,
      });
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [name]: type === 'checkbox' ? checked : value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
      };
    
      return (
        <div className="wz-member">
          <div className="wz-cont">
            <div className="register inner-cont">
              <div className="title">
                <h2>Register</h2>
                <p className="desc">Sign up using your email address or social media account</p>
              </div>
              <div className="frm-cont">
                <form action="/SignUp/Create" method="post" onSubmit={handleSubmit}>
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
                            id="UserName"
                            name="userName"
                            type="text"
                            value={formData.userName}
                            onChange={handleChange}
                            required
                          />
                          <label htmlFor="UserName">Username</label>
                        </span>
                      </li>
                      <li>
                        <span className="inpbox inpbox-pw">
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
                      <li>
                        <div className="view-capcha">
                          <div className="img-capcha">
                            <div className="BDC_CaptchaDiv">
                              <div className="BDC_CaptchaImageDiv">
                                <img
                                  className="BDC_CaptchaImage"
                                  src="/BotDetectCaptcha.ashx?get=image&amp;c=RegistCaptcha&amp;t=9619ed4998c941a9a26fdd9e2ab0be9c"
                                  alt="Retype the CAPTCHA code from the image"
                                />
                              </div>
                              <div className="BDC_CaptchaIconsDiv">
                                <a className="BDC_ReloadLink" href="#" title="Change the CAPTCHA code">
                                  <img
                                    className="BDC_ReloadIcon"
                                    src="/BotDetectCaptcha.ashx?get=reload-icon"
                                    alt="Change the CAPTCHA code"
                                  />
                                </a>
                                <a
                                  className="BDC_SoundLink"
                                  href="/BotDetectCaptcha.ashx?get=sound&amp;c=RegistCaptcha&amp;t=9619ed4998c941a9a26fdd9e2ab0be9c"
                                  title="Speak the CAPTCHA code"
                                  rel="nofollow"
                                >
                                  <img
                                    className="BDC_SoundIcon"
                                    src="/BotDetectCaptcha.ashx?get=sound-icon"
                                    alt="Speak the CAPTCHA code"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                          <span className="inpbox">
                            <input
                              className="ipt"
                              id="CaptchaCode"
                              name="captchaCode"
                              type="text"
                              value={formData.captchaCode}
                              onChange={handleChange}
                              required
                            />
                            <label htmlFor="CaptchaCode">CODE</label>
                          </span>
                        </div>
                      </li>
                      <li>
                        <span className="chkbox">
                          <input
                            className="ipt"
                            id="AgeAgreement"
                            name="ageAgreement"
                            type="checkbox"
                            checked={formData.ageAgreement}
                            onChange={handleChange}
                            required
                          />
                          <label htmlFor="AgeAgreement">
                            <em>*</em> I am 16 years of age or older.
                          </label>
                        </span>
                      </li>
                      <li>
                        <span className="chkbox">
                          <input
                            className="ipt"
                            id="PolicyAgreement"
                            name="policyAgreement"
                            type="checkbox"
                            checked={formData.policyAgreement}
                            onChange={handleChange}
                            required
                          />
                          <label htmlFor="PolicyAgreement">
                            <em>*</em> Yes, I agree to the{' '}
                            <a href="https://www.webzen.com/legal/termsofservice" target="_blank" rel="noopener noreferrer" className="ty-link">
                              Terms of Service
                            </a>{' '}
                            and the{' '}
                            <a href="https://www.webzen.com/legal/privacypolicy" target="_blank" rel="noopener noreferrer" className="ty-link">
                              Privacy Policy
                            </a>{' '}
                            of webzen.com.
                          </label>
                        </span>
                      </li>
                      <li>
                        <span className="chkbox">
                          <input
                            className="ipt"
                            id="IsNewsLetter"
                            name="isNewsLetter"
                            type="checkbox"
                            checked={formData.isNewsLetter}
                            onChange={handleChange}
                          />
                          <label htmlFor="IsNewsLetter">
                            Yes, I would like to receive newsletters from WEBZEN.
                          </label>
                        </span>
                      </li>
                    </ul>
                    <div className="btn-auth">
                      <button type="submit" className="btn-type btn-submit" disabled={!formData.ageAgreement || !formData.policyAgreement}>
                        Create
                      </button>
                    </div>
                  </fieldset>
                </form>
                <div className="title nonepd">
                  <h2 className="tit-half">or</h2>
                  <p className="desc">Register quickly with your social media account</p>
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

export default Register;
