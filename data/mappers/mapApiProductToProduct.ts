import { ApiProduct } from "@/api/products/types/ApiProduct";
import { Product } from "../Product";

export const mapApiProductToProduct = (product: ApiProduct): Product => ({
	id: product.id.toString(),
	brand: product.brand,
	category: product.category,
	description: product.description,
	price: product.price,
	rating: product.rating,
	stock: product.stock,
	title: product.title,
	isFavorite: false, //todo
});