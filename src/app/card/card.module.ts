import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from '../app-routing.module';
import { CardComponent } from './card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from '../home/home.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [CommonModule, AppRoutingModule, MatCardModule,FlexLayoutModule,MatIconModule],
  exports: [CardComponent],
  declarations: [CardComponent],
})
export class CardModule {}
