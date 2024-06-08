import React, { useState, useEffect } from "react";
import './actualite_page.css';
import Home from "../home";
import Image from "../image_slider";
import Footer from "../footer";

function Projects() {
    const [newsData, setNewsData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            const token = localStorage.getItem('access_token');

            if (!token) {
                setError('Vous devez être connecté pour voir les projets.');
                return;
            }

            try {
                const response = await fetch("http://127.0.0.1:8000/projets/", {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setNewsData(data);
                } else {
                    setError('Vous n\'êtes pas autorisé à voir ces projets.');
                }
            } catch (error) {
                console.error("Erreur lors de la récupération des projets :", error);
                setError('Une erreur s\'est produite lors de la récupération des projets.');
            }
        };

        fetchProjects();
    }, []);

    return (
        <div>
            <Home />
            <Image />
            <section className="news-sections">
                <header className="news-headers">Projets</header>
                {error ? (
                    <p className="error-message">{error}</p>
                ) : (
                    newsData.map((item, index) => (
                        <article className="news-articles" key={index}>
    <img className="news-images" loading="lazy" src={item.image} alt="" />
    <div className="news-contents">
        <h2 className="news-titles">{item.texte}</h2>
        <p className="news-details">{item.details}</p>
        <time className="news-dates">{formatDate(item.date)}</time>
        {item.file && (
            <a className="download-link" href={item.file} download>
                Télécharger le fichier
            </a>
        )}
    </div>
</article>

                    ))
                )}
            </section>
            <Footer />
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

export default Projects;
