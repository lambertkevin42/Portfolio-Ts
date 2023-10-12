import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers/rootReducer';
import './togglecard.scss';
import ToggleButtonDesign from './ToggleButtonDesign';
import SliderDesign from '../Sliders/SliderDesign';

const ToggleCardDesign: React.FC = () => {
  const { toggleButtonDesignIsOpen } = useSelector((state: RootState) => state.button);
  return (
    <div className="togglecard">
      <ToggleButtonDesign />
      <div className={`${toggleButtonDesignIsOpen ? 'togglecard' : 'togglecard-closed'}`}>
        <div className="togglecard-content">
          <p>
            Ayant un esprit créatif, je me suis naturellement tourné vers un MASTER en design, que
            j'ai obtenu en 2019. Pour moi l'expérience utilisateur est très importante, c'est
            pourquoi j'y prête toute mon attention lors de mes divers projets. Mes multiples
            expériences dans ce domaine et ma maîtrise des différents logiciels de la suite Adobe,
            sont autant d'atouts que je mets au service du développement web. Vous pourrez
            d'ailleurs observer dans mes différents projets, les quelques contenus graphiques que
            j'ai créé pour nourrir le front de façon personnalisé.Je n'aurais donc aucune difficulté
            à travailler en symbiose avec le pôle artistique et les designers de votre entreprise.
            Au vu de mon parcours passé et de mes envies futures, la spécialisation en front était
            une évidence.
          </p>
          <SliderDesign />
          <div className="list">
            <h2 className="list-title">Les petits plus du designer</h2>
            <ul className="list-items">
              <li>Créativité</li>
              <li>Wireframe</li>
              <li>Maquette</li>
              <li>Gestion de projet</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToggleCardDesign;
