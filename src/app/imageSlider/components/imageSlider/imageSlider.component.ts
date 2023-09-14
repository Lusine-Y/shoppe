import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IProducts } from '../../types/product.interface';
import { MainService } from '../../../services/main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'image-slider',
  templateUrl: './imageSlider.component.html',
  styleUrls: ['./imageSlider.component.css'],
})
export class ImageSliderComponent implements OnInit, OnDestroy {
  constructor(public mainService: MainService, private router: Router) {}

  products: IProducts[] = [];
  slides: IProducts[] = [];
  currentIndex: number = 0;
  timeoutId?: number;

  ngOnInit(): void {
    this.slides = this.mainService.getSlidesProducts();
    this.resetTimer();
  }
  ngOnDestroy() {
    window.clearTimeout(this.timeoutId);
  }
  resetTimer() {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }
    this.timeoutId = window.setTimeout(() => this.goToNext(), 3000);
  }

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.slides.length - 1
      : this.currentIndex - 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToSlide(slideIndex: number): void {
    this.resetTimer();
    this.currentIndex = slideIndex;
  }

  getCurrentSlideUrl() {
    return `url('${this.slides[this.currentIndex].imageUrl}')`;
  }

  getCurrentSlideId() {
    return this.slides[this.currentIndex].id;
  }
}
