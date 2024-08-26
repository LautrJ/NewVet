import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { Category } from '../../shared/interfaces/category';
import { CategoryService } from '../../shared/services/category.service';
import { Product } from '../../shared/interfaces/product';
import { ProductService } from '../../shared/services/product.service';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';


@Component({
  selector: 'app-category-products-list',
  standalone: true,
  imports: [
    CommonModule,
    CurrencyPipe,
    HeaderComponent,
    FooterComponent,
    MatCardModule,
    MatGridListModule,
  ],
  templateUrl: './category-products-list.component.html',
  styleUrl: './category-products-list.component.css'
})
export class CategoryProductsListComponent implements OnInit {
  categories: Category[] =[];
  products: Product[] = [];
  
  currentCategoryId: number | undefined;
  currentCategory: Category | undefined;
  currentProducts: Product[] = [];

  constructor(private route: ActivatedRoute, private productService: ProductService, private categoryService: CategoryService, private router: Router) {}

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories();
    this.products = this.productService.getProducts();
    this.route.paramMap.subscribe(params => {
      this.currentCategoryId = +params.get('id')!;
      this.categories.forEach((category) => {
        if(category.categoryId == this.currentCategoryId) {
            this.currentCategory = category;
        }
      })
      this.products.forEach((product) => {
        if(product.productCategoryId == this.currentCategoryId) {
          this.currentProducts.push(product);
        }
      })
    });
  }

  navigateToProduct(productId: number): void {
    this.router.navigate(['/product', productId]);
  }
}
