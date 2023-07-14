import { getCookie } from "./authServices";

const api = process.env.API || "http://localhost:5000"

export async function createSurvey(data) {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RpbmcwMDIiLCJpYXQiOjE2ODkzNDU2MDksImV4cCI6MTY4OTM0OTIwOX0.NaOu9RzkD8Kv1uYjlne8QVGimBL9Kxz2DjY-fy3lbmc" //getCookie('authToken');
    try {
        console.log("sending to db: " + data)
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
    }
    catch(error) {
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