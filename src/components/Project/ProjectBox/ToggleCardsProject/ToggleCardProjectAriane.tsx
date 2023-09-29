import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../reducers/rootReducer';
import ButtonToggleProjectAriane from './ButtonToggleProject/ButtonToggleProjectAriane';
import './togglecardproject.scss';
import arianescreen1 from '../../../../assets/images/montage.png';
import arianescreen2 from '../../../../assets/images/screenariane.png';
import arianescreen3 from '../../../../assets/images/screenariane2.png';

interface CardProjectArianeProps {
  imgAlt1: string;
  imgAlt2: string;
  imgAlt3: string;
}

const ToggleCardProjectAriane: React.FC<CardProjectArianeProps> = ({
  imgAlt1,
  imgAlt2,
  imgAlt3,
}) => {
  const { toggleButtonProjectArianeIsOpen } = useSelector((state: RootState) => state.button);
  return (
    <div className="togglecard">
      <div className={`${toggleButtonProjectArianeIsOpen ? 'togglecard' : 'togglecard-closed'}`}>
        <div className="togglecard-content">
          <div className="togglecard-content-images">
            <img className="togglecard-content-images-element" src={arianescreen1} alt={imgAlt1} />
            <img className="togglecard-content-images-element" src={arianescreen2} alt={imgAlt2} />
            <img className="togglecard-content-images-element" src={arianescreen3} alt={imgAlt3} />
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
      <ButtonToggleProjectAriane />
    </div>
  );
};

export default ToggleCardProjectAriane;
