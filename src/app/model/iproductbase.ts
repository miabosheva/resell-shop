import { ProductConditionType } from "../product/product-list/ProductConditionType";
import { ProductType } from "../product/product-list/ProductType";

export interface IProductBase{
    id: number;
    title: string;
    productType: ProductType;
    size: string;
    price: number;
    conditionType: ProductConditionType;
    year?: number;
    username?: string;
    // City?: string;
    image?: string;
}
