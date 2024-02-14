import { ProductType } from "./ProductType";
import { ProductConditionType } from "./ProductConditionType";

export interface IProduct{
    id: number;
    title: string;
    productType: ProductType;
    size: string;
    price: number;
    condition: ProductConditionType;
    image?: string;
}
