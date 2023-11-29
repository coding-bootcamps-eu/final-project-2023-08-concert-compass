<template>
  <header
    class="border-transparent rounded-b-lg h-1/4 flex items-center justify-center"
  >
    <h1 class="text-3xl font-bold">Search</h1>
  </header>
  <main class="mx-6">
    <form class="flex" @submit.prevent="searchForConcerts">
      <input
        class="border border-gray-ash rounded-lg shadow-xl p-2 w-[90%] focus:outline-blue placeholder:text-slate-400 tracking-wide"
        type="text"
        v-model.trim="store.searchKeyword"
        placeholder="Search for artists"
      />
      <button
        class="border border-gray-ash py-2 px-4 rounded-lg ml-6 shadow-xl font-semibold tracking-wide capitalize cursor-pointer"
        type="submit"
      >
        <svg
          class="fill-gray-ash"
          xmlns="http://www.w3.org/2000/svg"
          id="Outline"
          viewBox="0 0 24 24"
          width="20"
          height="20"
        >
          <path
            d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z"
          />
        </svg>
      </button>
    </form>
    <section class="mt-4">
      <p v-if="error">{{ error }}</p>

      <ul class="mt-8" v-if="!error" id="search-results">
        <li
          class="border-transparent rounded-lg text-white-color shadow-xl mt-4 bg-cover min-h-min"
          v-for="event in store.searchResult"
          :key="event.id"
          :style="{ backgroundImage: `url(${event.images?.[0].url})` }"
        >
          <router-link
            v-if="event._embedded"
            :to="{ name: 'detail', params: { id: event.id } }"
          >
            <div class="h-fit w-full bg-gray-overlay rounded-lg">
              <div class="p-4">
                <h6 class="text-lg font-semibold">{{ event.name }}</h6>

                <p class="text-sm">
                  {{
                    event._embedded.venues[0].city.name
                      ? event._embedded.venues[0].city.name
                      : ""
                  }}
                  {{ event._embedded.venues[0].country.countryCode }}
                </p>
                <p class="text-sm">{{ event.dates.start.localDate }}</p>
              </div>
            </div></router-link
          >
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
import { useStore } from "../store.js";

export default {
  name: "SearchView",
  setup() {
    return {
      store: useStore(),
    };
  },

  beforeCreate() {
    const currentTime = new Date().getTime();
    const timeDifference =
      Math.abs(currentTime - this.store.searchTimestamp) / 1000;
    if (timeDifference > 10) {
      this.store.searchResult = [];
    }
  },
  data() {
    return {
      error: "",
    };
  },
  methods: {
    async searchForConcerts() {
      this.error = "";
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?apikey=Q1xqcifyG0Ypi3cGI2x3IlwdsWJRcgtl&keyword=${this.store.searchKeyword}&classificationName=Music`
      );
      const data = await response.json();
      this.store.searchTimestamp = new Date().getTime();
      if (data._embedded === undefined) {
        return (this.error = "Sorry, there is no match to your search.");
      } else this.store.searchResult = data._embedded.events;
    },
  },
};
</script>
