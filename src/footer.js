import React, { useState, useEffect } from 'react';
import "./footer.css"; // Assurez-vous que le fichier CSS est importé
import axios from 'axios';


function Footer() {
  return (
    <div className="wrapper">
      <div className="content-wrapper">
        <div className="column">
          <Header />
        </div>
        <div className="column">
          <Navigation />
        </div>
        <div className="column">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

function Header() {
  const [contactInfo, setContactInfo] = useState({
    logos: '',
    numero1: '',
    numero2: '',
    mail: ''
  });

  useEffect(() => {
    async function fetchContactInfo() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/contact/');
        setContactInfo(response.data);
      } catch (error) {
        console.error('Error fetching contact info:', error);
      }
    }

    fetchContactInfo();
  }, []);

  return (
    <header>
      <div className="logo-container">
        <img src={contactInfo.logos} alt="Logo" className="logo-text" />
        <div className="organization-name">
          DIRECTION REGIONALE DE L'AGRICULTURE DU CENTRE
        </div>
      </div>
      <div className="contact-info">
        <div className="contact-details">
          Contact : +226 xx xx xx xx
          <div className="contacts">+226 xx xx xx xx</div>
        </div>
        <div className="email-info">E-mail : direction@agri.bf</div>
      </div>
    </header>
  );
}


function Navigation() {
  const navLinks = ["Accueil", "Actualités", "Informations", "Se connecter"];

  return (
    <nav>
      {navLinks.map((link, index) => (
        <div
          key={index}
          className="nav-link"
          style={{ marginTop: index > 0 ? "23px" : 0 }}
        >
          {link}
        </div>
      ))}
    </nav>
  );
}

function ContactForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('access_token');

    try {
      const response = await fetch('http://127.0.0.1:8000/message/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ email, message }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Message envoyé avec succès:', data);
        // Réinitialiser le formulaire après un envoi réussi
        setEmail('');
        setMessage('');
      } else {
        console.error('Erreur lors de l\'envoi du message');
      }
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="chat-title">Chattez avec nous</div>
      <div className="form-input">
        <input
          type="email"
          id="email"
          placeholder="E-mail"
          aria-label="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-input">
        <textarea
          id="message"
          placeholder="Message"
          aria-label="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit" className="card-buttons">Envoyer</button>
    </form>
  );
}

export default Footer;
