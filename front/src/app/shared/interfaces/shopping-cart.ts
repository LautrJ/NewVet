import { Product } from "./product";

export interface ShoppingCart {
    cartId: number;
    cartCreation: Date;
    cartExpiration: Date;
    productList: Product[];
}
