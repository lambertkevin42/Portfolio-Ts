import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../reducers/rootReducer';
import ButtonToggleProjectAriane from './ButtonToggleProject/ButtonToggleProjectAriane';
import './togglecardproject.scss';
import arianescreen1 from '../../../../assets/images/montage.webp';
import arianescreen2 from '../../../../assets/images/screenariane.webp';
import arianescreen3 from '../../../../assets/images/screenariane2.webp';

interface CardProjectArianeProps {
  imgAlt1: string;
  imgAlt2: string;
  imgAlt3: string;
}

const ToggleCardProjectAriane: React.FC<CardProjectArianeProps> = ({
  imgAlt1,
  imgAlt2,
  imgAlt3,
}) => {
  const { toggleButtonProjectArianeIsOpen } = useSelector((state: RootState) => state.button);
  return (
    <div className="togglecardproject">
      <div
        className={`${
          toggleButtonProjectArianeIsOpen ? 'togglecardproject' : 'togglecardproject-closed'
        }`}
      >
        <div className="togglecardproject-content">
          <div className="togglecardproject-content-images">
            <div className="togglecardproject-content-images-container">
              <img
                className="togglecardproject-content-images-element"
                src={arianescreen1}
                alt={imgAlt1}
              />
            </div>
            <div className="togglecardproject-content-images-container">
              <img
                className="togglecardproject-content-images-element"
                src={arianescreen2}
                alt={imgAlt2}
              />
            </div>
            <div className="togglecardproject-content-images-container">
              <img
                className="togglecardproject-content-images-element"
                src={arianescreen3}
                alt={imgAlt3}
              />
            </div>
          </div>
          <h2>Description du projet</h2>
          <p>
            L’idée de ce site à vue le jour, suite à la guerre en Ukraine, où l’on a pu constater un
            élan de solidarité envers ce pays et son peuple. Il nous a paru utile de créer une
            plateforme permettant l’organisation des différentes structures autour de besoins divers
            comme le transport, le don de médicaments mais aussi de vêtements par exemple.
          </p>
          <p>
            Dans ce site on retrouve des annonces représentant des besoins postés par des
            associations (connectées). Les volontaires (connectés) ont la possibilité de candidater
            aux annonces pour apporter l’aide exprimer dans l’annonce de l’association. Une personne
            dans le besoin (non connectée) peut également trouver les coordonnées pour contacter
            l’association.
          </p>
          <p>
            En résumé, vous êtes une association avec des besoins spécifiques ? Vous avez des
            compétences ou des équipements que vous souhaitez mettre à disposition ? Vous rencontrez
            un problème et vous ne savez pas vers qui vous tourner ?
          </p>
          <p>
            Vous êtes au bon endroit : Ariane vous guide dans toutes vos démarches, suivez le fil !
          </p>
          <h2>Mon rôle dans ce projet</h2>
          <p>Lead Dev Front</p>
          <p>Graphiste</p>
          <p>
            En travaillant avec la méthode SCRUM, j'ai pris le rôle de Lead Dev Front afin de
            maintenir une fluidité dans notre travail d'équipe et de pouvoir respecter les délais.
            Mes compétences sur les logiciels de design m'ont permis de créer les contenus graphique
            de notre projet. Côté développement web, j'ai réalisé le responsive design,
            l'intégration, la création des divers composants React et les calls API REST (via
            axios). J'avais également pour responsabilité la gestion et l'optimisation de
            l'expérience utilisateur.
          </p>
        </div>
      </div>
      <ButtonToggleProjectAriane />
    </div>
  );
};

export default ToggleCardProjectAriane;
