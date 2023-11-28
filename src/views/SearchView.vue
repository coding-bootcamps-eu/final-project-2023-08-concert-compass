<template>
 <div class="bg-#2E223C">
  <form action="" @submit.prevent="searchForConcerts">
    <input
      class="bg-gray-100 border-2 border-gray-200 focus:border-blue-500 rounded px-2 py-2 text-sm text-gray-700 placeholder-gray-400 placeholder-italic focus-outline-none w-full focus:ring-2"
      type="text"
      v-model.trim="store.searchKeyword"
      placeholder="Search for artists"
    />
    <button class="bg-black text-white w-full border-4 border-gray-200 focus:border-yellow-500 space-y-4" type="submit">Search</button>
  </form>
  <p v-if="error">{{ error }}</p>
  <label v-if="!error" for="search-results" class="mt-4 font-bold space-y-2 text-gray-400">Search Results:</label>
  <ul v-if="!error" id="search-results">
    <li class="grid grid-cols-1 text-left border-2 border-black-solid h-16 group/item hover:bg-slate-100" v-for="event in store.searchResult" :key="event.id">
      <router-link
        v-if="event._embedded"
        :to="{ name: 'detail', params: { id: event.id } }"
        >{{ event.name }}
        {{
          event._embedded.venues[0].city.name
            ? event._embedded.venues[0].city.name
            : ""
        }}
        {{ event._embedded.venues[0].country.name }}
        {{ event.dates.start.localDate }}</router-link
      >
        <router-link :to="{ name: 'detail', params: { id: event.id } }"
          >{{ event.name }} {{ event._embedded.venues[0].city.name }}
          {{ event._embedded.venues[0].country.name }}
          {{ event.dates.start.localDate }}</router-link
        >
      </li>
    </ul>
  </div>
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
