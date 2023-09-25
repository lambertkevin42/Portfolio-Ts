import { TOGGLE_BUTTON_DESIGN } from '../actions/toggleDesignButtonAction';
import { TOGGLE_BUTTON_DEV } from '../actions/toggleDevButtonAction';
import { TOGGLE_BUTTON_PROJECT_ARIANE } from '../actions/toggleProjectArianeButtonAction';
import { TOGGLE_BUTTON_PROJECT_SCOTCH } from '../actions/toggleProjectScotchButtonAction';

interface State {
  toggleButtonDesignIsOpen: boolean;
  toggleButtonDevIsOpen: boolean;
  toggleButtonProjectArianeIsOpen: boolean;
  toggleButtonProjectScotchIsOpen: boolean;
}

interface Action {
  type: string;
}

const initialState: State = {
  toggleButtonDesignIsOpen: false,
  toggleButtonDevIsOpen: false,
  toggleButtonProjectArianeIsOpen: false,
  toggleButtonProjectScotchIsOpen: false,
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
    case TOGGLE_BUTTON_PROJECT_ARIANE:
      return {
        ...state,
        toggleButtonProjectArianeIsOpen: !state.toggleButtonProjectArianeIsOpen,
      };
    case TOGGLE_BUTTON_PROJECT_SCOTCH:
      return {
        ...state,
        toggleButtonProjectScotchIsOpen: !state.toggleButtonProjectScotchIsOpen,
      };
    default:
      return state;
  }
}

export default reducer;
