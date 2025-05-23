import { useMutation } from "@tanstack/react-query";
import { apiCall, HttpMethod } from "../api";
import { LoginInput } from "./types/LoginInput";
import { LoginResponse } from "./types/LoginResponse";

export const useLogin = () => {
	return useMutation({
		mutationFn: async (input: LoginInput) => {
			const result = await apiCall<LoginResponse>({
				method: HttpMethod.POST,
				path: 'auth/login',
				body: input
			})

			return result
		}
	})
}