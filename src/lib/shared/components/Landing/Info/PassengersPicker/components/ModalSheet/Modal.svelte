<script>
  import { currentType } from "../../ModalStore";
  import { child } from "../../ModalStore";
  import { infants } from "../../ModalStore";
  import { adults } from "../../ModalStore";

  let current = "Economy";

  //change travellers from radio

  function onChange(event) {
    current = event.currentTarget.value;
    // console.log("On change function is called now");
    currentType.update((data) => current);
  }

  function incrementAdults() {
    if ($adults + $child == 9) {
      alert("No more seats!");
      return;
    }
    console.log("Adults function is called");
    adults.update((data) => $adults + 1);
  }
  function decrementAdults() {
    if ($adults == 0) {
      alert("Not possible");
      return;
    }
    adults.update((data) => $adults - 1);
  }

  function incrementInfants() {
    if ($infants == $adults) {
      alert("No more adults are there!");
      return;
    }
    infants.update((data) => $infants + 1);
  }
  function decrementInfants() {
    if ($infants == 0) {
      alert("Not possible");
      return;
    }
    infants.update((data) => $infants - 1);
  }

  function incrementChild() {
    if ($adults + $child == 9) {
      alert("No more seats!");
      return;
    }

    child.update((data) => $child + 1);
  }
  function decrementChild() {
    if ($child == 0) {
      alert("Not possible");
      return;
    }
    child.update((data) => $child - 1);
  }
</script>

<input type="checkbox" id="my-modal" class="modal-toggle" />
<div class="modal modal-bottom bg-opacity-60">
  <div
    class="modal-box w-full h-fit bg-[#f0f0f5] rounded-t-2xl p-4 white rounded-b-none flex flex-col justify-between"
  >
    <div class="flex flex-col">
      <div class="flex flex-row p-4 justify-between items-center">
        <div class="flex flex-row  items-center" />
        <label for="my-modal"
          ><div
            class="btn btn-square btn-outline p-0 btn-sm btn-primary border-0 "
          >
            <svg
              class="h-6 w-6"
              fill="black"
              viewBox="0 0 24 24"
              stroke="currentColor"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              /></svg
            >
          </div>
        </label>
      </div>
    </div>

    <div class="flex flex-col justify-between  text-left h-full">
      <div class="mx-4">
        <b class=" mb-3">Select Travellers(s)</b>
        <div class="flex flex-row py-3 place-content-between">
          <div class="flex flex-col">
            <div class="heading-2">Adults</div>
            <div class="text-sm text-slate-400">12 years and above</div>
          </div>
          <div
            class="flex px-2 flex-wrap bg-white items-center border-base-500 border rounded-xl border-opacity-30"
          >
            <div class="mx-1">
              <button on:click={decrementAdults} class="">-</button>
            </div>
            <div class="mx-1">{$adults}</div>
            <div class="mx-1">
              <button on:click={incrementAdults} class=""> +</button>
            </div>
          </div>
        </div>
        <div class="flex flex-row py-3 place-content-between">
          <div class="flex flex-col">
            <div class="heading-2">Children</div>
            <div class=" text-sm text-slate-400">2 to 12 years</div>
          </div>
          <div
            class="flex px-2 flex-wrap bg-white items-center border-base-500 border rounded-xl border-opacity-30"
          >
            <div class="mx-1">
              <button on:click={decrementChild} class="">-</button>
            </div>
            <div class="mx-1">{$child}</div>
            <div class="mx-1">
              <button on:click={incrementChild} class=""> +</button>
            </div>
          </div>
        </div>

        <div class="flex flex-row py-3 place-content-between">
          <div class="flex flex-col">
            <div class="heading-2">Infants</div>
            <div class="text-sm text-slate-400">Less than 2 years</div>
          </div>
          <div
            class="flex px-2 flex-wrap bg-white items-center border-base-500 border rounded-xl border-opacity-30"
          >
            <div class="mx-1">
              <button on:click={decrementInfants} class="">-</button>
            </div>
            <div class="mx-1">{$infants}</div>
            <div class="mx-1">
              <button on:click={incrementInfants} class=""> +</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-2 typePassengers ml-4">
      <b class=" mb-3 ">Select Class</b>
      <div class="economy flex items-center p-2">
        <input
          checked
          id="economy"
          type="radio"
          on:change={onChange}
          value="Economy"
          name="default-radio"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          for="economy"
          class="ml-2 text-sm font-medium text-gray-900 dark:text-black"
          >Economy class
        </label>
      </div>

      <div class="buisness flex items-center p-2">
        <input
          checked
          id="buisness"
          type="radio"
          on:change={onChange}
          value="Buisness"
          name="default-radio"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          for="buisness"
          class="ml-2 text-sm font-medium text-gray-900 dark:text-black"
          >Business class
        </label>
      </div>

      <div class="premium flex items-center p-2">
        <input
          id="premium"
          type="radio"
          on:change={onChange}
          value="Premium"
          name="default-radio"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          for="premium"
          class="ml-2 text-sm font-medium text-gray-900 dark:text-black"
          >Premium Economy class
        </label>
      </div>
    </div>
    <label class="btn bg-green-600 flex flex-col mt-4 mb-3 h-16" for="my-modal"
      ><div class="items-center">Proceed</div></label
    >
  </div>
</div>
