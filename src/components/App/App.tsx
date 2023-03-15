import React, { useEffect } from 'react';
import { useLocation, Location } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MyCard from '../MyCard/MyCard';
import ToggleCardDesign from '../ToggleCards/ToggleCardDesign';
import ToggleCardDev from '../ToggleCards/ToggleCardDev';
import './app.scss';

const App: React.FC = () => {
  const location: Location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [location]);

  return (
    <div className="app">
      <Header />
      <MyCard
        title="Bienvenue."
        textUp="Je m'appelle Kévin Lambert, je suis développeur Frontend."
        text1="Originaire de Saint-Etienne, je suis heureux de vous présenter mon portfolio."
        text2="Geek, passionné de création et de développement, j'accorde une attention toute particulière à l'expérience utilisateur de chacuns de mes projets. Espérant que votre expérience ici, sera des plus agréable, je vous laisse me découvrir."
        imgAlt="kévin lambert"
      />
      <ToggleCardDesign />
      <ToggleCardDev />
      <Footer />
    </div>
  );
};

export default App;
