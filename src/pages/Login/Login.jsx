import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = (e) => {
        setUsername(e.target.value);
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "admin") {
            navigate("/home");
        } else {
            alert("Password and password is unmatched");
        }
    }

    return (
        <>
            <div className="login-container d-flex align-items-center justify-content-center">
                <form className="login-form shadow-lg w-25 p-5 rounded-5" onSubmit={handleSubmit}>
                    <h1 className="text-center pb-3 text-light">Login</h1>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="username" placeholder="name@example.com" onChange={handleChange}/>
                        <label htmlFor="username">Username</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="password" placeholder="Password" onChange={handleChange}/>
                        <label htmlFor="password">Password</label>
                    </div>
                    <button type={"submit"} className="btn login-btn mt-4 w-100 text-light">Login</button>
                </form>
            </div>
        </>
    )
}

export default Login;