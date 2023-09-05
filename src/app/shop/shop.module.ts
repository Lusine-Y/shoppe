import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from '../app-routing.module';
import { ShopComponent } from './shop.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardModule } from '../card/card.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    FlexLayoutModule,
    CardModule,
  ],
  exports: [ShopComponent],
  declarations: [ShopComponent],
})
export class ShopModule {}
