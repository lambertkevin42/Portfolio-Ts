import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../reducers/rootReducer';
import ButtonToggleProjectPortfolio from './ButtonToggleProject/ButtonToggleProjectPortfolio';
import './togglecardproject.scss';

const ToggleCardProjectPortfolio: React.FC = () => {
  const { toggleButtonProjectPortfolioIsOpen } = useSelector((state: RootState) => state.button);
  return (
    <div className="togglecardproject">
      <div
        className={`${
          toggleButtonProjectPortfolioIsOpen ? 'togglecardproject' : 'togglecardproject-closed'
        }`}
      >
        <div className="togglecardproject-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nesciunt nostrum eos
            illo ea dolore obcaecati sapiente sint quasi numquam! Asperiores laboriosam molestiae
            error, sunt ut autem atque similique hic.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Impedit nesciunt nostrum eos illo ea dolore obcaecati sapiente sint
            quasi numquam! Asperiores laboriosam molestiae error, sunt ut autem atque similique
            hic.Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nesciunt nostrum
            eos illo ea dolore obcaecati sapiente sint quasi numquam! Asperiores laboriosam
            molestiae error, sunt ut autem atque similique hic.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Impedit nesciunt nostrum eos illo ea dolore obcaecati
            sapiente sint quasi numquam! Asperiores laboriosam molestiae error, sunt ut autem atque
            similique hic.Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nesciunt
            nostrum eos illo ea dolore obcaecati sapiente sint quasi numquam! Asperiores laboriosam
            molestiae error, sunt ut autem atque similique hic.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Impedit nesciunt nostrum eos illo ea dolore obcaecati
            sapiente sint quasi numquam! Asperiores laboriosam molestiae error, sunt ut autem atque
            similique hic.Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nesciunt
            nostrum eos illo ea dolore obcaecati sapiente sint quasi numquam! Asperiores laboriosam
            molestiae error, sunt ut autem atque similique hic.
          </p>
        </div>
      </div>
      <ButtonToggleProjectPortfolio />
    </div>
  );
};

export default ToggleCardProjectPortfolio;
