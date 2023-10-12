import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers/rootReducer';
import './togglecard.scss';
import ToggleButtonDev from './ToggleButtonDev';
import SliderDev from '../Sliders/SliderDev';

const ToggleCardDev: React.FC = () => {
  const { toggleButtonDevIsOpen } = useSelector((state: RootState) => state.button);
  return (
    <div className="togglecard">
      <ToggleButtonDev />
      <div className={`${toggleButtonDevIsOpen ? 'togglecard' : 'togglecard-closed'}`}>
        <div className="togglecard-content">
          <p>
            En 2022, j'ai entrepris une reconversion en développement web à l'école O'Clock. En
            effet ma passion pour l'informatique, les nouvelles technologies et la création ainsi
            que mon côté geek m'ont poussés à me lancer dans ce projet de vie différent. Cette
            formation à durée 6mois, soit 798 heures. Au cours de ces dernières, j'ai appris pendant
            3 mois, les bases du développement web : PHP, HTML, CSS, JS, SQL et la POO... Ensuite
            j'ai du choisir une spécialisation. C'est tout naturellement que je me suis tourné vers
            le front en spécialisation React, ce qui a duré 1 mois. A la suite de cet apprentissage,
            nous avons monté de A à Z un projet en équipe de 4 développeurs (2 back et 2front). J'ai
            soutenu ce projet en janvier 2023, ce qui m'a permis d'obtenir mon Titre Professionnel
            Développeur Web et Web Mobile.
          </p>
          <SliderDev />
          <div className="list">
            <h2 className="list-title">Les petits plus du dev</h2>
            <ul className="list-items">
              <li>Méthodes agiles</li>
              <li>SCRUM</li>
              <li>Git</li>
              <li>Github</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToggleCardDev;
