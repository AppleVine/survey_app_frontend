import React, { useState } from 'react';
import Header from "../components/header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import "./TempRegister"

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

const handleUsernameChange = (event) => {
  setUsername(event.target.value);
};

const handlePasswordChange = (event) => {
  setPassword(event.target.value);
};

const handleSubmit = (event) => {
  event.preventDefault();

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;
  if (!passwordRegex.test(password)) {
    // Display an error message or take appropriate action for invalid password
    return;
  }

  const userData = {
    "email": username,
    "password": password,
  };

  console.log(JSON.stringify(userData));
  
};

  return (
    <div>
      <Header />
      <div className="login"> 
        <form>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" value={username} onChange={handleUsernameChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleFormControlInput2" value={password} onChange={handlePasswordChange} />
          </div>
          <Button type="submit" variant="primary" onClick={handleSubmit}>Login</Button>
        </form>
  
        <Button className="account" variant="primary">Account Creation</Button>
      </div>
    </div>
  );
  
}
