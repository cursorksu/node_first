import {useCallback, useState} from 'react'

export const useHttp = () => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
		setLoading(true);
		if(body) {
			body = JSON.stringify(body);
			headers['Content-Type'] =  'application/json';

			console.log({body})
		}
		try {
			const response = await fetch(url, {method, body, headers})
			const data = await  response.json();
			if(!response.ok) {
				throw new Error(data.message || 'Something wrong!')
			}
			setLoading(false)
			return data;
		} catch (e) {
			setLoading(false);
			setError(e.message);
			throw e;
		}
	}, []);

	const clearError = () => setTimeout(() => {
		setError(null)
	}, 1000);

	return { loading, request, error, clearError }
}