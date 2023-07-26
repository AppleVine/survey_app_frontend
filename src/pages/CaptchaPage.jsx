import ReCAPTCHA from "react-google-recaptcha";
import React, { useRef } from 'react';


const CaptchaPage = () => {
    const captchaRef = useRef(null)
    const handleSubmit = (e) =>{
        e.preventDefault();
        const token = captchaRef.current.getValue();
        captchaRef.current.reset();
        console.log(token)
    }


    return (
      <div>
        <h1>Hello, this is CAPTCHA</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" className="input" />
          <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} ref={captchaRef} />
          <button>Submit</button>
        </form>
      </div>
    );
  };
  

export default CaptchaPage;

