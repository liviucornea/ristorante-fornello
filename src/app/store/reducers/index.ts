import {AppState} from '../states';
import {restaurantMenuItemsReducer} from './restaurant.menu.items.reducer';
import {ActionReducerMap} from '@ngrx/store';

export const reducers: ActionReducerMap<AppState> = {
  restaurantMenuItems: restaurantMenuItemsReducer
}


