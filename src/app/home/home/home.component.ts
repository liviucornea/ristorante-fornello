import {Component, OnInit} from '@angular/core';
import {LoadRestMenuItems} from '../../store/actions';
import {restoranteMenuItems} from '../../DataModels/mockData';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/states';
import {MenuItem} from '../../DataModels/menu_item';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    // here we load  menu items in store but it should be done via some service form you rest api
    const menuItemsAction = new LoadRestMenuItems(<Array<MenuItem>>restoranteMenuItems);
    this.store.dispatch(menuItemsAction);
  }

}
