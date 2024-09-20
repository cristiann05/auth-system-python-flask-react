import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/signup.css';
import { Context } from "../store/appContext";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const { actions, store } = useContext(Context);

    // Limpiar errores cada vez que cambie el estado del error
    useEffect(() => {
        if (store.error) {
            setErrorMessage(store.error);
        } else {
            setErrorMessage('');
        }
    }, [store.error]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match');
            return;
        }

        try {
            await actions.signup(email, password);
            
            if (!store.error) {
                // Redirige al usuario a la página de inicio de sesión al registrarse con éxito
                setErrorMessage(''); // Limpiar errores
                navigate('/signin');
            } else {
                setErrorMessage(store.error || 'Sign Up failed');
            }
        } catch (error) {
            setErrorMessage(store.error || 'An unexpected error occurred. Please try again.');
        }
    };

    return (
        <div className="signup-page">
            <div className="signup-container">
                <h1>Sign Up</h1>
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
                    <div className="input-group password-container">
                        <label htmlFor="password">Password</label>
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span 
                            className="toggle-password" 
                            onClick={() => setPasswordVisible(!passwordVisible)}
                        >
                            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    <div className="input-group confirm-password password-container">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input
                            type={confirmPasswordVisible ? 'text' : 'password'}
                            id="confirm-password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        <span 
                            className="toggle-password" 
                            onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                        >
                            {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    <button type="submit">Sign Up</button>

                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                </form>
                <p className="signin-link">
                    Already have an account?{' '}
                    <span onClick={() => navigate('/signin')} className="signin-redirect">
                        Sign In
                    </span>
                </p>
            </div>
        </div>
    );
};
