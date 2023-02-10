<script>
  import IconComponent from "./TileUtils/IconComponent.svelte";
  import TimeComponent from "./TileUtils/TimeComponent.svelte";

  export let data;
</script>

<div class="w-full flex justify-between bg-white">
  <div class="flex flex-col w-full ">
    <div class="bg-white flex flex-row p-3 justify-between">
      <IconComponent {data} />
      <TimeComponent {data} />
    </div>

    <div class="flex flex-row  text-gray-600 mb-1">
      <div class="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-3 h-4 ml-3"
        >
          <path
            fill-rule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM9 7.5A.75.75 0 009 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 009 12h3.622a2.251 2.251 0 01-2.122 1.5H9a.75.75 0 00-.53 1.28l3 3a.75.75 0 101.06-1.06L10.8 14.988A3.752 3.752 0 0014.175 12H15a.75.75 0 000-1.5h-.825A3.733 3.733 0 0013.5 9H15a.75.75 0 000-1.5H9z"
            clip-rule="evenodd"
          />
        </svg>

        <div class="font-light text-xs text-gray-500 ml-1">
          {data.specialFeatures[0].title}
        </div>
      </div>

      <div class="flex ml-3">
        <img class="h-3 w-3 mr-1" src={data.specialFeatures[0].icon} alt="" />

        <div class="font-light text-xs text-gray-500">No Free Meal</div>
      </div>
    </div>
  </div>
</div>
