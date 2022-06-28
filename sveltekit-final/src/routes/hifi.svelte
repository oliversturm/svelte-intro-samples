<!-- <script context="module">
	export function load({ fetch }) {
		const fetchResult = fetch('/hifi-images.json').then((res) => res.json());

		return { props: { fetchResult } };
	}
</script> 
-->
<script>
	import Overview from '$lib/Overview.svelte';

	export let fetchResult;
</script>

<Overview {fetchResult} />
