<script>
  import { createEventDispatcher } from 'svelte';
  import { createDraft, finishDraft } from 'immer';
  import RowActions from './RowActions.svelte';
  import LastNotifiedEditor from './LastNotifiedEditor.svelte';
  import ActiveEditor from './ActiveEditor.svelte';
  import ActiveCheck from './ActiveCheck.svelte';

  const dispatch = createEventDispatcher();

  export let data;
  export let rowIndex;

  let editData = null;

  // Using events in this case to coordinate the cycle
  // of editing data. It would perhaps be possible to have
  // an `editing` flag that binds to a property on RowActions,
  // but since there is possibly more than one way to switch
  // state, it's better to be explicit.
  const editStart = () => {
    editData = createDraft(data);
  };
  const editCancel = () => {
    editData = null;
  };
  const editSaveChanges = () => {
    const newRow = finishDraft(editData);
    dispatch('changed', { row: newRow, rowIndex });
    editData = null;
  };
</script>

<div class="row" class:active={data.active} class:editing={!!editData}>
  <RowActions
    editing={!!editData}
    on:editStart={editStart}
    on:editCancel={editCancel}
    on:editSaveChanges={editSaveChanges}
  />
  {#if !!editData}
    <div class="edit-details">
      <input class="edit-name" type="text" bind:value={editData.name} />
      <LastNotifiedEditor bind:lastNotified={editData.lastNotified} />
    </div>
    <ActiveEditor bind:active={editData.active} />
  {:else}
    <div class="details">
      <div class="name">{data.name}</div>
      <div class="last-notified">
        Last notified {data.lastNotified}
      </div>
    </div>
    <ActiveCheck active={data.active} />
  {/if}
</div>

<style>
  .row {
    background-color: #ffd1d1;
    padding: 0.5rem 1rem;
    border-radius: 0.4rem;
    display: flex;
    flex-direction: row;
    place-items: center;
    gap: 2rem;
  }

  .row.active {
    background-color: #d2ffd1;
  }

  .row.editing {
    background-color: #feffd1;
  }

  .row > :global(div):last-child {
    margin-left: auto;
  }

  .name {
    font-size: 140%;
    font-weight: bold;
  }

  .last-notified {
    font-size: 80%;
  }

  .edit-details {
    display: flex;
    flex-direction: row;
    place-items: center;
    flex-grow: 1;
    gap: 1rem;
  }

  .edit-name {
    font-size: 140%;
    font-weight: bold;
    flex: 1 1;
    width: 6rem;
  }
</style>
