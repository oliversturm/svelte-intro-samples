<script>
  import '../../node_modules/tippy.js/dist/tippy.css';
  import tippy, { followCursor as followCursorPlugin } from 'tippy.js';
  import { onMount, afterUpdate } from 'svelte';

  export let text = '';
  export let arrow = true;
  export let delay = [500, 250];
  export let followCursor = 'horizontal';
  export let placement = 'top';
  export let touch = true;
  export let trigger = 'mouseenter focus';
  export let zIndex = 9999;

  $: tippyOptions = {
    content: text,
    arrow,
    delay,
    followCursor,
    placement,
    touch,
    trigger,
    zIndex,
    plugins: [followCursorPlugin],
  };

  let node;
  let tippyInstance;

  onMount(() => {
    tippyInstance = tippy(node, tippyOptions);
    return () => {
      tippyInstance.destroy();
    };
  });

  afterUpdate(() => {
    tippyInstance.setProps(tippyOptions);
  });
</script>

<div bind:this={node}>
  <slot />
</div>

<style>
  div {
    display: flex;
  }
</style>
