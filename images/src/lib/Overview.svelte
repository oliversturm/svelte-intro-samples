<script>
  import ImageItem from './ImageItem.svelte';

  const fetchResult = fetch(
    'https://outlier.oliversturm.com:11234/https://www.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?&tags=hifi',
    { headers: { Authorization: 'Basic ' + btoa('corsuser:Ct%x6cPJJ') } }
  )
    .then((response) => response.text())
    .then((text) => text.slice(1, -1)) // remove extra parens
    .then((text) => JSON.parse(text))
    .then(({ items }) => items);
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
