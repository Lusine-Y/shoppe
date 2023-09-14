import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProducts } from '../imageSlider/types/product.interface';
import { MainService } from '../services/main.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  public product: IProducts | null = null;
  public tab = 1;
  public selectedRating: number = 0;
  public mainImageUrl!: string;

  constructor(public mainService: MainService, private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      const { productId } = params;
      this.product = this.mainService.getProductById(+productId);
      this.mainImageUrl = this.product?.imageUrl!;
    });
  }


	//addReview = new FormGroup ({
  //   reviewText: new FormControl ('',Validators.required),
	//	 name: new FormControl ('',Validators.required),
	//	 email: new FormControl ('',Validators.required),
  //   saveData: new FormControl (false),
	//	 rate: new FormControl ([''],Validators.required)
	//})




  onRatingChange(newRating: number): void {
    this.selectedRating = newRating;
  }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('productId');

    if (productId) {
      this.product = this.mainService.getProductById(+productId);
      this.mainImageUrl = this.product?.imageUrl!;
    }
  }

  addToCart(product: IProducts): void {
    this.mainService.setCardList(product);
  }

  getProductById(id: number): IProducts | null {
    return this.mainService.getProductById(id);
  }

  setMainImageUrl(imageUrl: string) {
    this.mainImageUrl = imageUrl;
  }
}
