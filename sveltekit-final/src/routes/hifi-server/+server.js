import { json } from '@sveltejs/kit';

export async function GET({ fetch }) {
	const fetchResult = await fetch(
		'https://outlier.oliversturm.com:11234/https://www.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?&tags=hifi',
		{
			headers: {
				Authorization: 'Basic ' + btoa('corsuser:Ct%x6cPJJ'),
				origin: 'http://localhost:5173'
			}
		}
	)
		.then((response) => response.text())
		.then((text) => text.slice(1, -1)) // remove extra parens
		.then((text) => JSON.parse(text))
		.then(({ items }) => items);

	return json(fetchResult);
}
