<script>
  import Navbar from "./Navbar/Navbar.svelte";
  import Info from "$lib/shared/components/Landing/Info/Info.svelte";
  import UpcomingFlights from "$lib/shared/components/Landing/Upcoming/UpcomingFlights.svelte";
  import RecentSearches from "$lib/shared/components/Landing/RecentSearch/RecentSearches.svelte";
</script>

<div class="overflow-scroll h-screen w-screen   bg-slate-100">
  <Navbar />
  <Info />
  <UpcomingFlights />
  <RecentSearches />
</div>
