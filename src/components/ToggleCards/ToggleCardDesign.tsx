import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers/rootReducer';
import './togglecard.scss';
import ToggleButtonDesign from './ToggleButtonDesign';

const ToggleCardDesign: React.FC = () => {
  const { toggleButtonDesignIsOpen } = useSelector((state: RootState) => state.button);
  return (
    <div className="togglecard">
      <ToggleButtonDesign />
      <div className={`${toggleButtonDesignIsOpen ? 'togglecard' : 'togglecard-closed'}`}>
        <p className="togglecard-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nesciunt nostrum eos illo
          ea dolore obcaecati sapiente sint quasi numquam! Asperiores laboriosam molestiae error,
          sunt ut autem atque similique hic.
        </p>
      </div>
    </div>
  );
};

export default ToggleCardDesign;
