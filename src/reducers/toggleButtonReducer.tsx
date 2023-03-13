import { TOGGLE_BUTTON } from '../actions/toggleButtonAction';

interface State {
  ToggleButtonIsOpen: boolean;
}

interface Action {
  type: string;
}

const initialState: State = {
  ToggleButtonIsOpen: false,
};

function reducer(state: State = initialState, action: Action = { type: '' }): State {
  switch (action.type) {
    case TOGGLE_BUTTON:
      return {
        ...state,
        ToggleButtonIsOpen: !state.ToggleButtonIsOpen,
      };
    default:
      return state;
  }
}

export default reducer;
