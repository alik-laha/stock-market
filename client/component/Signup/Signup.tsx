import React, { useState } from 'react';
import './Signup.css';
import axios from "axios";

function SignUpPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo,setPhoneNo]=useState("")
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [view,setView]=useState("none")
    const [msg,setMsg]=useState("")
    const handleSignUp = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(password===confirmPassword) {
            const data = {
                name: username,
                email: email,
                phoneNo: phoneNo,
                password:password
            }
            axios.post("http://localhost:3000/api/signup", data).then((data1)=>{
                console.log(data1)
            }).catch((err)=>{
                setMsg((err.response.data.msg))
            })
        }else{
            setView("block")
            setConfirmPassword("")
            setMsg(" Write same Password in Confirm Password")
        }
    };

    return (
        <div className="signup-container">
            <h2 className="header">Sign Up</h2>
            <form onSubmit={handleSignUp}>
            <div className="form-group">
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
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
                <label>Phone No</label>
                <input
                    type="number"
                    value={phoneNo}
                    onChange={(e) =>{
                        setPhoneNo(e.target.value)
                    }}
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
            <div className="form-group">
                <label>Confirm Password:</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
            </div>
          <p className="error-confirmpass" style={{display:view}}>
              {msg}
          </p>
            <button className="signup-button">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUpPage;