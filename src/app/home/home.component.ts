import { Component, OnInit } from '@angular/core';
import { IProducts } from '../imageSlider/types/product.interface';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products = this.mainService.getPartialData();
  isAll = false;
  toggle = true;
  status = 'View All';

  constructor(public mainService: MainService) {}

  get updateCartIcon() {
    return this.mainService.cartList;
  }

  ngOnInit(): void {
    this.mainService.inItList();
  }

  viewAll() {
    this.products = this.isAll
      ? this.mainService.getPartialData()
      : this.mainService.getProducts();
    this.isAll = !this.isAll;
  }

  viewAllViewLessRule() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'View All' : 'View Less';
  }
}