<script>
  let places = "";
  let cities = [
    { city: "Mumbai", name: "BOM - Chhatrapati Shivaji International Airport" },
    { city: "New Delhi", name: "DEL - Indira Gandhi International Airport" },
    { city: "Bangalore", name: "BLR - Kempegowda International Airport" },
    { city: "Patna", name: "PAT - Lok Nayak Jayaprakash Airport" },
    { city: "Hyderabad", name: "HYD - Rajiv Gandhi International Airport" },
    { city: "Pune", name: "PNQ - Pune Airport" },
  ];

  $: searchedCities = cities.filter((idx) => {
    let currCity = idx.city.toLowerCase();
    return currCity.includes(places.toLowerCase());
  });
</script>

<div class="flex h-screen flex-col bg-base-100">
  <div class="flex flex-row  bg-[#009ddb]">
    <div class="m-3 flex w-full flex-row flex-wrap justify-between">
      <div class="flex basis-5/6">
        <a href="/">
          <div class="flex items-center">
            <button class="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke-width="1.8"
                stroke="white"
                class="h-8 w-6 place-self-center"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                />
              </svg>
            </button>
          </div>
        </a>
        <div class="w-3" />
        <div
          class="text-white text-center font-semibold mt-3 place-items-center"
        >
          Search Source City
        </div>
      </div>
      <div class="flex items-center">
        <div class="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke-width="1.8"
            stroke="white"
            class="h-8 w-6"
          >
            <path
              fill-rule="evenodd"
              d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-base-100 p-6">
    <div
      class="flex rounded-lg bg-base-200 w-full items-center justify-between px-4"
    >
      <input
        class="appearance-none bg-transparent h-14 placeholder:card-content text-nu-black-100 border-none w-full leading-tight focus:outline-none"
        type="text"
        bind:value={places}
        placeholder="Enter City/Airport Name"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2.5"
        stroke="currentColor"
        class="w-6 h-6 stroke-slate-500"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        /></svg
      >
    </div>
  </div>
  <div class="overflow-y-scroll">
    <div class="bg-base-100">
      <div class="flex mx-8 my-4">
        <p class="heading-2 text-left">Recent Searches</p>
      </div>
      <div class="border-b border-base-300" />
      <div
        class="mx-8 py-3 flex flex-row rounded-lg justify-between items-center"
      >
        <div class="flex flex-row items-center my-auto rounded py-3 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
              clip-rule="evenodd"
            />
          </svg>

          <div class="ml-4 my-auto">
            <div class="flex flex-row">
              <h4 class="card-sub-heading">New Delhi</h4>
            </div>
            <p class="sub-text text-base-content text-opacity-50">
              DEL - Indira Gandhi International Airport
            </p>
          </div>
        </div>
        <div class="pl-2 pr-1" />
      </div>
    </div>
    <div class="mx-8 flex py-4">
      <p class="heading-2 text-left">Popular Cities</p>
    </div>

    {#each searchedCities as { city, name }, i}
      <div class="border-b border-base-300" />
      <div
        class="mx-8 py-3 flex flex-row rounded-lg justify-between items-center"
      >
        <div class="flex flex-row items-center my-auto rounded py-3 ">
          <svg
            width="17"
            height="22"
            viewBox="0 0 17 22"
            xmlns="http://www.w3.org/2000/svg"
            ><path
              opacity="0.5"
              class="fill-nu-black-100"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.49748 0.000116977C8.47859 0.000993038 8.46048 0.00183333 8.44152 0.00183333C3.78722 0.0751667 -0.000920624 3.90477 1.67829e-07 8.53921C1.67829e-07 13.8208 5.28286 19.1631 7.95848 21.5291C7.96124 21.5318 7.964 21.5346 7.96769 21.5371C8.15924 21.7074 8.33814 21.862 8.5 22C10.9166 19.9437 17 14.2056 17 8.53921C17 3.90477 13.2128 0.0751667 8.55756 0.00183333C8.53776 0.00183333 8.51888 0.000916667 8.5 0L8.49748 0.000116977ZM8.58012 12.1101C11.0372 12.1101 13.0284 10.128 13.0284 7.68235C13.0284 5.2376 11.0372 3.25485 8.58012 3.25485C6.12392 3.25485 4.13258 5.2376 4.13258 7.68235C4.13258 10.128 6.12392 12.1101 8.58012 12.1101Z"
            /></svg
          >
          <div class="ml-4 my-auto">
            <div class="flex flex-row">
              <h4 class="card-sub-heading">{city}</h4>
            </div>
            <p class="sub-text text-base-content text-opacity-50">
              {name}
            </p>
          </div>
        </div>
        <div class="pl-2 pr-1" />
      </div>
    {/each}
  </div>
</div>
