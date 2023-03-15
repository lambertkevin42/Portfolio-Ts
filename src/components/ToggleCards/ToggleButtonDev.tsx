import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleButtonDev } from '../../actions/toggleDevButtonAction';
import { RootState } from '../../reducers/rootReducer';
import './buttontoggle.scss';

const ToggleButtonDev: React.FC = () => {
  const dispatch = useDispatch();
  const { toggleButtonDevIsOpen } = useSelector((state: RootState) => state.button);
  const handleClick = () => {
    dispatch(toggleButtonDev());
  };
  return (
    <button
      aria-label="toggleBurger"
      type="button"
      className={`${toggleButtonDevIsOpen ? 'togglebutton' : 'togglebutton'}`}
      onClick={handleClick}
    >
      Développeur
    </button>
  );
};

export default ToggleButtonDev;
