import { createContext, useContext, useReducer } from "react";
import { responseReducer, initialResponse } from "./responseReducer";

export const ResponseContext = createContext(null);
export const ResponseDispatchContext = createContext(null);

export function useResponseContext() {
    return useContext(ResponseContext);
}

export function useResponseDispatchContext() {
    return useContext(ResponseDispatchContext);
}

export function ResponseProvider({children}) {
    const [responseState, responseDispatch] = useReducer(responseReducer, initialResponse);

    return(
        <ResponseContext.Provider value={ responseState }>
            <ResponseDispatchContext.Provider value={ responseDispatch }>
                {children}
            </ResponseDispatchContext.Provider>
        </ResponseContext.Provider>
    )
}