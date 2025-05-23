import { apiCall } from "../api";

interface LoginInput {
	email: string;
	password: string;
}

export const login = async (input: LoginInput) => {
	return apiCall({
		route: 'auth/login',
		method: 'POST',
		body: input
	})
}