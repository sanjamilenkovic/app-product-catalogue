import { ApiProduct } from "@/api/products/types/ApiProduct";
import { useProducts } from "@/api/products/useGetAllProducts";
import { Product } from "@/data/Product";
import { useLocalStore } from "@/store/localStore";
import { useEffect, useState } from "react";

export const useGetProducts = () => {

	const { data, isLoading } = useProducts();
	const favorites = useLocalStore(state => state.favorites);

	const [productsData, setProductsData] = useState<Product[]>([]);

	const transformProducts = (products: ApiProduct[], favorites: Product[]): Product[] => {

		return products.map((product) => {
			const isFavorite = favorites.some((fav) => fav.id === product.id.toString());

			return {
				id: product.id.toString(),
				brand: product.brand,
				category: product.category,
				description: product.description,
				price: product.price,
				rating: product.rating,
				stock: product.stock,
				title: product.title,
				isFavorite,
			};
		});
	};

	useEffect(() => {
		if (data && data.products) {
			const updatedProducts = transformProducts(data.products, favorites);
			setProductsData(updatedProducts);
		}
	}, [data, favorites]);

	return { isLoading, productsData };
};
