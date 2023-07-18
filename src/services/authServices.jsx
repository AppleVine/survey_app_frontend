import Cookies from 'js-cookie';

const TOKEN_COOKIE_NAME = 'authToken';

const api = 'http://localhost:3000/admin';

export function setToken(newToken) {
  Cookies.set(TOKEN_COOKIE_NAME, newToken, { expires: 1 });
}

export function getCookie(cookieName) {
  return Cookies.get(cookieName);
}

export async function verifyToken(token) {
  try {
    const response = await fetch(`${api}/verify-token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (response.ok) {
      // Token is valid
      return true;
    } else {
      // Token is invalid
      throw new Error('Token verification failed');
    }
  } catch (error) {
    console.log('Token verification error:', error);
    throw error;
  }
}

export function checkForUser() {
  let token = getCookie(TOKEN_COOKIE_NAME);
  let isUser = verifyToken(token);
  return isUser;
}