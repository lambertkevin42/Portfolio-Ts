import React from 'react';
import MyExperienceBox from './MyExperienceBox/MyExperienceBox';
import '../MyExperience/myexperience.scss';

interface MyExperienceProps {
  title: string;
  id: string;
}

const MyExperience: React.FC<MyExperienceProps> = ({ title, id }) => {
  return (
    <div className="myexperience" id={id}>
      <h2 className="myexperience-title">{title}</h2>
      <MyExperienceBox
        date="juin-novembre 2022"
        title="Formation DWWM, O'clock"
        intro="Formation de Développeur Web et Web mobile"
        intro2="Spécialité React"
        intro3=""
      />
      <MyExperienceBox
        date="2017 & 2019"
        title="Graphisme"
        intro="Dessins vectoriels pour hélice holographique et montage vidéo pour SFB PNEU"
        intro2="Création de supports digitaux et physiques pour ELUDICE"
        intro3="Identité de marque pour OSCAR & GABRIELLE"
      />
      <MyExperienceBox
        date="2018 & 2019"
        title="Design UI/UX"
        intro="Projet prototype de l'application Babet dans le cadre d'un hackaton pour la ville de ST-Etienne"
        intro2="Réalisations d'interface joueurs pour ELUDICE"
        intro3=""
      />
      <MyExperienceBox
        date="2019"
        title="Game & Narrative Design"
        intro="Création et mise en oeuvre du gameplay, des divers mécanismes de jeu et des intéractions jeux/joueurs pour ELUDICE"
        intro2="Chargé de l'immersion et des affordances aux jeux ELUDICE"
        intro3=""
      />
      <MyExperienceBox
        date="2017 & 2019"
        title="Design d'objet"
        intro="Design d'airbag d'équitation pour OSCAR & GABRIELLE"
        intro2="Conception et création d'une chilienne hivernale éco-conçue pour la Biennale Internationnale de Design de Saint-Etienne"
        intro3=""
      />
      <MyExperienceBox
        date="2019"
        title="Evennementiel et Design de service"
        intro="Création d'un jeu type escape game pour 200 joueurs dans le cadre d'un séminaire pour DANONE"
        intro2="Création de jeux ayant pour but de sensibiliser les joueurs aux dangers pour SNCF et à l'environnement pour DIVERTY"
        intro3=""
      />
    </div>
  );
};

export default MyExperience;
