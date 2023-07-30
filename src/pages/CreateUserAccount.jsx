import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import { checkLoginAndRedirect } from '../services/authServices';
import { createUser } from '../services/userServices';

// CSS imports
import Button from 'react-bootstrap/Button';
import "./Login.css";


export default function CreateUserAccount() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [notification, setNotification] = useState(null);

    // Redirect if not logged in
    useEffect(() => {
        checkLoginAndRedirect();
      }, []);

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
          email: email
        };

        try {
            const response = await createUser(userData);
            setNotification(`New user ${response.username} created successfully.`)
          } catch (error) {
            setError(error.message);
          }

    }

  return (
    <div>
    <Header />
    <div className="create-user">
      <form>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input type="text" className="form-control" id="username" value={username} onChange={handleUsernameChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="text" className="form-control" id="email" value={email} onChange={handleEmailChange} />
        </div>
        <Button type="submit" variant="primary" onClick={handleSubmit}>Create User</Button>
      </form>
      {notification && <p className="notification">{notification}</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
  </div>
  )
}
