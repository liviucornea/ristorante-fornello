import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {CardListComponent} from './card-list/card-list.component';
import {CardContentDirective, CardDirective} from './card-list/card.component';
import { PresentationComponent } from './presentation/presentation.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, FooterComponent, CardContentDirective, CardDirective,
    CardListComponent,
    PresentationComponent],
  exports: [HeaderComponent, FooterComponent, CardContentDirective, CardDirective,
    CardListComponent, PresentationComponent]
})
export class SharedModule { }
