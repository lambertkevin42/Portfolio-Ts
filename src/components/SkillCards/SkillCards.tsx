import React from 'react';
import ToggleCardDesign from '../ToggleCards/ToggleCardDesign';
import ToggleCardDev from '../ToggleCards/ToggleCardDev';
import '../SkillCards/skillcard.scss';

interface SkillCardsProps {
  id: string;
}

const SkillCards: React.FC<SkillCardsProps> = ({ id }) => {
  return (
    <div className="skillcards" id={id}>
      <div className="skillcards-title">
        <h2>Mes Skills</h2>
      </div>
      <div className="skillcards-element">
        <ToggleCardDesign />
      </div>
      <div className="skillcards-element">
        <ToggleCardDev />
      </div>
    </div>
  );
};

export default SkillCards;
