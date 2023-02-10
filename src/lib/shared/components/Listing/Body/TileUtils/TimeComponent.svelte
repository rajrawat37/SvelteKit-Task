<script>
  import PriceComponent from "./PriceComponent.svelte";

  export let data;
</script>

<div class="flex flex-col mt-2">
  <div class="font-bold place-content-center text-sm text-center">
    {data.onwardSegmentDetails.airlineTime}
  </div>
  <div class="text-center text-md">{data.onwardSegmentDetails.airlineDuration}</div>
</div>

<div>
  <div class="text-green-500 text-md font-bold p-2 mt-2">
    {data.fareList[0].currencySymbol} {data.fareList[0].fareS}
  </div>
</div>
