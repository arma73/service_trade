//import { useState } from "useState";
import useSWR from "swr";

function fetcher(url) {
	return fetch(url)
		.then(r => r.json())
		.catch(err => ({
			message: err.message,
			status: err.status
		}));
}

const Fetcher = (WrapperComponent, dataName) => () => {
	const { data, error } = useSWR(`/api/${dataName}`, fetcher);
	if (error) console.error(error);

	return <WrapperComponent content={data} />;
};

export default Fetcher;
