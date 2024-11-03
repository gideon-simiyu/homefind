import {Route, Routes} from "react-router-dom";
import React, {Suspense} from "react";
import Navbar from "./components/Navigation/Navbar";


function App() {
    const Login = React.lazy(() => import("./pages/auth/Login"));
    const Register = React.lazy(() => import("./pages/auth/Register"));

    return (
        <Suspense>
            <Navbar />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Suspense>
    )
}

export default App
