export const TOGGLE_BUTTON_DEV = 'TOGGLE_BUTTON_DEV';

interface ToggleButtonAction {
  type: typeof TOGGLE_BUTTON_DEV;
}

export type ButtonDevActionTypes = ToggleButtonAction;

export const toggleButtonDev = (): ButtonDevActionTypes => ({
  type: TOGGLE_BUTTON_DEV,
});
