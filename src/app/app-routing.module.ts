import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { BlogComponent } from './blog/blog.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
	{ path: 'products/:productId', component: ProductComponent},
	{ path: 'blog', component: BlogComponent},
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class 	AppRoutingModule {}
