<script>
  import { getContext } from 'svelte';

  import { contextKey } from './calculatorStore.js';
  const { value0 } = getContext(contextKey);

  export let char;
  export let once = false;

  const extendValue = () => {
    value0.update((v) => {
      if (once && v.includes(char)) return v;
      return `${v === '0' ? '' : v}${char}`;
    });
  };
</script>

<div class="button" on:click={extendValue}>{char}</div>
