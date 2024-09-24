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
    const [successMessage, setSuccessMessage] = useState(''); // Nuevo estado para el mensaje de éxito
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
            // Llama a la acción signup desde el store
            await actions.signup(email, password);
            
            if (!store.error) {
                setErrorMessage(''); // Limpia el mensaje de error
                setSuccessMessage('Usuario creado exitosamente'); // Muestra el mensaje de éxito
                
                // Opcional: Redirigir después de unos segundos
                setTimeout(() => {
                    navigate('/signin'); // Redirige al usuario a la página de inicio de sesión después de 2 segundos
                }, 2000);
            } else {
                setErrorMessage(store.error || 'Sign Up failed');
            }
        } catch (error) {
            setErrorMessage('An unexpected error occurred. Please try again.');
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

                    {/* Mensaje de éxito */}
                    {successMessage && <p className="success-message">{successMessage}</p>}

                    {/* Mensaje de error */}
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
