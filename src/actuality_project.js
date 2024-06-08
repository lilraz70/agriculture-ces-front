import React, { useState, useEffect } from 'react';
import "./actuality_project.css";
import "./actuality_bas.css";
import Projet from './info';
import { Link } from 'react-router-dom'; // Importez le composant Link depuis React Router

function Actuality() {
  const [actualites, setActualites] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fonction pour récupérer les actualités depuis votre API
    const fetchActualites = async () => {
      const token = localStorage.getItem('access_token');

      if (!token) {
        setError('Vous devez être connecté pour voir les actualités.');
        return;
      }

      try {
        const response = await fetch('http://127.0.0.1:8000/actualites/', {
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
          setError('Vous n\'êtes pas autorisé à voir ces actualités.');
        }
      } catch (err) {
        console.error('Erreur lors de la récupération des actualités :', err);
        setError('Une erreur s\'est produite lors de la récupération des actualités.');
      }
    };

    fetchActualites();
  }, []);

  const projet = () => {
    // Fonction pour gérer l'action liée à Projet
    console.log("Clic sur Projet");
  };

  return (
    <div className='rows'>
      <div className="containers">
        <div className="row">
          <div className="col-s text-start" onClick={projet}>
            ACTUALITES
          </div>
        </div>
        <div className='contain-wrapper'>
          <div className="contain">
            {error ? (
              <p className="error-message">{error}</p>
            ) : (
              actualites.map(actualite => (
                <div key={actualite.id} className="container">
                  <img src={actualite.image} alt="" className="image" />
                  <div className="content">
                    <h1 className="title">{actualite.texte}</h1>
                    <p className="details">{actualite.details}</p>
                    <p className="date">{formatDate(actualite.date)}</p>
                  </div>
                </div>
              ))
            )}
          </div>
          <Link to="/news">
            <button className="cards-button">Voir plus</button>
          </Link>
        </div>
      </div>
      <div className='projet'>
        <Projet />
      </div>
    </div>
  );
}

// Fonction pour formater la date au format "YYYY-MM-DD"
function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2); // Ajoute un zéro devant si le mois est < 10
  const day = ('0' + date.getDate()).slice(-2); // Ajoute un zéro devant si le jour est < 10
  return `${year}-${month}-${day}`;
}

export default Actuality;
