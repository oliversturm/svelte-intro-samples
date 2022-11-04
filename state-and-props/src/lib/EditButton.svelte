<button class="outer" on:click>
  <div class="icon">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
      />
    </svg>
  </div>
  <div class="label">Edit</div>
</button>

<style>
  .outer {
    border: 0;
    display: flex;
    flex-direction: column;
    place-items: center;
    place-content: center;
    border-radius: 0.3rem;
    background-color: #ffffffb0;
    width: 6rem;
    height: 4.5rem;
    user-select: none;
  }
  .outer:hover {
    background-color: #ffffffff;
    cursor: pointer;
  }
  .icon {
    width: 1.5rem;
  }
</style>
