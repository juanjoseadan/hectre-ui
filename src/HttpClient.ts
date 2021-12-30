import axios from 'axios';
const HttpClient = axios.create({
	withCredentials: false,
	baseURL: 'https://localhost:5001/',
	timeout: 80000,
	headers: {
		'Content-Type': 'application/json',
	},
});

HttpClient.interceptors.response
	.use(
		(response) => {
			return response.data;
		},
		(error) => {
			if (error.response === undefined) {
				return Promise.reject({
					Message: 'Error reaching Application server',
					Code: 0,
				});
			} else if (error.response.status === 401) {
				return Promise.reject(error.response);
			}
			if (error.response) {
				return Promise.reject(error.response.data);
			}
			return Promise.reject('[HttpClient] - Network Error');
		},
	);

export default HttpClient;
