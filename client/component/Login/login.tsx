import React, { useState } from 'react';
import '../Signup/Signup.css';
import axios from "axios";
import {NavLink} from "react-router-dom"; // Import CSS file for styling

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [view,setView]=useState("none")
    const [msg,setMsg]=useState("")
    const handleSignUp = (e:React.FormEvent<HTMLFormElement>) => {
       e.preventDefault();
       const data1={
           email,
           password
       }
       axios.post("http://localhost:3000/api/login",data1)
           .then((res)=>{
               console.log(res)
               localStorage.setItem("Token",res.data.Token)
           })
           .catch((err)=>{
               setMsg(err.response.data.msg)
               if(err.response.data.msg==="This email is not Registered create a account"){
                   setEmail("")
                   setPassword("")
               }else if(err.response.data.msg==="Please Check The Password"){
                   setPassword("")
               }
               setView("block")
           })
    };

    return (
        <div className="signup-container">
            <h2 className="header">Log In</h2>
            <form onSubmit={handleSignUp}>
            <div className="form-group">
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
                <p style={{display:view}} className="error-confirmpass">
                    *{msg}
                </p>
                <p style={{textAlign:"center"}}>
                    Create New Account click <NavLink to="/signup">Here</NavLink>
                </p>
            <button className="signup-button">Log-In</button>
            </form>
        </div>
    );
}

export default LoginPage;