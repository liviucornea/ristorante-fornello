import {Component, OnInit} from '@angular/core';
import {MenuItem} from '../DataModels/menu_item';
import {restoranteMenuItems} from '../DataModels/mockData';
import {Observable} from 'rxjs';
import {fromArray} from 'rxjs/internal/observable/fromArray';

@Component({
  selector: 'app-menu-restorante',
  templateUrl: './menu-restorante.component.html',
  styleUrls: ['./menu-restorante.component.scss']
})
export class MenuRestoranteComponent implements OnInit {
  items: Array<MenuItem>;
  streamOfItems$: Observable<MenuItem>;

  constructor() {
    this.items = <Array<MenuItem>>restoranteMenuItems;
  }

  ngOnInit() {
  }

}
