<script>
  import { page } from '$app/stores';

  export let data;
</script>

<div>This is Oli's content</div>
<div>Page parameter id is '{$page.params.id}'</div>
<div>Load parameter id is '{data.loadId}'</div>
