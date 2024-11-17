import { useState, useContext } from "react";
import client from "../../backend/client.js";
import { Link } from "react-router-dom";
import { login_with_password } from "../../backend/auth";
import { LoadingContext } from "../../context/loading";

function Login() {
    const { setLoading } = useContext(LoadingContext);

    const [data, setData] = useState({
        email: "",
        password: "",
    })

    const { email, password } = data;

    const change_data = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }


    const googleLogin = async (e) => {
        e.preventDefault();

        const authData = await client.collection('users').authWithOAuth2({ provider: 'google' });
        console.log(authData.meta.rawUser);

        await client.collection('users').update(authData.record.id, {
            name: `${authData.meta.rawUser.given_name} ${authData.meta.rawUser.family_name}`,
            avatar_url: authData.meta.rawUser.picture,
          });
    }


    const login = async (e) => {
        e.preventDefault();
        setLoading(true);
        const { success, error, message } = await login_with_password(email, password);
        setLoading(false);

        if (error) {
            console.log(error);
        }
    }

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <form onSubmit={login} className="max-w-md w-full p-4 rounded-lg">

                <div className="mb-4 flex flex-col items-center">
                    <img className="w-20" src="/logo.png" alt="" />
                    <h3 className="text-3xl">Login</h3>
                </div>

                <div className="mb-6">
                    <label className="input-group-filled">
                        <span className="input-group-text">
                            <span className="icon-[tabler--user] text-base-content/80 size-6"></span>
                        </span>
                        <div className="form-control grow">
                            <input type="email" name="email" value={email} onChange={change_data} placeholder="johndoe@example.com" className="input input-filled peer"
                                required />
                            <span className="input-filled-label">Email</span>
                        </div>
                    </label>
                    <span className="input-filled-focused"></span>
                </div>


                <div className="mb-6">
                    <label className="input-group-filled">
                        <span className="input-group-text">
                            <span className="icon-[tabler--lock] text-base-content/80 size-6"></span>
                        </span>
                        <div className="form-control grow">
                            <input type={passwordShown ? "text" : "password"} name="password" value={password} onChange={change_data} placeholder="johndoe@example.com"
                                className="input input-filled peer"
                                required />
                            <span className="input-filled-label">Email</span>
                        </div>


                        <span className="input-group-text cursor-pointer" onClick={togglePassword}>
                            {passwordShown ? (

                                <span className="icon-[tabler--eye-off] text-base-content/80 size-6"></span>
                            ) : (
                                <span className="icon-[tabler--eye] text-base-content/80 size-6"></span>
                            )}
                        </span>
                    </label>
                    <span className="input-filled-focused"></span>
                </div>

                <div className="mb-4">
                    <button className="btn btn-primary w-full">Login</button>
                </div>

                <div className="flex justify-center mb-4">
                    <Link className="text-sm link link-animated link-primary" to="/register">Don't have an account? Register</Link>
                </div>

                <button className="btn btn-primary w-full" onClick={googleLogin}>Or Continue with Google</button>
            </form>
        </div>
    )
}

export default Login;