import { ApiProduct } from "./ApiProduct";

export interface ProductsResponse {
	products: ApiProduct[];
	total: number;
	skip: number;
	limit: number;
}