import { ProductType } from "./ProductType";
import { ProductConditionType } from "./ProductConditionType";

export interface IProduct{
    Id: number;
    User: string;
    Title: string;
    Type: ProductType;
    Size: string;
    Price: number;
    Condition: ProductConditionType;
    Image?: string;
}