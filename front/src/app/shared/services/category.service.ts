import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categories: Category[] = [
    {
      categoryId: 1,
      categoryName: "Vêtements d'extérieur",
      categoryDescription: "Tout pour rester au chaud et au sec dehors, que ce soit des manteaux, parkas, ou vestes.",
      categoryImage: "./assets/categories/outerwear.png"
    },
    {
      categoryId: 2,
      categoryName: "Pulls / Hoodies",
      categoryDescription: "Une sélection de pulls et hoodies pour un look décontracté et confortable.",
      categoryImage: "./assets/categories/pullsHoodies.png"
    },
    {
      categoryId: 3,
      categoryName: "T-Shirts",
      categoryDescription: "T-shirts pour toutes les occasions, avec une variété de designs et de coupes.",
      categoryImage: "./assets/categories/tShirts.png"
    },
    {
      categoryId: 4,
      categoryName: "Pantalons",
      categoryDescription: "Des pantalons pour toutes les situations, des jeans aux pantalons de costume.",
      categoryImage: "./assets/categories/pants.png"
    },
    {
      categoryId: 5,
      categoryName: "Sous-vêtements",
      categoryDescription: "Sous-vêtements confortables pour un soutien quotidien.",
      categoryImage: "./assets/categories/underwear.png"
    },
    {
      categoryId: 6,
      categoryName: "Accessoires",
      categoryDescription: "Chapeaux, écharpes, ceintures, et autres accessoires pour compléter votre tenue.",
      categoryImage: "./assets/categories/accessories.png"
    }
  ]

  getCategories(): Category[] {
    return this.categories;
  }
}
