<script>
  export let data;
</script>

<div class="">
  <img
    class="w-12 h-12"
    src={data.onwardSegmentDetails.segmentAirlineInfos[0].airlineIconUrl}
    alt=""
  />
  <div class="font-light text-xs text-center pt-1">
    {data.onwardSegmentDetails.segmentAirlineInfos[0].airlineName}
  </div>
</div>
