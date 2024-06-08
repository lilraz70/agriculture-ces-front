import * as React from "react";
import './ajout_element.css'; // Import des styles CSS
import Home from "../home";
import Image from "../image_slider";
import Footer from "../footer";

const newsItems = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3a54986da286c8ae658ed1b8c008bbc1a3d5f5f8a56696870d77eebdfc94a916?apiKey=f0fb0492b0ba40b1bb9cd918a3d047bb&", alt: "News icon 1", link: "http://127.0.0.1:8000/admin/agriculture/actualite/add/" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e80971cf5ff8cf4c68045fe4d31be2238284ebeccb8b3614c00eceae964999e6?apiKey=f0fb0492b0ba40b1bb9cd918a3d047bb&", alt: "News icon 2", link: "http://127.0.0.1:8000/admin/agriculture/actualite/" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e28c6cdb07bc9531543dcc97e567d693b05add292439a4308f3cfa16e1946b84?apiKey=f0fb0492b0ba40b1bb9cd918a3d047bb&", alt: "News icon 3", link: "http://127.0.0.1:8000/admin/agriculture/actualite/" },
];

const infoItems = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3a54986da286c8ae658ed1b8c008bbc1a3d5f5f8a56696870d77eebdfc94a916?apiKey=f0fb0492b0ba40b1bb9cd918a3d047bb&", alt: "Info icon 1", link: "http://127.0.0.1:8000/admin/agriculture/information/add/" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e80971cf5ff8cf4c68045fe4d31be2238284ebeccb8b3614c00eceae964999e6?apiKey=f0fb0492b0ba40b1bb9cd918a3d047bb&", alt: "Info icon 2", link: "http://127.0.0.1:8000/admin/agriculture/information/" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fb70fd1247d0bffcde352adf598b7ddd2212e3883c21d6c5928d2c982057f43a?apiKey=f0fb0492b0ba40b1bb9cd918a3d047bb&", alt: "Info icon 3", link: "http://127.0.0.1:8000/admin/agriculture/information/" },
];

const projetItems = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3a54986da286c8ae658ed1b8c008bbc1a3d5f5f8a56696870d77eebdfc94a916?apiKey=f0fb0492b0ba40b1bb9cd918a3d047bb&", alt: "Info icon 1", link: "http://127.0.0.1:8000/admin/agriculture/projet/add/" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e80971cf5ff8cf4c68045fe4d31be2238284ebeccb8b3614c00eceae964999e6?apiKey=f0fb0492b0ba40b1bb9cd918a3d047bb&", alt: "Info icon 2", link: "http://127.0.0.1:8000/admin/agriculture/projet/" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fb70fd1247d0bffcde352adf598b7ddd2212e3883c21d6c5928d2c982057f43a?apiKey=f0fb0492b0ba40b1bb9cd918a3d047bb&", alt: "Info icon 3", link: "http://127.0.0.1:8000/admin/agriculture/projet/" },
  ];

function Ajout() {
  return (
    <div>
        <Home/>
        <Image/>
        
    <div className="containerse">
      <h1 className="headerse">Bienvenue Administrateur</h1>
      <section className="news-section">
        <h2 className="news-title">Actualités</h2>
        <div className="news-icons">
          {newsItems.map((item, index) => (
            <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
              <button className="news-button">
                <img className="news-icon" src={item.icon} alt={item.alt} />
              </button>
            </a>
          ))}
        </div>
      </section>
      <section className="info-section">
        <h2 className="info-title">Informations</h2>
        {infoItems.map((item, index) => (
          <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
            <button className="info-button">
              <img className="info-icon" src={item.icon} alt={item.alt} />
            </button>
          </a>
        ))}
      </section>
      <section className="projet-section">
        <h2 className="projet-title">Projets</h2>
        {projetItems.map((item, index) => (
          <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
            <button className="projet-button">
              <img className="projet-icon" src={item.icon} alt={item.alt} />
            </button>
          </a>
        ))}
      </section>
    </div>
    <Footer/>
    </div>
  );
}

export default Ajout;
