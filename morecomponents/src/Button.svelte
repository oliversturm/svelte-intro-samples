<script>
  export let type = 'default';

  const types = {
    default: {
      margins: 'padding:3px;margin:1px;',
      text: 'font-size:small;color:black;',
      border: 'border:2px solid black;',
      bg: 'background-color:white;',
      extra: 'cursor:pointer;user-select:none;',
    },
    important: {
      margins: 'padding:6px 12px;margin:1px;',
      text: 'font-size:small;color:black;font-weight:bold;',
      border: 'border:2px solid blue;border-radius:0.5rem;',
      bg: 'background-color:red;',
      extra: 'cursor:pointer;user-select:none;',
    },
  };

  $: activeType = type && types[type] ? types[type] : type;
  $: styles = `${activeType.margins || ''}${activeType.text || ''}${
    activeType.border || ''
  }${activeType.bg || ''}${activeType.extra || ''}`;

  let mouseInside = false;
</script>

<div
  style={styles}
  on:click
  on:mouseenter={() => {
    mouseInside = true;
  }}
  on:mouseleave={() => {
    mouseInside = false;
  }}
>
  <slot {mouseInside}>This button has no content</slot>
</div>
