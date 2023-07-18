import { createContext } from "react"

export const defaultEditContextData = {
    edit: false,
}

const EditContext = createContext(defaultEditContextData);

export default EditContext;