<script>
  export let active;
</script>

<div>
  {#if active}
    <span class="green-check">✓</span>
    <span class="label">Active</span>
  {:else}
    <span class="red-cross">❌</span>
    <span class="label">Inactive</span>
  {/if}
</div>

<style>
  div {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    place-items: center;
  }
  .label {
    font-size: 130%;
    font-weight: bold;
  }
  .green-check {
    font-size: 300%;
    color: #1e6314;
  }
  .red-cross {
    font-size: 150%;
    color: #660e19;
  }
</style>
