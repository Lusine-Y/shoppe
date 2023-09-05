import { Component, Input, OnInit } from '@angular/core';

import { IProducts } from '../imageSlider/types/product.interface';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  products = this.mainService.getPartialData();

  selectedSort = '';

  sortByItems = ['price', 'discount'];

  cardProducts = this.mainService.getProducts().filter((p) => p.showDiscount);

  searchForm: FormGroup<{ search: FormControl<string | null> }>;

  filter = new FormGroup({
    search: new FormControl(''),
    sortBy: new FormControl(''),
    rangeFrom: new FormControl(0),
    rangeTo: new FormControl(0),
    onSale: new FormControl('false'),
    inStock: new FormControl('false'),
  });

  constructor(
    public mainService: MainService,
    private formBuilder: FormBuilder
  ) {
    this.searchForm = this.formBuilder.group({
      search: '',
    });
  }

  ngOnInit(): void {
    this.filter.valueChanges.subscribe((res) => {
      console.log(res);
      // http request
    });
  }

  setSelected(item: any) {
    this.filter.controls['sortBy'].setValue(item);
  }

  submit() {
    this.filter.controls['rangeFrom'].setValue(50);
  }
  item = [];
}
