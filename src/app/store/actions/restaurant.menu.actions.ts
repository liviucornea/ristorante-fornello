import { Action } from '@ngrx/store';
import {MenuItem} from '../../DataModels/menu_item';


export enum ActionTypes {
  GetRestaurantMenuItemsList = '[MenuItems] LoadRestMenuItems',
}

export class LoadRestMenuItems implements Action {
  readonly type = ActionTypes.GetRestaurantMenuItemsList;
  constructor(public payload?: Array<MenuItem>) {}
}
