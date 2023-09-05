import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImageSliderComponent } from './components/imageSlider/imageSlider.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [CommonModule, AppRoutingModule],
  exports: [ImageSliderComponent],
  declarations: [ImageSliderComponent],
})
export class ImageSliderModule {}
