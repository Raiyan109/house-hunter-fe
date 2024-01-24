import { createContext } from "react";

export const UserContext = createContext()

const UserProvider = ({ children }) => {
    const user = JSON.parse(localStorage.getItem('userData'))

    const value = {
        user
    }
    console.log(user);
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;