import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers/rootReducer';
import '../ToggleCard/togglecard.scss';
import ToggleButton from './ToggleButton';

const ToggleCard: React.FC = () => {
  const { toggleButtonIsOpen } = useSelector((state: RootState) => state.button);
  return (
    <div className="togglecard">
      <ToggleButton />
      <div className={`${toggleButtonIsOpen ? 'togglecard' : 'togglecard-closed'}`}>
        <p className="togglecard-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nesciunt nostrum eos illo
          ea dolore obcaecati sapiente sint quasi numquam! Asperiores laboriosam molestiae error,
          sunt ut autem atque similique hic.
        </p>
      </div>
    </div>
  );
};

export default ToggleCard;
