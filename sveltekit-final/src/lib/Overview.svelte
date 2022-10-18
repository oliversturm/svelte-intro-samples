<script>
  import ImageItem from './ImageItem.svelte';

  export let fetchResult;
</script>

<div>
  <h1>Overview of images</h1>

  {#await fetchResult}
    <p>Waiting for data</p>
  {:then data}
    <!-- <pre>{JSON.stringify(data, 0, 2)}</pre> -->

    <div class="list">
      {#each data as imageInfo}
        <ImageItem {imageInfo} />
      {:else}
        <p>No images found</p>
      {/each}
    </div>
  {:catch error}
    <p class="error">{error.message}</p>
  {/await}
</div>

<style>
  .error {
    font-weight: bold;
    color: red;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
  }
</style>
