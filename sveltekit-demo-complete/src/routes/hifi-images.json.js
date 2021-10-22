export async function get() {
	const fetchResult = await fetch(
		'http://outlier.oliversturm.com:1234/https://www.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?&tags=hifi',
		{ headers: { origin: 'http://localhost:3000' } }
	)
		.then((response) => response.text())
		.then((text) => text.slice(1, -1)) // remove extra parens
		.then((text) => JSON.parse(text))
		.then(({ items }) => items)
		.then((items) => items.map((i) => ({ title: i.title, url: i.media.m })));

	return { body: fetchResult };
}
