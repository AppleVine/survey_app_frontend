import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Header from '../components/header';
import './StaffPage.css';
import { getCookie, verifyToken } from '../services/authServices';

export default function StaffPage() {
  useEffect(() => {
    const token = getCookie('authToken');
    if (!token) {
      window.location.href = '/login';
      console.log("TODO")
    } else {
      verifyToken(token)
        .then(() => {
          console.log('Token verified successfully');
        })
        .catch((error) => {
          console.log('Token verification error:', error);
          window.location.href = '/login';
          console.log("TODO")
        });
    }
  }, []);

  return (
    <div className='staffPage'>
      <Header />

      <div className='button-group'>
        <Link to='/surveys/create'><Button variant='primary'>Create Survey</Button></Link>

        <Button variant='primary'>View Surveys</Button>

        <Button variant='primary'>View Responses</Button>
      </div>
    </div>
  );
}
