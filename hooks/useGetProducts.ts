import { useProducts } from "@/api/products/useGetAllProducts";
import { Product } from "@/data/Product";
import { useEffect, useState } from "react";

export const useGetProducts = () => {

	const { data, isLoading } = useProducts()

	const [productsData, setProductsData] = useState<Product[]>([])

	useEffect(() => {
		if (data && data.products) {
			data.products.map((product) => {
				setProductsData((prev) => [...prev, {
					brand: product.brand,
					category: product.category,
					description: product.description,
					id: product.id.toString(),
					price: product.price,
					rating: product.rating,
					stock: product.stock,
					title: product.title,
					isFavorite: false //TODO: check from local store 
				}])
			})
		}
	}, [data])


	return {
		isLoading,
		productsData
	}
}