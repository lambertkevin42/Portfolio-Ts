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
            Issue initialement d'un master en design obtenu en 2019, j'ai naturellement un esprit
            créatif. Pour moi l'expérience utilisateur est très importante, c'est pourquoi j'y prête
            toute mon attention lors de mes divers projets. Mes diverses expériences dans ce domaine
            et ma maîtrise des différents logiciels de la suite Adobe, sont autant d'aouts que je
            met au service du développement web. Vous pourrez d'ailleurs observer dans mes
            différents projets, les quelques contenu graphiques que j'ai créer pour nourrir le front
            de façon personnalisé.Je n'aurais donc aucune difficulté à travailler en symbiose avec
            le pôle artistique et les designers de votre entreprise. Au vu de mon parcour passé et
            de mes envies futures, c'était donc une évidence pour moi de me spécialiser en front.
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
