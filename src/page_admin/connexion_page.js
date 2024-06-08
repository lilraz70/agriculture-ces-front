import React, { useState } from 'react';
import './connexion_page.css';
import Image from '../image_slider';
import Home from '../home';
import Footer from '../footer';
import { useNavigate } from 'react-router-dom';

function Connexion() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/api/token/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('access_token', data.access);
        localStorage.setItem('refresh_token', data.refresh);
        navigate('/ajout');
      } else {
        const errorData = await response.json();
        setError(errorData.detail || 'Erreur d’authentification');
      }
    } catch (error) {
      console.error('Erreur lors de la soumission du formulaire :', error);
      setError('Erreur lors de la soumission du formulaire');
    }
  };

  return (
    <div>
      <Home />
      <Image />
      <div className="containerses">
        <h1 className="tile">Bienvenue Administrateur</h1>
        <h2 className="subtile">Entrez vos identifiants</h2>
        {error && <p className="error-message">{error}</p>}
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="username" className="visually-hidden"></label>
          <input 
            type="text" 
            id="username" 
            className="input-field" 
            placeholder="username ou email" 
            aria-label="nom d'utilisateur ou email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password" className="visually-hidden"></label>
          <input 
            type="password" 
            id="password" 
            className="password-field" 
            placeholder="mot de passe" 
            aria-label="mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="submits-button">S'identifier</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Connexion;
