import { useQuery } from "@tanstack/react-query";
import { apiCall, HttpMethod } from "../api";
import { ProductsResponse } from "./types/ProductsResponse";

export const useProducts = () =>
	useQuery<ProductsResponse>({
		queryKey: ['products'],
		queryFn: () =>
			apiCall({
				method: HttpMethod.GET,
				path: 'products',
			}),
	});