import { TOGGLE_BUTTON_DESIGN } from '../actions/toggleDesignButtonAction';
import { TOGGLE_BUTTON_DEV } from '../actions/toggleDevButtonAction';
import { TOGGLE_BUTTON_PROJECT } from '../actions/toggleProjectButtonAction';

interface State {
  toggleButtonDesignIsOpen: boolean;
  toggleButtonDevIsOpen: boolean;
  toggleButtonProjectIsOpen: boolean;
}

interface Action {
  type: string;
}

const initialState: State = {
  toggleButtonDesignIsOpen: false,
  toggleButtonDevIsOpen: false,
  toggleButtonProjectIsOpen: false,
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
    case TOGGLE_BUTTON_PROJECT:
      return {
        ...state,
        toggleButtonProjectIsOpen: !state.toggleButtonProjectIsOpen,
      };
    default:
      return state;
  }
}

export default reducer;
