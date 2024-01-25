import { ProductConditionType } from "../product/product-list/ProductConditionType";
import { ProductType } from "../product/product-list/ProductType";

export interface IProductBase{
    Id: number;
    User: string;
    Title: string;
    Type: ProductType;
    Size: string;
    Price: number;
    Condition: ProductConditionType;
    Year?: number;
    City?: string;
    Image?: string;
}