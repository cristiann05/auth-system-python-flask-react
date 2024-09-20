import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/signin.css';
import { Context } from "../store/appContext";

export const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();
    const { actions, store } = useContext(Context);

    useEffect(() => {
        if (store.user) {
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
                navigate('/homepage');
            }, 1000);
        }
    }, [store.user, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await actions.login(email, password);
            // El useEffect manejará la redirección y la alerta
        } catch (error) {
            console.error('Error during sign in:', error);
            setErrorMessage('An unexpected error occurred. Please try again.');
        }
    };

    const handleSignupRedirect = () => {
        navigate('/signup');
    };

    return (
        <div className="signin">
            <div className="signin-container">
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Sign In</button>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                </form>
                <p className="signup-link">
                    Don't have an account?{' '}
                    <span onClick={handleSignupRedirect} className="signup-redirect">
                        Sign Up
                    </span>
                </p>
            </div>

            {/* Alert component */}
            {showAlert && (
                <div className="alert alert-success fixed-alert" role="alert">
                    Successfully logged in!
                </div>
            )}
        </div>
    );
};
