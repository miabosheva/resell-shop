import { ProductConditionType } from "../product/product-list/ProductConditionType";
import { ProductType } from "../product/product-list/ProductType";
import { IProduct } from "./iproduct";

export class Product implements IProduct{
    Description?: string | undefined;
    Id: number = -1;
    User: string = "";
    Title: string = "";
    Type: ProductType = ProductType.ACCESSORY;
    Size: string = "";
    Price: number = 0;
    Condition: ProductConditionType = ProductConditionType.NEW;
    Year?: number | undefined;
    City?: string | undefined;
    Image?: string | undefined;
}