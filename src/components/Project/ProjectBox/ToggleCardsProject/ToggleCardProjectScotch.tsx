import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../reducers/rootReducer';
import ButtonToggleProjectScotch from './ButtonToggleProject/ButtonToggleProjectScotch';
import './togglecardproject.scss';
import scotchartscreen1 from '../../../../assets/images/screen.webp';
import scotchartscreen2 from '../../../../assets/images/screen1.webp';
import scotchartscreen3 from '../../../../assets/images/screen2.webp';

interface CardProjectScotchProps {
  imgAlt1: string;
  imgAlt2: string;
  imgAlt3: string;
}

const ToggleCardProjectScotch: React.FC<CardProjectScotchProps> = ({
  imgAlt1,
  imgAlt2,
  imgAlt3,
}) => {
  const { toggleButtonProjectScotchIsOpen } = useSelector((state: RootState) => state.button);
  return (
    <div className="togglecardproject">
      <div
        className={`${
          toggleButtonProjectScotchIsOpen ? 'togglecardproject' : 'togglecardproject-closed'
        }`}
      >
        <div className="togglecardproject-content">
          <div className="togglecardproject-content-images">
            <div className="togglecardproject-content-images-container">
              <img
                className="togglecardproject-content-images-element"
                src={scotchartscreen1}
                alt={imgAlt1}
              />
            </div>
            <div className="togglecardproject-content-images-container">
              <img
                className="togglecardproject-content-images-element"
                src={scotchartscreen2}
                alt={imgAlt2}
              />
            </div>
            <div className="togglecardproject-content-images-container">
              <img
                className="togglecardproject-content-images-element"
                src={scotchartscreen3}
                alt={imgAlt3}
              />
            </div>
          </div>
          <p>
            <h2>Description du projet</h2>
          </p>
          <p>
            Je vous présente par le biais de ce projet un de mes hobbits: des oeuvres faites avec du
            scotch de déménagement. En effet, ce projet avait deux objectifs principaux.
          </p>
          <p>
            Le premier, pouvoir présenter un site gallerie, qui propose une découverte de ce que je
            réalise à mes heures perdues. J'ai donc concentré l'epérience utilisateur sur la
            simplicité de l'expérience afin de mettre réellement en valeurs mes oeuvres artistiques.
          </p>
          <p>
            Le second, optimiser les performances et les CSP de ce projet afin d'obtenir 100% sur
            gtxmetrix.L'optimisation rend l'expérience utilisateur plus fluide et donc plus
            agréable. Ce petit projet personnel était en toute logique désigner pour cet exercice.
          </p>
          <p>
            Pour voir ce projet et assouvir votre curiosité{' '}
            <a href="https://scotchart.surge.sh/">cliquer ici</a>
          </p>
          <p>
            <h2>Le code derriere ce projet</h2>
          </p>
          <p>React</p>
          <p>Redux</p>
          <p>HTML</p>
          <p>SCSS</p>
          <p>Le petit plus : L'utilisation du format Webp</p>
          <p>
            Pour ce qui est de la mise en production de ce projet je me suis servis de Surge qui
            offre une utilisation simple et efficace en ligne de commande.
          </p>
        </div>
      </div>
      <ButtonToggleProjectScotch />
    </div>
  );
};

export default ToggleCardProjectScotch;
