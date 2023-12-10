import { ProductType } from "./ProductType";

export interface IProduct{
    Id: number;
    User: string;
    Title: string;
    Type: ProductType;
    Size: string;
    Price: number;
    Image?: string;
}