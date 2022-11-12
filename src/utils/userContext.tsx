import { createContext } from "react";


// Default state
export const defaultState = {
    isAuthenticated: false,
};

// Creation the context
const UserContext = createContext(defaultState);

export default UserContext;