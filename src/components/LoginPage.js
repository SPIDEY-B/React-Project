import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        document.body.classList.add('login-page');
        return () => {
            document.body.classList.remove('login-page');
        };
    }, []);

    const handleLogin = async (event) => {
        event.preventDefault();

        const response = await fetch('http://localhost:3000/users');
        const users = await response.json();

        const user = users.find((u) => u.email === email && u.password === password);

        if (user) {
            onLogin(); // Call the onLogin function passed as a prop
            navigate('/home'); // Redirect to home page after successful login
        } else {
            alert('Invalid email or password. Please try again.');
        }
    };

    const handleForgotPassword = () => {
        alert('Redirect to password recovery page.'); // Placeholder for password recovery logic
    };

    const handleSignup = () => {
        navigate('/signup'); // Redirect to signup page
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">Login</button>
            </form>
            <button onClick={handleForgotPassword} className="forgot-password">
                Forgot Password?
            </button>
            <button onClick={handleSignup} className="signup-button">
                Sign Up
            </button>
        </div>
    );
};

export default LoginPage;   