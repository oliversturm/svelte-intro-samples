import { error } from '@sveltejs/kit';

export function load({ fetch }) {
	const fetchResult = fetch('/hifi-server')
		.then((response) => response.json())
		.catch((err) => {
			console.error('Fetch error', JSON.stringify(err));
			throw error(500, `Fetch error, original message: ${err.message}`);
		});
	return { fetchResult };
}
