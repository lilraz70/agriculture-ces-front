import React from 'react';
import "./actuality_bas.css";

function Actualitybas() {
  return (
    <div className='contain-wrapper'> {/* Utilisez .contain-wrapper pour envelopper les deux conteneurs */}
      <div className="contain">
        <div className="container">
          <img src="https://i.pinimg.com/originals/6a/94/6b/6a946b6a036d79c538ab73295888c93a.jpg" alt="" className="image" />
          <div className="content">
            <h1 className="title">Titre principal</h1>
            <p className="details">Détails de l'actualité</p>
            <p className="date">Date de publication</p>
          </div>
        </div>
        <div className="container">
          <img src="https://i.pinimg.com/originals/6a/94/6b/6a946b6a036d79c538ab73295888c93a.jpg" alt="" className="image" />
          <div className="content">
            <h1 className="title">Titre principal</h1>
            <p className="details">Détails sur l'actualité</p>
            <p className="date">Date de publication</p>
          </div>
        </div>
      </div>

      <div className="contains">
        <div className="container"> {/* Pas besoin de .container-wrapper ici */}
          <img src="https://i.pinimg.com/originals/6a/94/6b/6a946b6a036d79c538ab73295888c93a.jpg" alt="" className="image" />
          <div className="content">
            <h1 className="title">Titre principal</h1>
            <p className="details">Détails de l'actualité</p>
            <p className="date">Date de publication</p>
          </div>
        </div>
        <div className="container">
          <img src="https://i.pinimg.com/originals/6a/94/6b/6a946b6a036d79c538ab73295888c93a.jpg" alt="" className="image" />
          <div className="content">
            <h1 className="title">Titre principal</h1>
            <p className="details">Détails sur l'actualité</p>
            <p className="date">Date de publication</p>
          </div>
        </div>
        <button className="card-button">Voir plus</button>
      </div>
    </div>
  );
}

export default Actualitybas;
