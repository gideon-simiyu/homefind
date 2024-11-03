import {useState} from "react";
import client from "../../backend/client.js";

function Register() {

    const [loading, setLoading] = useState(true);

    const [data, setData] = useState({
        name: "",
        email: "",
        role: "tenant",
        password: "",
    })

    const {name, email, role, password} = data;

    const change_data = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    const login = async (e) => {
        e.preventDefault();
        setLoading(true);
        await client.collection('users').authWithPassword(
            email,
            password,
        ).then((response) => {
            setLoading(false);
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })

    }

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <form autoComplete={false} onSubmit={login} className="max-w-md w-full p-4 rounded-lg">

                <div className="mb-4 flex flex-col items-center">
                    <img className="w-20" src="/logo.png" alt=""/>
                    <h3 className="text-3xl">Login</h3>
                </div>

                <div className="mb-6">
                    <label className="input-group-filled">
                        <span className="input-group-text">
                          <span className="icon-[tabler--user] text-base-content/80 size-6"></span>
                        </span>
                        <div className="form-control grow">
                            <input type="email" name="email" value={email} onChange={change_data} placeholder="johndoe@example.com" className="input input-filled peer"
                                   required/>
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
                                   required/>
                            <span className="input-filled-label">Email</span>
                        </div>


                        <span className="input-group-text cursor-pointer" onClick={togglePassword}>
                            {passwordShown ? (

                                <span className="icon-[tabler--eye-off] text-base-content/80 size-6"></span>
                            ):(
                                <span className="icon-[tabler--eye] text-base-content/80 size-6"></span>
                            )}
                        </span>
                    </label>
                    <span className="input-filled-focused"></span>
                </div>

                <div>
                    <button className="btn btn-primary w-full">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Register;