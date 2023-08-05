
import { getCookie, deleteCookie } from "./authServices";

const API = process.env.REACT_APP_API;

export async function getAllResponses() {
  try {
    const token = getCookie('authToken');

    const response = await fetch(`${API}/responses`, {
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

export async function submitSurveyResponse(surveyResponseData) {
  try {
    const response = await fetch(`${API}/responses/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(surveyResponseData)
    })

    const json = await response.json();

    if (response.ok) {
      return json;
    } else {
      throw new Error(json.error);
    }
  } catch (error) {
    console.log('Error saving to database:', error);
    throw error;
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