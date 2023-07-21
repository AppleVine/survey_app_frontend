import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Header from '../components/header';
import './StaffPage.css';
import { getCookie } from '../services/authServices';

export default function StaffPage() {
  useEffect(() => {
    const token = getCookie('authToken');
    if (!token) {
      window.location.href = '/login';
    }
  }, []);

  return (
    <div className='staffPage'>
      <Header />

      <div className='button-group'>
        <Button variant='primary'>Create Survey</Button>

        <Button variant='primary'>View Surveys</Button>

        <Button variant='primary'>View Responses</Button>
      </div>
    </div>
  );
}
