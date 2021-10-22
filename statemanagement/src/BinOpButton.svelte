<script>
  import { getContext } from 'svelte';

  import { contextKey } from './calculatorStore.js';
  const { value0, stack } = getContext(contextKey);

  const binOp = (f) => () => {
    const v0 = parseFloat($value0, 10);
    const v1 = parseFloat(stack.pop(), 10);
    const result = f(v1, v0);
    $value0 = result.toString(10);
  };
  const ops = {
    plus: {
      caption: '➕', // U+2795
      handler: binOp((v1, v2) => v1 + v2),
    },
    minus: {
      caption: '➖', // U+2796
      handler: binOp((v1, v2) => v1 - v2),
    },
    multiply: {
      caption: '✖', // U+2716
      handler: binOp((v1, v2) => v1 * v2),
    },
    divide: {
      caption: '➗', // U+2797
      handler: binOp((v1, v2) => v1 / v2),
    },
  };

  export let op;

  $: opInfo = ops[op] || {};
  $: caption = opInfo.caption || 'INVALID';
  $: handler = opInfo.handler || (() => {});
</script>

<div class="button" on:click={handler}>{caption}</div>
