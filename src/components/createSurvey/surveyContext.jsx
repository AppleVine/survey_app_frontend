import { createContext, useContext, useReducer } from "react";
import { surveyReducer, initialSurvey } from "./surveyReducer";



// export const defaultSurveyContextData = {
//     data: {
//         title: "",
//         description: "",
//         introduction: "",
//         completionMessage: "",
//         makePublic: false,
//         questions: [],
//     },
//     editMode: {
//         title: false,
//         description: false,
//         introduction: false,
//         completionMessage: false
//     }
// }



export const SurveyContext = createContext(null);
export const SurveyDispatchContext = createContext(null);

export function useSurveyContext() {
    return useContext(SurveyContext);
}

export function useSurveyDispatchContext() {
    return useContext(SurveyDispatchContext);
}

export function SurveyProvider({children}) {
    const [surveyState, surveyDispatch] = useReducer(surveyReducer, initialSurvey);

    return(
        <SurveyContext.Provider value={ surveyState }>
            <SurveyDispatchContext.Provider value={ surveyDispatch }>
                {children}
            </SurveyDispatchContext.Provider>
        </SurveyContext.Provider>
    )
}