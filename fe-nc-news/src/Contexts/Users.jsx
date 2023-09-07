import { createContext, useState, useEffect } from "react";


export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const storedUserData = localStorage.getItem("userData");
        return storedUserData ? JSON.parse(storedUserData) : null;
    });

    useEffect(() => {
        if (user) {
            localStorage.setItem("userData", JSON.stringify(user));
        } else {
            localStorage.removeItem("userData");
        }
    }, [user]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider >
    );
};