import React from "react";
import '../../styles/hero.css'; // Asegúrate de que esta ruta es correcta

export const Hero = () => {
  return (
    <div className="hero">
      <h1 className="hero__title">Unlimited movies, TV shows, and more.</h1>
      <h3 className="hero__subtitle">Watch anywhere. Cancel anytime.</h3>
      <div className="hero__form">
        <input type="text" placeholder="Email" />
        <button>Try 30 days free</button>
      </div>
      <p className="hero__text">Ready to watch? Enter your email to create or access your account</p>
    </div>
  );
};
