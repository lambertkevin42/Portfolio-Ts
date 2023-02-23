import { TOGGLE_BURGER } from "../actions/burgerActions";

interface State {
  burgerIsOpen: boolean;
}

interface Action {
  type: string;
}

const initialState: State = {
  burgerIsOpen: false,

};

function reducer(state: State = initialState, action: Action = { type: '' }): State {
  switch (action.type){
    case TOGGLE_BURGER:
      return {
        ...state,
        burgerIsOpen: !state.burgerIsOpen,
      };
    default:
      return state;
  }
}

export default reducer;