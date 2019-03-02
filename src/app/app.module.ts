import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HomeModule} from './home/home.module';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared-module/shared-module.module';
import {DataTableModule} from 'primeng/primeng';
import {reducers} from './store/reducers';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule.forRoot(),
    DataTableModule,
    SharedModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    environment.production ? [] : StoreDevtoolsModule.instrument({ maxAge: 50 }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
