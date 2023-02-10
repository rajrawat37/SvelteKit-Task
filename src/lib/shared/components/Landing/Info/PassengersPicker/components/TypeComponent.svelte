<script>
  import Modal from "./ModalSheet/Modal.svelte";
  import { currentType } from "../ModalStore.js";
</script>

<div class="flex-1 p-1">
  <label for="my-modal">
    <div class="text-xs text-slate-500">Class</div>
    <div class="flex flex-row items-center">
      <div class="text-sm font-medium">{$currentType}</div>
      <div class="ml-8">
        <svg
          fill="black"
          viewBox="0 0 24 24"
          height="20"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
          ><path
            xmlns="http://www.w3.org/2000/svg"
            d="M5.29289 9.29289C5.68342 8.90237 6.31658 8.90237 6.70711 9.29289L12 14.5858L17.2929 9.29289C17.6834 8.90237 18.3166 8.90237 18.7071 9.29289C19.0976 9.68342 19.0976 10.3166 18.7071 10.7071L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L5.29289 10.7071C4.90237 10.3166 4.90237 9.68342 5.29289 9.29289Z"
            class="base-content-light"
          /></svg
        >
      </div>
    </div>
  </label>
</div>

<Modal />
