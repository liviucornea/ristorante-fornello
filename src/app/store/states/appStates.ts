import {MenuItem} from '../../DataModels/menu_item';

export const INITIAL_RESTAURANT_MENU_ITEMS_STATE: Array<MenuItem> = [];


export interface AppState {
  restaurantMenuItems: Array<MenuItem>;
}
