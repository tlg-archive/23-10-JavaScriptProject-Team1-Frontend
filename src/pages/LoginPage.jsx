import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styles from "../assets/css/login.css"

function LoginPage() {
    const [formState, setFormState] = useState({ userEmail: "", password: "" });

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormState({ ...formState, [name]: value });
    }

    const handleFormSubmit = async (e) => {
        // prevent the forms default
        e.preventDefault();


        // set the username and password from the input fields 
        const data = {
            userEmail: formState.userEmail,
            password: formState.password
        }

        console.log(data);

        // Post for response and if for error codes

        //     const response = await fetch("http://localhost:3001/login", {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(data)
        //     }
        //     );

        //     const resData = response.json()

        //     if(response.status === 400) {
        //         // 400 bad request | credentials or password
        //         // const errorText = await response.text();
        //         console.log("Username or Password is not recognized")
        //         // console.log(resData.message)
        //     } else if (response.status === 404) {
        //         // serverside request not found.
        //         console.log("The page cannot be loaded or found, sorry.")
        //     }
        //     if(response.status === 500) {
        //         // internal server error
        //         console.log("I think our servers are down.")
        //     }
    }

    return (
        <>
            {/* is this working */}
            <div className="login-wrapper">
                <form className="login-form" onSubmit={handleFormSubmit}>
                    <h1 className="welcomeback">Welcome Back</h1>
                    <div className="form-section">
                        <label htmlFor="userEmail">Email</label>
                        <input 
                            type="text" 
                            required 
                            className="form-input" 
                            id="userEmail" 
                            name="userEmail" 
                            onChange={handleChange} 
                            placeholder="email@example.com" 
                        />    
                    </div>
                    <div className="form-section">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            className="form-input" 
                            name="password" 
                            id="password" 
                            onChange={handleChange} 
                            placeholder="SunnySunShine232" 
                            value={formState.password} 
                        />
                    </div>
                    <input type="submit" value="Log In" />
                    <div className="mt-3">
                        <p>Dont have an account yet? <Link to="/signup">Signup Here</Link></p>
                    </div>
                </form>
            </div>
        </>
    )
}

export default LoginPage;