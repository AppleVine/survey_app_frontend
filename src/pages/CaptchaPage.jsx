import ReCAPTCHA from "react-google-recaptcha";
import React, { useRef } from 'react';
import axios from "axios";


const CaptchaPage = () => {
    const captchaRef = useRef(null)
    const handleSubmit = async (e) =>{
      e.preventDefault();
      const inputVal = await e.target[0].value;
      const token = captchaRef.current.getValue();
      captchaRef.current.reset();

      console.log(token)

      await axios.post("http://localhost:3000/reCAPTCHA", { inputVal, token })
      .then(res =>  console.log(res))
      .catch((error) => {
      console.log(error);
      })
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

