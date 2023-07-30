import Cookies from 'js-cookie';

const TOKEN_COOKIE_NAME = 'authToken';

const api = process.env.REACT_APP_API;

export function setToken(newToken) {
  Cookies.set(TOKEN_COOKIE_NAME, newToken, { expires: 1 });
}

export function getCookie(cookieName) {
  return Cookies.get(cookieName);
}

export function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

export async function verifyToken(token) {
  try {
    const response = await fetch(`${api}/admin/verify-token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (response.ok) {
      // Token is valid
      return;
    } else if (response.status === 404 || response.status === 401) {
      deleteCookie('authToken');
      throw new Error('Token verification failed');
    } else {
      throw new Error('Token verification error');
    }
  } catch (error) {
    console.log('Token verification error:', error);
    throw error;
  }
}

export function checkForUser() {
  let token = getCookie(TOKEN_COOKIE_NAME);
  return token ? true : false;
}

export function checkLoginAndRedirect() {
  const token = getCookie('authToken');
  if (!token) {
    window.location.href = '/login';
  } else {
    verifyToken(token)
      .then(() => {
        console.log('Token verified successfully');
      })
      .catch((error) => {
        console.log('Token verification error:', error);
        window.location.href = '/login';
      });
  }
}