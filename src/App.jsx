import {Route, Routes} from "react-router-dom";
import React, {Suspense, useContext} from "react";
import Navbar from "./components/Navigation/Navbar";
import { LoadingContext } from "./context/loading";
import Properties from "./pages/Properties";


function App() {
    const Home = React.lazy(() => import('./pages/Home'))
    const Login = React.lazy(() => import("./pages/auth/Login"));
    const Register = React.lazy(() => import("./pages/auth/Register"));

    const { loading, setLoading } = useContext(LoadingContext);
    
    if(loading) {
        return <div>Loading...</div>
    }
    

    return (
        <Suspense>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/properties" element={<Properties />} />
            </Routes>
        </Suspense>
    )
}

export default App
