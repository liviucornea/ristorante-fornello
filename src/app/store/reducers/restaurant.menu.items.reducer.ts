import {INITIAL_RESTAURANT_MENU_ITEMS_STATE } from '../states';
import {MenuItem} from '../../DataModels/menu_item';
import {ActionTypes} from '../actions';

export function restaurantMenuItemsReducer(
  state: Array<MenuItem> = INITIAL_RESTAURANT_MENU_ITEMS_STATE ,
  action: any
) {
  switch (action.type) {
    case ActionTypes.GetRestaurantMenuItemsList:
      return action.payload;
    default:
      return state;
  }
}
