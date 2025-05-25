import { useQuery } from "@tanstack/react-query";
import { apiCall, HttpMethod } from "../api";
import { ApiProduct } from "./types/ApiProduct";

export const useGetSingleProductData = (id: string) =>
	useQuery<ApiProduct>({
		queryKey: ['products', id],
		queryFn: () =>
			apiCall({
				method: HttpMethod.GET,
				path: `products/${id}`,
			}),
	});