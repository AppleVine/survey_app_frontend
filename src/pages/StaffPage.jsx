import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Header from '../components/header';
import './StaffPage.css';
import { getCookie } from '../services/authServices';
import jwt_decode from 'jwt-decode';

export default function StaffPage() {
  const [staffId, setStaffId] = useState(null);


  useEffect(() => {
    const token = getCookie('authToken');
    if (!token) {
      window.location.href = '/login';
    } else {
      const decodedToken = jwt_decode(token); 
      const staffId = decodedToken._id; 
      setStaffId(staffId);
    }
  }, []);

  return (
    <div className='staffPage'>
      <Header />

      <div className='button-group'>
        <Button variant='primary' href='/surveys/create'>Create Survey</Button>

        <Button variant='primary' href='/surveys'>View Surveys</Button>

        <Button variant='primary' href='/responses'>View Responses</Button>

        <Button variant='primary' href={`/surveys/staff/${staffId}`}>My Surveys</Button>
      </div>
    </div>
  );
}
