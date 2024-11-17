
import { createContext, useState } from "react";

const LoadingContext = createContext();

function LoadingProvider({ children }) {
    const [loading, setLoading] = useState(false);

    return (
        <LoadingContext.Provider value={{ loading, setLoading }}>{children}</LoadingContext.Provider>
    );
}


export { LoadingProvider, LoadingContext };
