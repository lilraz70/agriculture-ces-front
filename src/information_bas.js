import React, { useState, useEffect } from 'react';
import "./information_bas.css";
import { Link } from 'react-router-dom';

function InformationBas() {
  const [actualites, setActualites] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInformations = async () => {
      const token = localStorage.getItem('access_token');

      if (!token) {
        setError('Vous devez être connecté pour voir ces informations.');
        return;
      }

      try {
        const response = await fetch('http://127.0.0.1:8000/informations/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          // Trier les actualités par date (supposons que la date est une chaîne au format ISO 8601)
          data.sort((a, b) => new Date(b.date) - new Date(a.date));
          // Mettre à jour l'état actualites avec les 2 dernières actualités
          setActualites(data.slice(0, 2));
        } else {
          setError('Vous n\'êtes pas autorisé à voir ces informations.');
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des informations :", error);
        setError('Une erreur s\'est produite lors de la récupération des informations.');
      }
    };

    fetchInformations();
  }, []);

  return (
    <div className="containerse">
      <div className="card-wrappers">
        {error ? (
          <p className="error-message">{error}</p>
        ) : (
          actualites.map((item, index) => (
            <div className="card-column" key={index}>
              <div className="cards">
                <img src={item.image} alt='' className="cards-images" />
                <h3 className="cards-titles">{item.texte}</h3>
                <Link to="/info">
                  <button className="card-button">Détails</button>
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default InformationBas;
