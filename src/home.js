import './App.css';
import * as React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const menuItems = [
  { label: "Accueil", link: "/" },
  { label: "Actualités", link: "/news" },
  { label: "Informations", link: "/info" },
  { label: "Connexion", link: "/connexion" },
]; 


function Home() {
  
  return (
    <div className='body'>
      <header className='HeaderWrapper'>
        <div className='LogoSection'>
          <div className='Logo'>LOGO</div>
          <p className='SiteTitle'>
            DIRECTION REGIONALE DE <span className="SubTitle">L'AGRICULTURE DU CENTRE</span>
          </p>
        </div>
        <nav className='Nav'>
          {menuItems.map((item) => (
            <p className='NavItem' key={item.label}>
              <a className='NavLink' href={item.link}>{item.label}</a>
            </p>
          ))}
        </nav>
      </header>
    </div>
  );
}

export default Home;
