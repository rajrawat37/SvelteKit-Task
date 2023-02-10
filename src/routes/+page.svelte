<script>
  import Body from "../lib/shared/components/Landing/Body.svelte";
  let isLoading = false;
</script>

{#if isLoading}
  <p>Loading</p>
{:else}
  <Body />
{/if}
