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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nesciunt nostrum eos
            illo ea dolore obcaecati sapiente sint quasi numquam! Asperiores laboriosam molestiae
            error, sunt ut autem atque similique hic.
          </p>
          <SliderDesign />
          <div className="list">
            <h2 className="list-title">Les petits plus du designer</h2>
            <ul className="list-items">
              <li>Crayon / papier</li>
              <li>Wireframe</li>
              <li>Maquette</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToggleCardDesign;
