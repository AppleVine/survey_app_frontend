
import { getCookie, deleteCookie } from "./authServices";

const API = process.env.API || 'http://localhost:3000/admin';

export async function getSurveyResponses(surveyID) {
  try {
    const token = getCookie('authToken');

    const response = await fetch(`${API}/responses/survey/${surveyID}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    const data = await response.json();

    if (response.ok) {
      return data.responses;
    } else if (response.status === 404 || response.status === 401) {
      deleteCookie('authToken');
      throw new Error(data.message);
    } else {
      throw new Error('Failed to fetch survey responses');
    }
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch survey responses');
  }
}

export async function getSurvey(surveyID) {
  try {
    const token = getCookie('authToken');

    const response = await fetch(`${API}/surveys/${surveyID}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    const data = await response.json();

    if (response.ok) {
      return data.survey;
    } else if (response.status === 404 || response.status === 401) {
      deleteCookie('authToken');
      throw new Error(data.message);
    } else {
      throw new Error('Failed to fetch survey');
    }
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch survey');
  }
}