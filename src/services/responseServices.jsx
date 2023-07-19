const API = "http://localhost:3000"

export async function getSurveyResponses(surveyID) {
    try {
      const response = await fetch(`${API}/responses/survey/${surveyID}`);
      const data = await response.json();
  
      if (response.ok) {
        return data.responses;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch survey responses');
    }
}

export async function getSurvey(surveyID){
    try {
        const response = await fetch(`${API}/surveys/${surveyID}`)
        const data = await response.json()

        if(response.ok){
            return data.survey;
        } else {
            throw new Error(data.message)
        }
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch survey')
    }
}
