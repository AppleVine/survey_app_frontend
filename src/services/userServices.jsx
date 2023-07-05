const api = 'http://localhost:3000/admin';

export async function createUser(data) {
  try {
    const response = await fetch(`${api}/register`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    const json = await response.json();
  
    if (response.ok) {
      return json; // Return the response JSON for successful registration
    } else {
      throw new Error(json.error); // Throw an error for failed registration
    }
  } catch (error) {
    console.log('Registration error:', error);
    throw error;
  }
}



export async function loginUser(data) {
  try {
    const response = await fetch(`${api}/login`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const json = await response.json();

    if (response.ok) {
      return json; // Return the response JSON for successful login
    } else {
      throw new Error(json.error); // Throw an error for failed login
    }
  } catch (error) {
    console.log('Login error:', error);
    throw error;
  }
}