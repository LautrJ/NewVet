import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { CarouselItem } from '../../interfaces/carousel-item';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: 
  [
    CommonModule,
    MatCardModule,
    MatIcon,
  ],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  carouselItems: CarouselItem[] =
  [
    {
      image: 'assets/carousel/autumn.png',
      order: 1,
      alt: ''
    },
    {
      image: 'assets/carousel/manikins.png',
      order: 2,
      alt: ''
    },
    {
      image: 'assets/carousel/foiled.png',
      order: 3,
      alt: ''
    }
  ];

  currentIndex: number = 0;

  nextItem() {
    this.currentIndex = (this.currentIndex + 1) % this.carouselItems.length;
  }

  prevItem() {
    this.currentIndex = (this.currentIndex - 1 + this.carouselItems.length) % this.carouselItems.length;
  }
}
