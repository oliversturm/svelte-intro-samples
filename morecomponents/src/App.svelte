<script>
  import { fade, scale } from 'svelte/transition';

  import Button from './Button.svelte';
  import TippyUse from './TippyUse.svelte';
  import TippyLifecycle from './TippyLifecycle.svelte';
  import SearchField from './SearchField.svelte';

  let search1Result = '';
  const search1 = ({ detail: { text } }) => {
    search1Result = text;
  };

  let search2Result = '';
  let search2String = '';
  const search2 = ({ detail: { text } }) => {
    search2Result = text;
  };

  let tooltipPlacement = 'bottom';

  let button1Type = 'default';
  let button1Clicks = 0;

  let button2Clicks = 0;

  let showHideBlock = true;
  let number = 'two';
</script>

<main>
  <div class="container">
    <h3>Buttons</h3>
    <div class="flex">
      <TippyUse text="This is the first button" placement={tooltipPlacement}>
        <Button
          type={button1Type}
          on:click={() => {
            button1Clicks++;
          }}>Button 1 clicked {button1Clicks} times</Button
        >
      </TippyUse>

      <TippyLifecycle text="Second button" placement={tooltipPlacement}>
        <Button
          type="important"
          on:click={() => {
            button2Clicks++;
          }}>Button 2 clicked {button2Clicks} times</Button
        >
      </TippyLifecycle>

      <Button
        on:click={() => {
          button1Type = 'important';
        }}>Change Button 1 type to 'important'</Button
      >

      <Button let:mouseInside={gotMouse}>
        Mouse-sensitive button {gotMouse ? ' (Mouse inside!)' : ''}
      </Button>

      <Button />
    </div>
  </div>

  <div class="container">
    <h3>Tippy tooltip config (above)</h3>
    <label>
      <input type="radio" bind:group={tooltipPlacement} value="top" />
      Top</label
    >
    <label>
      <input type="radio" bind:group={tooltipPlacement} value="bottom" />
      Bottom</label
    >
    <label>
      <input type="radio" bind:group={tooltipPlacement} value="right" />
      Right</label
    >
    <label>
      <input type="radio" bind:group={tooltipPlacement} value="left" />
      Left</label
    >
  </div>

  <div class="container">
    <h3>Search Field</h3>
    <SearchField on:search={search1} />
    <div class="extra">
      {search1Result && `Searching for '${search1Result}'`}
    </div>
  </div>

  <div class="container">
    <h3>Bound Search Field</h3>
    <SearchField on:search={search2} bind:text={search2String} />
    <div class="extra">Current search field value: '{search2String}'</div>
    <div class="extra">
      {search2Result && `Searching for '${search2Result}'`}
    </div>
  </div>

  <div class="container">
    <h3>Show/hide block</h3>
    <label>
      <input type="checkbox" bind:checked={showHideBlock} />
      Show</label
    >
    {#if showHideBlock}
      <div class="extra" in:fade out:scale={{ duration: 1000 }}>
        <!-- <div class="extra" transition:fade> -->
        This part will show and hide dynamically
      </div>
    {/if}
  </div>

  <div class="container">
    <h3>Style switch</h3>
    <label>
      <input type="radio" bind:group={number} value="one" />
      One</label
    >
    <label>
      <input type="radio" bind:group={number} value="two" />
      Two</label
    >
    <label>
      <input type="radio" bind:group={number} value="three" />
      Three</label
    >
    <div
      class="extra styled"
      class:type1={number === 'one'}
      class:type2={number === 'two'}
      class:type3={number === 'three'}
    >
      This part is styled depending on the selection
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
  .flex {
    display: flex;
  }
  .container h3 {
    margin: 0 0 0.5rem 0;
  }
  .extra {
    margin: 0.5rem 0 0 0;
  }
  .container label {
    display: inline;
    margin: 10px;
  }
  .styled {
    border: 3px solid;
    padding: 3px;
  }
  .type1 {
    color: green;
  }
  .type2 {
    color: red;
  }
  .type3 {
    color: blue;
  }
</style>
