import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleButtonProject } from '../../../../../actions/toggleProjectButtonAction';
import { RootState } from '../../../../../reducers/rootReducer';
import './buttontoggleproject.scss';

const ButtonToggleProject: React.FC = () => {
  const dispatch = useDispatch();
  const { toggleButtonProjectIsOpen } = useSelector((state: RootState) => state.button);
  const handleClick = () => {
    dispatch(toggleButtonProject());
  };
  return (
    <button
      aria-label="toggleBurger"
      type="button"
      className={`${toggleButtonProjectIsOpen ? 'togglebutton' : 'togglebutton'}`}
      onClick={handleClick}
    >
      Voir plus
    </button>
  );
};

export default ButtonToggleProject;
