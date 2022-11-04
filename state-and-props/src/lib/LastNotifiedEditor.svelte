<script>
  import dayjs from 'dayjs';
  import ImageButton from './ImageButton.svelte';

  export let lastNotified;
</script>

<div class="outer">
  <div class="label">Last notified: {lastNotified}</div>
  <ImageButton
    on:click={() => {
      lastNotified = dayjs().format('YYYY-MM-DD');
    }}>Today</ImageButton
  >
</div>

<style>
  .outer {
    border-radius: 0.3rem;
    padding: 0.5rem;
    width: 12rem;
    display: flex;
    flex-direction: column;
    place-items: center;
    gap: 0.2rem;
    background-color: #c5c5c5;
    margin-left: auto;
  }

  .label {
    font-size: 80%;
  }
</style>
