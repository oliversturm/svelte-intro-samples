export async function get() {
	const fetchResult = await fetch(
		'https://outlier.oliversturm.com:11234/https://www.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?&tags=hifi',
		{
			headers: {
				Authorization: 'Basic ' + btoa('corsuser:Ct%x6cPJJ'),
				origin: 'http://localhost:3000'
			}
		}
	)
		.then((response) => response.text())
		.then((text) => text.slice(1, -1)) // remove extra parens
		.then((text) => JSON.parse(text))
		.then(({ items }) => items)
		// Example - a data service could perform further processing
		// if it proxies another data service
		.then((items) => items.map((i) => ({ title: i.title, url: i.media.m })));

	return { body: { fetchResult } };
}
