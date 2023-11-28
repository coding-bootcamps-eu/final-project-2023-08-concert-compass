<template>
  <h1>Hier ist die Search view</h1>
  <form action="" @submit.prevent="searchForConcerts">
    <input
      type="text"
      v-model.trim="store.searchKeyword"
      placeholder="Search for artists"
    />
    <button class="bg-indigo-500" type="submit">Search</button>
  </form>
  <p v-if="error">{{ error }}</p>
  <label v-if="!error" for="search-results">Search Results:</label>
  <ul v-if="!error" id="search-results">
    <li v-for="event in store.searchResult" :key="event.id">
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
    </li>
  </ul>
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
