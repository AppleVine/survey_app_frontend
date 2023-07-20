import { getCookie } from "./authServices";
import { verifyToken } from "./authServices";

const api = process.env.API || "http://localhost:3000"

export async function createSurvey(data) {
    const token = getCookie('authToken');
  
    try {
      // Verify the token before making the API call
      await verifyToken(token);
    
      console.log("Sending to db:", data);
      const response = await fetch(`${api}/surveys/create`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
      });
  
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
  
  
  

export async function updateSurvey(id, data) {
    const token = getCookie('authToken');
    try {
        const response = await fetch(`${api}/surveys/${id}/edit`, {
            method: "POST",
            headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            body: JSON.stringify(data)
        });

        const json = await response.json();
        if (response.ok) {
            return json; 
          } else {
            throw new Error(json.error); 
          }
    }
    catch(error) {
            console.log('Error saving to database:', error);
            throw error;
    }
}

export async function deleteSurvey(token) {
    try {
        const response = await fetch(`${api}/surveys/:id`, {
            method: "DELETE",
            headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
        });

        const json = await response.json();
        if (response.ok) {
            return json; 
          } else {
            throw new Error(json.error); 
          }
    }
    catch(error) {
            console.log('Error deleting survey:', error);
            throw error;
    }
}

// get all surveys
export async function getSurveys(){
  try {
      const response = await fetch(`${api}/surveys`)
      const data = await response.json()

      if(response.ok){
          return data.surveys;
      } else {
          throw new Error(data.message)
      }
  } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch surveys')
  }
}