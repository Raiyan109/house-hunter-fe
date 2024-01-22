import { createContext } from "react";

export const UserContext = createContext()

const UserProvider = ({ children }) => {
    const user = JSON.parse(localStorage.getItem('userData'))
    const userData = user
    const value = {
        userData
    }
    // console.log(value);
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;