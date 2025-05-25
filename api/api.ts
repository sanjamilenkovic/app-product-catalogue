
export enum HttpMethod {
	POST = 'POST',
	PATCH = 'PATCH',
	GET = 'GET',
	DELETE = 'DELETE'
}

interface ApiCallProps {
	path: string;
	method: string;
	body?: any;
}


//should be extracted to the env file
const API_URL = 'https://dummyjson.com/';


export async function apiCall<T> ({ path, method, body }: ApiCallProps): Promise<T> {
	const result = await fetch(`${API_URL}${path}`, {
		method: method,
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body),
	})

	if (!result.ok) {
		throw new Error();
	}

	return result.json() as Promise<T>
}
