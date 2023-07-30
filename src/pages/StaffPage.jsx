import React, { useEffect } from 'react';
import { checkLoginAndRedirect } from '../services/authServices';

// CSS imports
import Button from 'react-bootstrap/Button';
import Header from '../components/header';
import './StaffPage.css';

export default function StaffPage() {

  // Redirect to login page if not logged in
  useEffect(() => {
    checkLoginAndRedirect();
  }, []);

  return (
    <div className='staffPage'>
      <Header />

      <div className='button-group'>
        <Button variant='primary' href='/surveys/create'>Create Survey</Button>

        <Button variant='primary' href='/surveys'>View Surveys</Button>

        <Button variant='primary' href='/responses'>View Responses</Button>

        <Button variant='primary' href='/newuser'>Create User</Button>
      </div>
    </div>
  );
}
