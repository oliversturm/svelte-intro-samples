<button class="outer" on:click>
  <slot name="image" />
  <slot />
</button>

<style>
  .outer {
    border: 0;
    display: flex;
    flex-direction: row;
    place-items: center;
    place-content: center;
    gap: 0.3rem;
    border-radius: 0.3rem;
    background-color: #ffffffb0;
    width: 6rem;
    padding: 0.2rem 0;
    user-select: none;
  }
  .outer:hover {
    background-color: #ffffffff;
    cursor: pointer;
  }
</style>
