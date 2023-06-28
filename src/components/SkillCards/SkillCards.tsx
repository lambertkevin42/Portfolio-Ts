import React from 'react';
import ToggleCardDesign from '../ToggleCards/ToggleCardDesign';
import ToggleCardDev from '../ToggleCards/ToggleCardDev';
import '../SkillCards/skillcard.scss';

const SkillCards: React.FC = () => {
  return (
    <div className="skillcards">
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
