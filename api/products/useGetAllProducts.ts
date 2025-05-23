import { useQuery } from "@tanstack/react-query";
import { ProductsResponse } from "./types/ProductsResponse";

export const useProducts = () =>
	useQuery<ProductsResponse>({
		queryKey: ['products'],
		queryFn: () =>
			fetch('https://dummyjson.com/products').then(res => res.json()),
	});