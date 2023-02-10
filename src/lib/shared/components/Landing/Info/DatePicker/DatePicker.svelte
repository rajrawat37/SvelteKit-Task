<script>
  import DepartComponent from "./components/DepartComponent.svelte";
  import IconComponent from "./components/IconComponent.svelte";
  import ReturnComponent from "./components/ReturnComponent.svelte";
</script>

<div class="mx-3 mt-4 bg-white p-4 rounded-lg grid grid-cols-2 divide-x">
  <DepartComponent />

  <div class="flex flex-row place-items-center">
    <ReturnComponent />
    <IconComponent />
  </div>
</div>
