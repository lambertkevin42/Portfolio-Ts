export const TOGGLE_BUTTON_PROJECT_ARIANE = 'TOGGLE_BUTTON_PROJECT_ARIANE';

interface ToggleButtonArianeAction {
  type: typeof TOGGLE_BUTTON_PROJECT_ARIANE;
}

export type ButtonProjectArianeActionTypes = ToggleButtonArianeAction;

export const toggleButtonProjectAriane = (): ButtonProjectArianeActionTypes => ({
  type: TOGGLE_BUTTON_PROJECT_ARIANE,
});
