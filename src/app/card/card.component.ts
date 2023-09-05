import { Component, Input, OnInit, Output } from '@angular/core';
import { IProducts } from '../imageSlider/types/product.interface';
import { MainService } from '../services/main.service';
import { Router } from '@angular/router';
import { IFavorites } from '../imageSlider/types/favorites.interface';
import { ICard } from '../imageSlider/types/card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

	
  constructor(public mainService: MainService, private router: Router) {}


	
  public cartProducts: IProducts[] = [];

  public favoriteProducts: IProducts[] = [];

  @Input() products: IProducts[] = [];
	

  user: any;
	

  ngOnInit(): void {}

  addToCart(product: IProducts): void {
    const list = this.mainService.cartList;

    if (list.some((p) => p.id === product.id)) {
      this.mainService.removeCardList(product);
    } else {
      this.mainService.setCardList(product);
    }
  }



  addToFavoritesList(product: IProducts): void {
    this.mainService.setFavoritesList(product);
    this.favoriteProducts.push(product);
  }
}
