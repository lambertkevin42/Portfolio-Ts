import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleButton } from '../../actions/toggleButtonAction';
import { RootState } from '../../reducers/rootReducer';
import '../ToggleCard/buttontoggle.scss';

const ToggleButton: React.FC = () => {
  const dispatch = useDispatch();
  const { toggleButtonIsOpen } = useSelector((state: RootState) => state.button);
  const handleClick = () => {
    dispatch(toggleButton());
  };
  return (
    <button
      aria-label="toggleBurger"
      type="button"
      className={`${toggleButtonIsOpen ? 'togglebutton' : 'togglebutton'}`}
      onClick={handleClick}
    >
      Design
    </button>
  );
};

export default ToggleButton;
