
export enum HttpMethod {
	POST = 'POST',
	PATCH = 'PATCH',
	GET = 'GET',
	DELETE = 'DELETE'
}

interface ApiCallProps {
	route: string;
	method: string;
	body?: any;
}


//should be extracted to the env file
const API_URL = 'https://dummyjson.com/';


export const apiCall = async ({ route, method, body }: ApiCallProps) => {
	return fetch(`${API_URL}${route}`, {
		method: method,
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body),
		credentials: 'include', // Include cookies (e.g., accessToken) in the request
	}).then((res) => res.json())
}
