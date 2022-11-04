<script>
  import { createEventDispatcher } from 'svelte';
  import CancelImage from './CancelImage.svelte';
  import EditButton from './EditButton.svelte';
  import ImageButton from './ImageButton.svelte';
  import SaveImage from './SaveImage.svelte';

  const dispatch = createEventDispatcher();

  export let editing;
</script>

{#if editing}
  <div class="save-cancel">
    <ImageButton
      on:click={() => {
        dispatch('editSaveChanges');
      }}
    >
      <SaveImage slot="image" />
      Save
    </ImageButton>
    <ImageButton
      on:click={() => {
        dispatch('editCancel');
      }}
    >
      <CancelImage slot="image" />
      Cancel
    </ImageButton>
  </div>
{:else}
  <EditButton
    on:click={() => {
      dispatch('editStart');
    }}
  />
{/if}

<style>
  .save-cancel {
    display: flex;
    flex-direction: column;
    place-content: center;
    gap: 0.3rem;
    height: 4.5rem;
  }
</style>
