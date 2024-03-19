import  { useState } from 'react';
import '../Signup/Signup.css'; // Import CSS file for styling

function SignUpPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        // Handle signup logic here
        console.log('Signing up...');
    };

    return (
        <div className="signup-container">
            <h2 className="header">Log In</h2>

            <div className="form-group">
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button className="signup-button" onClick={handleSignUp}>Log In</button>
        </div>
    );
}

export default SignUpPage;