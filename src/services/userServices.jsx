const api = 'http://localhost:3000/admin';

export async function createUser(data) {
  const response = await fetch(`${api}/register`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const json = await response.json();
  console.log(json);
  return json;
}

export async function loginUser(data) {
  try {
    const response = await fetch(`${api}/login`, {
      method: "POST",
      headers: {
        'Content-type': "application/json"
      },
      body: JSON.stringify(data)
    });

    const json = await response.json();

    if (response.ok) {
      console.log('Login successful'); // Log message for successful login
    } else {
      console.log('Login failed:', json.error); // Log message for failed login
    }

    return json;
  } catch (error) {
    console.log('Login error:', error);
    throw error;
  }
}