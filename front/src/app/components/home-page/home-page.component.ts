import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { CarouselComponent } from '../../shared/components/carousel/carousel.component';
import { CategoriesListComponent } from '../../shared/components/categories-list/categories-list.component';
import { Product } from '../../shared/interfaces/product';
import { ProductService } from '../../shared/services/product.service';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    CurrencyPipe,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    CategoriesListComponent,
    MatListModule,
    MatCardModule,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  highlanders: Product[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.highlanders = this.productService.getProducts();
  }
  
  navigateToProduct(productId: number): void {
    this.router.navigate(['/product', productId]);
  }
}
