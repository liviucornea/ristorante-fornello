import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {SharedModule} from '../shared-module/shared-module.module';
import { MenuRestoranteComponent } from './menu-restorante/menu-restorante.component';
import {DataTableModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    SharedModule,
  ],
  declarations: [HomeComponent, MenuRestoranteComponent]
})
export class HomeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: HomeModule,
      providers: []
    };
  }

}
