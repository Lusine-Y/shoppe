import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from '../app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './home.component';
import { CardModule } from '../card/card.module';
import { ImageSliderModule } from '../imageSlider/imageSlider.module';

@NgModule({
  imports: [CommonModule, AppRoutingModule, MatCardModule, FlexLayoutModule, CardModule, ImageSliderModule],
  exports: [HomeComponent],
  declarations: [HomeComponent],
})
export class HomeModule {}
