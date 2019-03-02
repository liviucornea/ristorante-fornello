import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuItem} from '../../DataModels/menu_item';
import {restoranteMenuItems} from '../../DataModels/mockData';
import {Observable, Subscription} from 'rxjs';
import {fromArray} from 'rxjs/internal/observable/fromArray';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/states';

@Component({
  selector: 'app-menu-restorante',
  templateUrl: './menu-restorante.component.html',
  styleUrls: ['./menu-restorante.component.scss']
})
export class MenuRestoranteComponent implements OnInit, OnDestroy {
  items: Array<MenuItem>;
  menuItemsSubscript$: Subscription;

  constructor(private store: Store<AppState>) {
    // this.items = <Array<MenuItem>>restoranteMenuItems;
  }

  ngOnInit() {
    const self = this;
    self.menuItemsSubscript$ = self.store.select('restaurantMenuItems').pipe().subscribe(data =>{
      self.items = data;
      console.log('menu items from the store came');
     });
  }

  ngOnDestroy(): void {
    this.menuItemsSubscript$.unsubscribe();
  }
}
