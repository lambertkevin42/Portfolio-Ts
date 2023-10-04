import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleButtonProjectPortfolio } from '../../../../../actions/toggleProjectArianeButtonAction';
import { RootState } from '../../../../../reducers/rootReducer';
import './buttontoggleproject.scss';

const ButtonToggleProjectPortfolio: React.FC = () => {
  const dispatch = useDispatch();
  const { toggleButtonProjectPortfolioIsOpen } = useSelector((state: RootState) => state.button);
  const handleClick = () => {
    dispatch(toggleButtonProjectPortfolio());
  };
  return (
    <button
      aria-label="toggleBurger"
      type="button"
      className={`${toggleButtonProjectPortfolioIsOpen ? 'togglebutton' : 'togglebutton'}`}
      onClick={handleClick}
    >
      {toggleButtonProjectPortfolioIsOpen ? 'Moins' : 'Voir plus'}
    </button>
  );
};

export default ButtonToggleProjectPortfolio;
