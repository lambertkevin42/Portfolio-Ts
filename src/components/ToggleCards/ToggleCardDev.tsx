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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nesciunt nostrum eos
            illo ea dolore obcaecati sapiente sint quasi numquam! Asperiores laboriosam molestiae
            error, sunt ut autem atque similique hic.
          </p>
          <SliderDev />
        </div>
      </div>
    </div>
  );
};

export default ToggleCardDev;
