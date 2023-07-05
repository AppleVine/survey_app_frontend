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
