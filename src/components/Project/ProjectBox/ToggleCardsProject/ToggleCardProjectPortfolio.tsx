import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../reducers/rootReducer';
import ButtonToggleProjectPortfolio from './ButtonToggleProject/ButtonToggleProjectAriane';
import './togglecardproject.scss';
import arianescreen1 from '../../../../assets/images/montage.png';
import arianescreen2 from '../../../../assets/images/screenariane.png';
import arianescreen3 from '../../../../assets/images/screenariane2.png';

interface CardProjectPortfolioProps {
  imgAlt1: string;
  imgAlt2: string;
  imgAlt3: string;
}

const ToggleCardProjectPortfolio: React.FC<CardProjectPortfolioProps> = ({
  imgAlt1,
  imgAlt2,
  imgAlt3,
}) => {
  const { toggleButtonProjectPortfolioIsOpen } = useSelector((state: RootState) => state.button);
  return (
    <div className="togglecardproject">
      <div
        className={`${
          toggleButtonProjectPortfolioIsOpen ? 'togglecardproject' : 'togglecardproject-closed'
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
