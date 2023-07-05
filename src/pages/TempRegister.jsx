import React, { useState } from 'react';
import Header from "../components/header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { createUser } from '../services/userServices';

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

const handleUsernameChange = (event) => {
  setUsername(event.target.value);
};

const handlePasswordChange = (event) => {
  setPassword(event.target.value);
};

const handleEmailChange = (event) => {
  setEmail(event.target.value);
};

const handleSubmit = async (event) => {
  event.preventDefault();

  const userData = {
    username: username,
    password: password,
    email: email,
  };

  try {
    const response = await createUser(userData);
    console.log('Registration successful:', response);
  } catch (error) {
    console.log('Registration error:', error);
  }

  console.log(JSON.stringify(userData));

  // Reset form values
  setUsername('');
  setPassword('');
  setEmail('');
};
  


  return (
    <div>
      <Header />
      <div className="login">
        <form>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleFormControlInput2"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput3"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <Button type="submit" variant="primary" onClick={handleSubmit}>
            Register
          </Button>
        </form>

        <Button className="account" variant="primary">
          Account Creation
        </Button>
      </div>
    </div>
  );
}
