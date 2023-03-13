export const TOGGLE_BUTTON = 'TOGGLE_BUTTON';

interface ToggleButtonAction {
  type: typeof TOGGLE_BUTTON;
}

export type ButtonActionTypes = ToggleButtonAction;

export const toggleButton = (): ButtonActionTypes => ({
  type: TOGGLE_BUTTON,
});
