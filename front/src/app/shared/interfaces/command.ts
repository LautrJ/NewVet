import { Product } from "./product";

export interface Command {
    commandId: number;
    clientId: number;
    shippingAdr: string;
    billingAdr: string;
    commandDate: Date;
    commandExpeditionDate: Date;
    productList: Product[];
}
