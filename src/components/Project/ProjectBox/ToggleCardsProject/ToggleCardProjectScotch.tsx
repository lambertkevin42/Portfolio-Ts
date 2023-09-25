import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../reducers/rootReducer';
import ButtonToggleProjectScotch from './ButtonToggleProject/ButtonToggleProjectScotch';
import './togglecardproject.scss';

const ToggleCardProjectScotch: React.FC = () => {
  const { toggleButtonProjectScotchIsOpen } = useSelector((state: RootState) => state.button);
  return (
    <div className="togglecard">
      <ButtonToggleProjectScotch />
      <div className={`${toggleButtonProjectScotchIsOpen ? 'togglecard' : 'togglecard-closed'}`}>
        <div className="togglecard-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nesciunt nostrum eos
            illo ea dolore obcaecati sapiente sint quasi numquam! Asperiores laboriosam molestiae
            error, sunt ut autem atque similique hic.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ToggleCardProjectScotch;
