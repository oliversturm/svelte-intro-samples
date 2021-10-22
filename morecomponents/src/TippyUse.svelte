<script>
  import '../node_modules/tippy.js/dist/tippy.css';
  import tippy, { followCursor as followCursorPlugin } from 'tippy.js';

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

  const useTippy = (node, options) => {
    const instance = tippy(node, options);
    return {
      update: (newOptions) => {
        instance.setProps(newOptions);
      },
      destroy: () => {
        instance.destroy();
      },
    };
  };
</script>

<div use:useTippy={tippyOptions}>
  <slot />
</div>

<style>
  div {
    display: flex;
  }
</style>
