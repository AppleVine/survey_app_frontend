import { getCookie } from "./authServices";
import { verifyToken } from "./authServices";

const api = process.env.API || "http://localhost:3000"

// export async function viewSurvey(id) {
//   const token = getCookie('authToken');

//   try {
//     // Determine if there is a logged in user
//     let headerData = null;
//     if (token) {
//       await verifyToken(token);
//       headerData = {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`
//       }
//     }
//     else {
//       headerData = {
//         'Content-Type': 'application/json'
//       }
//     }

    // const response = await fetch(`${api}/surveys/${id}`, {
    //   method: "GET",
    //   headers: 'Content-Type': 'application/json'
    // });

//     const json = await response.json();
//     if (response.ok) {
//       return json;
//     } else {
//       throw new Error(json.error);
//     }
//   } catch (error) {
//     console.log('Error loading survey:', error);
//     throw error;
//   }
// }

export async function getSurvey(surveyID) {
  try {
    const token = getCookie('authToken');
    let headerData = null;

    if (token) {
      await verifyToken(token);
      headerData = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }
    else {
      headerData = {
        'Content-Type': 'application/json'
      }
    }

    const response = await fetch(`${api}/surveys/${surveyID}`, {
      method: "GET",
      headers: headerData
    });
    const data = await response.json();
    return data
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch survey');
  }
}

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