import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {SharedModule} from '../shared-module/shared-module.module';
import { MenuRestoranteComponent } from './menu-restorante/menu-restorante.component';
import {DataTableModule} from 'primeng/primeng';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {StoreModule} from '@ngrx/store';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    StoreModule,
    SharedModule,
  ],
  declarations: [HomeComponent, MenuRestoranteComponent, AboutComponent, ContactComponent]
})
export class HomeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: HomeModule,
      providers: []
    };
  }

}
