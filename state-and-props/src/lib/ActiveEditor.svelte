<script>
  import ImageButton from './ImageButton.svelte';

  export let active;

  $: state = active ? 'active' : 'inactive';

  let buttonCaption;
  $: {
    buttonCaption = (state) => {
      switch (state) {
        case 'active':
          return 'Deactivate';
        case 'inactive':
          return 'Activate';
        case 'deactivating':
          return 'Click again!';
      }
    };
  }

  const changeState = () => {
    switch (state) {
      case 'active':
        state = 'deactivating';
        break;
      case 'deactivating':
        state = 'inactive';
        active = false;
        break;
      case 'inactive':
        state = 'active';
        active = true;
        break;
    }
  };
</script>

<div
  class="outer"
  class:active={state === 'active'}
  class:inactive={state === 'inactive'}
  class:deactivating={state === 'deactivating'}
>
  <div class="label">{state}</div>
  <ImageButton on:click={changeState}>{buttonCaption(state)}</ImageButton>
</div>

<style>
  .outer {
    border-radius: 0.3rem;
    padding: 0.5rem;
    width: 8rem;
    display: flex;
    flex-direction: column;
    place-items: center;
    gap: 0.2rem;
  }

  .outer.active {
    background-color: #88ff7d;
  }
  .outer.inactive {
    background-color: rgb(255, 122, 122);
  }
  .outer.deactivating {
    background-color: rgb(255, 194, 81);
  }

  .label {
    font-weight: bold;
    text-transform: capitalize;
  }
</style>
