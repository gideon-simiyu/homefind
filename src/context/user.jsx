import { createContext, useState } from "react";
import client from "../backend/client";

const UserContext = createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState({
        authenticated: client.authStore.isValid,
        user: client.authStore.model
    });

    return (
        <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
    )
}

export { UserProvider, UserContext };
