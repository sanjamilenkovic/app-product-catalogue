import { useProducts } from "@/api/products/useGetAllProducts";
import { Product } from "@/data/Product";
import { useLocalStore } from "@/store/localStore";
import { useEffect, useState } from "react";

export const useGetProducts = () => {

	const { data, isLoading } = useProducts();
	const { favorites } = useLocalStore();

	const [productsData, setProductsData] = useState<Product[]>([]);

	const transformProducts = (products: any[], favorites: Product[]): Product[] => {
		return products.map((product) => {
			const isFavorite = favorites.some((fav) => fav.id === product.id.toString());

			return {
				...product,
				id: product.id.toString(),
				isFavorite,
			};
		});
	};

	useEffect(() => {
		if (!data?.products) return;

		const updatedProducts = transformProducts(data.products, favorites);
		setProductsData(updatedProducts);
	}, [data, favorites]);

	return { isLoading, productsData };
};
