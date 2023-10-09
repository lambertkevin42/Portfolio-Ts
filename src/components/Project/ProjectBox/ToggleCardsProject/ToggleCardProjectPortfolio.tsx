import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../reducers/rootReducer';
import ButtonToggleProjectPortfolio from './ButtonToggleProject/ButtonToggleProjectPortfolio';
import './togglecardproject.scss';

const ToggleCardProjectPortfolio: React.FC = () => {
  const { toggleButtonProjectPortfolioIsOpen } = useSelector((state: RootState) => state.button);
  return (
    <div className="togglecardproject">
      <div
        className={`${
          toggleButtonProjectPortfolioIsOpen ? 'togglecardproject' : 'togglecardproject-closed'
        }`}
      >
        <div className="togglecardproject-content">
          <h2>Description du projet</h2>
          <p>
            Afin de mettre le plus de chances de mon côté et de ne rater aucunes opportunité, j'ai
            réalisé ce projet portfolio qui vous donne un aperçu de qui je suis et de ce que je
            fais.Tout comme le projet précedent mon portfolio à deux principaux buts.
          </p>
          <p>
            Le premier, est biensur de pouvoir mettre en avant mes compétences en vous permettant de
            juger en direct de mes capacités de Dev. Aujourd'hui je suis à la recherche d'un poste
            de développeur web front et de préférence sur React que j'affectionne particulièrement.
            J'espère que ce projet pourra m'apporter un peu plus de visibilité, et qu'il suscitera
            suffisamment votre intérêt pour que vous aillez envie de me contacter.
          </p>
          <p>
            Le second but de ce projet est plutôt simple. Je n'ai pas été formé sur Typescript
            c'était donc une occasion à ne pas manquer de palier à cette petite lacune. J'ai donc
            entrepris la réalisation de mon portfolio en utilisant Typescript.
          </p>
          <h2>Le code derriere ce projet</h2>
          <p>React</p>
          <p>Redux</p>
          <p>Typescript</p>
          <p>HTML</p>
          <p>SCSS</p>
          <p>Webp</p>
          <p>
            Vous pourrez retrouver ce projet sur mon Github. Que ce soit pour un entretien ou tout
            simplement pour me faire part de votre avis sur ce projet et les autres, n'hésitez pas à
            me contacter.
          </p>
          <p>Lorsque l'on arrête d'apprendre, on regresse ... J'attend vos retours et avis !</p>
        </div>
      </div>
      <ButtonToggleProjectPortfolio />
    </div>
  );
};

export default ToggleCardProjectPortfolio;
