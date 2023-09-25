export const TOGGLE_BUTTON_PROJECT_SCOTCH = 'TOGGLE_BUTTON_PROJECT_SCOTCH';

interface ToggleButtonScotchAction {
  type: typeof TOGGLE_BUTTON_PROJECT_SCOTCH;
}

export type ButtonProjectScotchActionTypes = ToggleButtonScotchAction;

export const toggleButtonProjectScotch = (): ButtonProjectScotchActionTypes => ({
  type: TOGGLE_BUTTON_PROJECT_SCOTCH,
});
