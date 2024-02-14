import { ProductConditionType } from "../product/product-list/ProductConditionType";
import { ProductType } from "../product/product-list/ProductType";
import { IProduct } from "./iproduct";

export class Product implements IProduct{
    description?: string | undefined;
    id: number = -1;
    title: string = "";
    productType: ProductType = ProductType.ACCESSORY;
    size: string = "";
    price: number = 0;
    conditionType: ProductConditionType = ProductConditionType.NEW;
    year?: number | undefined;
    username?: string | undefined;
    // City?: string | undefined;
    image?: string | undefined;
}
