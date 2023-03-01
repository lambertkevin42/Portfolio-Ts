export const TOGGLE_BURGER = 'TOGGLE_BURGER';

interface ToggleBurgerAction {
  type: typeof TOGGLE_BURGER;
}

export type BurgerActionTypes = ToggleBurgerAction;

export const toggleBurger = (): BurgerActionTypes => ({
  type: TOGGLE_BURGER,
});
