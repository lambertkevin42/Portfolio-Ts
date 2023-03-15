export const TOGGLE_BUTTON_DESIGN = 'TOGGLE_BUTTON_DESIGN';

interface ToggleButtonAction {
  type: typeof TOGGLE_BUTTON_DESIGN;
}

export type ButtonDesignActionTypes = ToggleButtonAction;

export const toggleButtonDesign = (): ButtonDesignActionTypes => ({
  type: TOGGLE_BUTTON_DESIGN,
});
