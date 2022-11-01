<script>
  import {page} from '$app/stores';
</script>

<div>An error occurred: {$page.error.message} ({$page.status})</div>
