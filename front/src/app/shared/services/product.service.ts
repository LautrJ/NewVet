import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
        productId: 1,
        productName: "Manteau",
        productDescription: "Un beau manteau pour quand il fait pas chaud !",
        productPrice: 100,
        productStock: 10,
        productImage: "./assets/clothes/coat1.png",
        productCategoryId: 1
    },
    {
        productId: 2,
        productName: "Parka",
        productDescription: "Une belle parka pour quand il fait froid !",
        productPrice: 149.99,
        productStock: 20,
        productImage: "./assets/clothes/parka1.png",
        productCategoryId: 1
    },
    {
        productId: 3,
        productName: "Hoodie Alpha",
        productDescription: "Le hoodie du mal alpha",
        productPrice: 3000,
        productStock: 1,
        productImage: "./assets/clothes/hoodie1.png",
        productCategoryId: 2
    },	
    {
        productId: 4,
        productName: "Pull Over Lidl",
        productDescription: "Vous aurez 50% à la caisse chez Lidl",
        productPrice: 60,
        productStock: 48,
        productImage: "./assets/clothes/pullOver1.png",
        productCategoryId: 2
    },
    {
        productId: 5,
        productName: "T-Shirt WWD",
        productDescription: "C'est bien vrai, tout est dit !",
        productPrice: 70,
        productStock: 20,
        productImage: "./assets/clothes/tShirt1.png",
        productCategoryId: 3
    },
    {
        productId: 6,
        productName: "T-Shirt Code",
        productDescription: "Haha le code et tout",
        productPrice: 30,
        productStock: 30,
        productImage: "./assets/clothes/tShirt2.png",
        productCategoryId: 3
    },	
    {
        productId: 7,
        productName: "Pantalon Clown",
        productDescription: "Ils sont bien confortable là dedans les clowns",
        productPrice: 45,
        productStock: 10,
        productImage: "./assets/clothes/pant1.png",
        productCategoryId: 4
    },
    {
        productId: 8,
        productName: "Pantalon Skinny",
        productDescription: "Regular coupe Skinny sexy fuselé en javelot",
        productPrice: 87,
        productStock: 20,
        productImage: "./assets/clothes/pant2.png",
        productCategoryId: 4
    },
    {
        productId: 9,
        productName: "Caleçon minions",
        productDescription: "Fesse",
        productPrice: 20,
        productStock: 30,
        productImage: "./assets/clothes/underwear1.png",
        productCategoryId: 5
    },	
    {
        productId: 10,
        productName: "Caleçon Joe Biden",
        productDescription: "Joe Biten",
        productPrice: 20,
        productStock: 10,
        productImage: "./assets/clothes/underwear2.png",
        productCategoryId: 5
    },
    {
        productId: 11,
        productName: "Bonnet",
        productDescription: "La flûte de pan n'est pas fournie avec",
        productPrice: 15,
        productStock: 20,
        productImage: "./assets/clothes/beanie1.png",
        productCategoryId: 6
    },
    {
        productId: 12,
        productName: "Casquette",
        productDescription: "$W4G",
        productPrice: 300,
        productStock: 30,
        productImage: "./assets/clothes/cap1.png",
        productCategoryId: 6
    }
  ]

  getProducts(): Product[] {
    return this.products;
  }
}
