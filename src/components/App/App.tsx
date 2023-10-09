import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MyCard from '../MyCard/MyCard';
import SkillCards from '../SkillCards/SkillCards';
import MyExperience from '../MyExperience/MyExperience';
import Project from '../Project/Project';
import Contact from '../Contact/Contact';
import './app.scss';
import ToTop from '../ToTop/ToTop';

const App: React.FC = () => {
  const location = useLocation();

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
      <ToTop />
      <MyCard
        title="Bienvenue."
        textUp="Je m'appelle Kévin Lambert, développeur Frontend de 29 ans, je suis aujourd'hui à la recherche d'opportunités."
        text1="Originaire de Saint-Etienne, je suis heureux de vous présenter mon portfolio."
        text2="Geek, passionné de création et de développement, j'accorde une attention toute particulière à l'expérience utilisateur de chacun de mes projets. Espérant que votre expérience ici, sera des plus agréables, je vous laisse me découvrir."
        imgAlt="kévin lambert"
      />
      <SkillCards id="SkillCards" />
      <MyExperience id="MyExperiences" title="Mes Experiences" />
      <Project id="Projects" title="Mes Projets" />
      <Contact
        id="Contact"
        title="Me contacter"
        titlemail="Par mail"
        titlephone="Par téléphone"
        text1="pro.kevin.lambert@gmail.com"
        text2="06 48 36 86 32"
        imgAlt="mail"
        imgAlt1="phone"
      />
      <Footer />
    </div>
  );
};

export default App;
