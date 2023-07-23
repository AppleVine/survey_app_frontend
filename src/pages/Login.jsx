import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../components/header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import "./Login.css";
import { loginUser } from '../services/userServices';
import { setToken } from '../services/authServices';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      username: username,
      password: password,
    };

    try {
      const response = await loginUser(userData);
      console.log('Login successful:', response);
      setToken(response.token);
      navigate('/staff');
    } catch (error) {
      setError(error.message);
      setUsername('');
      setPassword('');
    }
  };

  const handleBug = () => {
    // const token = getCookie('authToken');
    // console.log(token);
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

        <Button className="account" variant="primary" onClick={handleBug}>Account Creation // bug testing</Button>

        {error !== null && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
}
