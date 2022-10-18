<script>
	import Overview from "$lib/Overview.svelte";

  export let data;
  $: ({fetchResult} = data);
</script>

<Overview fetchResult={fetchResult} />
