import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleButtonProjectAriane } from '../../../../../actions/toggleProjectArianeButtonAction';
import { RootState } from '../../../../../reducers/rootReducer';
import './buttontoggleproject.scss';

const ButtonToggleProjectAriane: React.FC = () => {
  const dispatch = useDispatch();
  const { toggleButtonProjectArianeIsOpen } = useSelector((state: RootState) => state.button);
  const handleClick = () => {
    dispatch(toggleButtonProjectAriane());
  };
  return (
    <button
      aria-label="toggleBurger"
      type="button"
      className={`${toggleButtonProjectArianeIsOpen ? 'togglebutton' : 'togglebutton'}`}
      onClick={handleClick}
    >
      Voir plus
    </button>
  );
};

export default ButtonToggleProjectAriane;
