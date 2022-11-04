<script>
  import { createEventDispatcher } from 'svelte';
  import Row from './Row.svelte';
  const dispatch = createEventDispatcher();

  export let data;

  const rowChanged = ({ detail }) => {
    dispatch('rowChanged', detail);
  };
</script>

<div>
  {#each data as item, index}
    <Row rowIndex={index} data={item} on:changed={rowChanged} />
  {/each}
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
</style>
