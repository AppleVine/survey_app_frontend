import { createContext, useContext, useReducer } from "react"

export const defaultEditContextData = {
    edit: false,
}

const EditContext = createContext(null);

const EditDispatchContext = createContext(null);

export function useEditContext() {
    return useContext(EditContext);
}

export function useEditDispatchContext() {
    return useContext(EditDispatchContext);
}

const editContextReducer = (previousState, instructions) => {
    if (instructions.data) {
        return true
    } else {
        return false
    }
}

export function EditContextProvider({children}) {
    const [editState, editDispatch] = useReducer(editContextReducer, defaultEditContextData);

    return(
        <EditContext.Provider value={ editState }>
            <EditDispatchContext.Provider value={ editDispatch }>
                {children}
            </EditDispatchContext.Provider>
        </EditContext.Provider>
    )
}