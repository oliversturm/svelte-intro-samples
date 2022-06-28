<script>
  export let imageInfo;
</script>

<div>
  <img src={imageInfo.media.m} alt={imageInfo.title} />
  <p>{imageInfo.title}</p>
</div>

<style>
  div {
    width: 220px;
    border: 2px solid lightblue;
    margin: 5px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  img {
    max-height: 200px;
    max-width: 200px;
  }
  p {
    font-size: small;
    font-weight: bold;
  }
</style>
