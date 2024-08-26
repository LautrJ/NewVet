import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../../shared/interfaces/product';
import { ProductService } from '../../shared/services/product.service';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CommonModule,
    CurrencyPipe,
    HeaderComponent,
    FooterComponent,
    MatCardModule,
    MatButtonModule,
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  products: Product[] = [];

  currentProductId: number | undefined;
  currentProduct: Product | undefined;

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.route.paramMap.subscribe(params => {
      this.currentProductId = +params.get('id')!;
      this.products.forEach((product) => {
        if(product.productId == this.currentProductId) {
          this.currentProduct = product;
        }
      })
    })
  }
}
