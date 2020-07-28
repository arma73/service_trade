import axios from "axios";

axios.defaults.headers.common["Content-Type"] = "application/json";

export const setAuthorizationHeader = token => {
	axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const removeAuthorizationHeader = () => {
	delete axios.defaults.headers.common.Authorization;
};

const resolveError = error => {
	if (!error || !error.response) {
		return { "error": { "message": "Something went wrong" }, "status": 521 };
	}

	const { status, data } = error.response;
	if (status === 401) {
		// TODO
	}

	const errorData = data || error;

	if (typeof errorData === "string") {
		return { "error": { "message": errorData }, status };
	}

	const { "error": errorMessage, message } = errorData;
	return { "error": { "message": message || errorMessage } };
};

export const postForResponse = (url, data) => () =>
	axios
		.post(url, data)
		.then(response => ({ response }))
		.catch(error => resolveError(error));

export const getForResponse = (url, data) => () =>
	axios
		.get(url, { "params": data })
		.then(response => ({ response }))
		.catch(error => resolveError(error));

export const verifyAccessTokenResponse = url => () =>
	axios
		.get(url)
		.then(response => response)
		.catch(error => resolveError(error));

export const putForResponse = (url, data) => () =>
	axios
		.put(url, data)
		.then(response => ({ response }))
		.catch(error => resolveError(error));

export const deleteForResponse = url => () =>
	axios
		.delete(url)
		.then(response => ({ response }))
		.catch(error => resolveError(error));
