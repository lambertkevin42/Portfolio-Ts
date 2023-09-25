import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../reducers/rootReducer';
import ButtonToggleProjectAriane from './ButtonToggleProject/ButtonToggleProjectAriane';
import './togglecardproject.scss';

const ToggleCardProjectAriane: React.FC = () => {
  const { toggleButtonProjectArianeIsOpen } = useSelector((state: RootState) => state.button);
  return (
    <div className="togglecard">
      <ButtonToggleProjectAriane />
      <div className={`${toggleButtonProjectArianeIsOpen ? 'togglecard' : 'togglecard-closed'}`}>
        <div className="togglecard-content">
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
    </div>
  );
};

export default ToggleCardProjectAriane;
