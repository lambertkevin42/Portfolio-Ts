import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleButtonDesign } from '../../actions/toggleDesignButtonAction';
import { RootState } from '../../reducers/rootReducer';
import './buttontoggle.scss';

const ToggleButtonDesign: React.FC = () => {
  const dispatch = useDispatch();
  const { toggleButtonDesignIsOpen } = useSelector((state: RootState) => state.button);
  const handleClick = () => {
    dispatch(toggleButtonDesign());
  };
  return (
    <button
      aria-label="toggleBurger"
      type="button"
      className={`${toggleButtonDesignIsOpen ? 'togglebutton' : 'togglebutton'}`}
      onClick={handleClick}
    >
      Design
    </button>
  );
};

export default ToggleButtonDesign;
