import { TOGGLE_BUTTON_DESIGN } from '../actions/toggleDesignButtonAction';
import { TOGGLE_BUTTON_DEV } from '../actions/toggleDevButtonAction';

interface State {
  toggleButtonDesignIsOpen: boolean;
  toggleButtonDevIsOpen: boolean;
}

interface Action {
  type: string;
}

const initialState: State = {
  toggleButtonDesignIsOpen: false,
  toggleButtonDevIsOpen: false,
};

function reducer(state: State = initialState, action: Action = { type: '' }): State {
  switch (action.type) {
    case TOGGLE_BUTTON_DESIGN:
      return {
        ...state,
        toggleButtonDesignIsOpen: !state.toggleButtonDesignIsOpen,
      };
    case TOGGLE_BUTTON_DEV:
      return {
        ...state,
        toggleButtonDevIsOpen: !state.toggleButtonDevIsOpen,
      };
    default:
      return state;
  }
}

export default reducer;
