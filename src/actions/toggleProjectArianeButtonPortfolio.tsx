export const TOGGLE_BUTTON_PROJECT_PORTFOLIO = 'TOGGLE_BUTTON_PROJECT_PORTFOLIO';

interface ToggleButtonPortfolioAction {
  type: typeof TOGGLE_BUTTON_PROJECT_PORTFOLIO;
}

export type ButtonProjectPortfolioActionTypes = ToggleButtonPortfolioAction;

export const toggleButtonProjectPortfolio = (): ButtonProjectPortfolioActionTypes => ({
  type: TOGGLE_BUTTON_PROJECT_PORTFOLIO,
});
