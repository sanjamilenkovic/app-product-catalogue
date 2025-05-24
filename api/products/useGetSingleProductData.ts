import { useQuery } from "@tanstack/react-query";
import { apiCall, HttpMethod } from "../api";
import { Product } from "./types/Product";

export const useGetSingleProductData = (id: string) =>
	useQuery<Product>({
		queryKey: ['products', id],
		queryFn: () =>
			apiCall({
				method: HttpMethod.GET,
				path: `products/${id}`,
			}),
	});