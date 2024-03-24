import React, { useState } from 'react';
import '../Signup/Signup.css';
import axios from "axios"; // Import CSS file for styling

function SignUpPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = (e:React.FormEvent<HTMLFormElement>) => {
       e.preventDefault();
       const data1={
           email,
           password
       }
       axios.post("http://localhost:3000/api/login",data1)
           .then((data)=>{
               console.log(data)
           })
           .catch((err)=>{
               console.log(err)
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
            <button className="signup-button">Log-In</button>
            </form>
        </div>
    );
}

export default SignUpPage;