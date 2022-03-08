<!-- <script context="module">
	export function load({ fetch }) {
		// const fetchResult = fetch(
		// 	'http://outlier.oliversturm.com:1234/https://www.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?&tags=hifi'
		// )
		// 	.then((response) => response.text())
		// 	.then((text) => text.slice(1, -1)) // remove extra parens
		// 	.then((text) => JSON.parse(text))
		// 	.then(({ items }) => items);

		const fetchResult = fetch('/hifi-images.json').then((res) => res.json());
		return { props: { fetchResult } };
	}
</script> -->
<script>
	import Overview from '$lib/Overview.svelte';

	export let fetchResult;
</script>

<Overview {fetchResult} />
