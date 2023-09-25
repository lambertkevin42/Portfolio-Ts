export const TOGGLE_BUTTON_PROJECT = 'TOGGLE_BUTTON_PROJECT':

interface ToggleButtonAction {
    type: typeof TOGGLE_BUTTON_PROJECT;
}

export type ButtonProjectActionTypes = ToggleButtonAction;

export const toggleButtonProject = () : ButtonProjectActionTypes => ({
    type: TOGGLE_BUTTON_PROJECT,
});