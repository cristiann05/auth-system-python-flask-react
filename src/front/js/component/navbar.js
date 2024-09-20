import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate
import '../../styles/navbar.css';

export const Navbar = () => {
  const navigate = useNavigate(); // Creamos una instancia del hook useNavigate

  const handleSignIn = () => {
    navigate('/signin'); // Navega a la página de inicio de sesión cuando el botón se hace clic
  };

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix Logo"
          onClick={() => navigate('/')} // Navega a la página principal cuando el logo se hace clic
        />
      </div>
      <div className="navbar__links">
        <div className="navbar__link" onClick={handleSignIn}>
          Sign In
        </div>
      </div>
    </div>
  );
};
