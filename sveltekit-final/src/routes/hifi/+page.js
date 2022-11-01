import { error } from '@sveltejs/kit';

export function load({ fetch }) {
	const fetchResult = fetch(
		'https://outlier.oliversturm.com:11234/https://www.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?&tags=hifi',
		{ headers: { Authorization: 'Basic ' + btoa('corsuser:Ct%x6cPJJ') } }
	)
		.then((response) => response.text())
		.then((text) => text.slice(1, -1)) // remove extra parens
		.then((text) => JSON.parse(text))
		.then(({ items }) => items)
		.catch((err) => {
			console.error('Fetch error', JSON.stringify(err));
			throw error(500, `Fetch error, original message: ${err.message}`);
		});

	return { fetchResult };
}
