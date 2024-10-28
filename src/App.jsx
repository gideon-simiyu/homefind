import {Route, Routes} from "react-router-dom";
import React, {Suspense} from "react";


function App() {
    const Login = React.lazy(() => import("./pages/auth/Login"));


    return (
        <Suspense>
            <Routes>
                <Route path="/login" element={<Login />} />
            </Routes>
        </Suspense>
    )
}

export default App
