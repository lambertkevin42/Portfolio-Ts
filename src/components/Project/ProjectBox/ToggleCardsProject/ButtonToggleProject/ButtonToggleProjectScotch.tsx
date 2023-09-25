import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleButtonProjectScotch } from '../../../../../actions/toggleProjectScotchButtonAction';
import { RootState } from '../../../../../reducers/rootReducer';
import './buttontoggleproject.scss';

const ButtonToggleProjectScotch: React.FC = () => {
  const dispatch = useDispatch();
  const { toggleButtonProjectScotchIsOpen } = useSelector((state: RootState) => state.button);
  const handleClick = () => {
    dispatch(toggleButtonProjectScotch());
  };
  return (
    <button
      aria-label="toggleBurger"
      type="button"
      className={`${toggleButtonProjectScotchIsOpen ? 'togglebutton' : 'togglebutton'}`}
      onClick={handleClick}
    >
      {toggleButtonProjectScotchIsOpen ? 'Moins' : 'Voir plus'}
    </button>
  );
};

export default ButtonToggleProjectScotch;
