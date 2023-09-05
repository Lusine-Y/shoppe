import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { CardModule } from './card/card.module';
import { HomeModule } from './home/home.module';
import { ImageSliderModule } from './imageSlider/imageSlider.module';
import { ProductComponent } from './product/product.component';
import { ShopModule } from './shop/shop.module';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    BlogComponent,
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ImageSliderModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    ShopModule,
  ],
})
export class AppModule {}
