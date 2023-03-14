import { TOGGLE_BUTTON } from '../actions/toggleButtonAction';

interface State {
  toggleButtonIsOpen: boolean;
}

interface Action {
  type: string;
}

const initialState: State = {
  toggleButtonIsOpen: false,
};

function reducer(state: State = initialState, action: Action = { type: '' }): State {
  switch (action.type) {
    case TOGGLE_BUTTON:
      return {
        ...state,
        toggleButtonIsOpen: !state.toggleButtonIsOpen,
      };
    default:
      return state;
  }
}

export default reducer;
