<script>
  import { spring } from 'svelte/motion';

  import Calculator from './Calculator.svelte';

  const editorWidth = spring(200, {
    duration: 500,
    stiffness: 0.01,
    damping: 0.2,
  });
</script>

<main>
  <div class="container">
    <h3>Editor with motion</h3>
    <input
      type="text"
      placeholder="Enter something"
      style="width:{$editorWidth}px;"
      on:blur={() => {
        $editorWidth = 200;
      }}
      on:focus={() => {
        $editorWidth = 300;
      }}
    />
    <div class="widthindicator" style="width:{$editorWidth}px;">
      Width indicator
    </div>
  </div>

  <div class="container">
    <h3>Calculators</h3>

    <div style="display:flex;gap:30px;">
      <Calculator />
      <Calculator />
    </div>
  </div>
</main>

<style>
  .container {
    border: 1px solid gray;
    width: 80%;
    margin: auto;
    padding: 1rem;
    margin-bottom: 1rem;
  }
  .container h3 {
    margin: 0 0 0.5rem 0;
  }
  .widthindicator {
    border: 2px solid blue;
    padding: 2px;
    font-size: small;
  }
</style>
