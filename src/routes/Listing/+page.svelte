<script>
  import Body from "$lib/shared/components/Listing/Body/Body.svelte";
  import Bottom from "$lib/shared/components/Listing/Bottom/Bottom.svelte";
  import Navbar from "$lib/shared/components/Listing/Navbar/Navbar.svelte";
  import Flights from "../../lib/json/flights";
</script>

<Navbar />
<Bottom />
<div>
  {#each Flights.onwardFlights as data}
    <Body {data} />
    <hr />
  {/each}
</div>
