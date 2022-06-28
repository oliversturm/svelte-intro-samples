<script context="module">
	export function load({ params: { id: loadId } }) {
		return { props: { loadId } };
	}
</script>

<script>
	import { page } from '$app/stores';

	export let loadId;
</script>

<div>This is Oli's content</div>
<div>Page parameter id is '{$page.params.id}'</div>
<div>Load parameter id is '{loadId}'</div>
