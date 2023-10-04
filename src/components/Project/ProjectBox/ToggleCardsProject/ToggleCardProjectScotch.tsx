import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../reducers/rootReducer';
import ButtonToggleProjectScotch from './ButtonToggleProject/ButtonToggleProjectScotch';
import './togglecardproject.scss';
import scotchartscreen1 from '../../../../assets/images/screen.webp';
import scotchartscreen2 from '../../../../assets/images/screen1.webp';
import scotchartscreen3 from '../../../../assets/images/screen2.webp';

interface CardProjectScotchProps {
  imgAlt1: string;
  imgAlt2: string;
  imgAlt3: string;
}

const ToggleCardProjectScotch: React.FC<CardProjectScotchProps> = ({
  imgAlt1,
  imgAlt2,
  imgAlt3,
}) => {
  const { toggleButtonProjectScotchIsOpen } = useSelector((state: RootState) => state.button);
  return (
    <div className="togglecardproject">
      <div
        className={`${
          toggleButtonProjectScotchIsOpen ? 'togglecardproject' : 'togglecardproject-closed'
        }`}
      >
        <div className="togglecardproject-content">
          <div className="togglecardproject-content-images">
            <div className="togglecardproject-content-images-container">
              <img
                className="togglecardproject-content-images-element"
                src={scotchartscreen1}
                alt={imgAlt1}
              />
            </div>
            <div className="togglecardproject-content-images-container">
              <img
                className="togglecardproject-content-images-element"
                src={scotchartscreen2}
                alt={imgAlt2}
              />
            </div>
            <div className="togglecardproject-content-images-container">
              <img
                className="togglecardproject-content-images-element"
                src={scotchartscreen3}
                alt={imgAlt3}
              />
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nesciunt nostrum eos
            illo ea dolore obcaecati sapiente sint quasi numquam! Asperiores laboriosam molestiae
            error, sunt ut autem atque similique hic.
          </p>
        </div>
      </div>
      <ButtonToggleProjectScotch />
    </div>
  );
};

export default ToggleCardProjectScotch;
