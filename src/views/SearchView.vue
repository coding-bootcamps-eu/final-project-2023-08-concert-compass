<template>
  <h1>Hier ist die Search view</h1>
  <form action="" @submit.prevent="searchForConcerts">
    <input
      type="text"
      v-model.trim="store.searchKeyword"
      placeholder="Search for artists"
    />
    <button type="submit">Search</button>
  </form>
  <ul>
    <li v-for="event in store.searchResult">{{ event.name }}</li>
  </ul>
</template>

<script>
import { useStore } from "../store.js";
export default {
  name: "SearchView",
  data() {
    return {};
  },
  setup() {
    return {
      store: useStore(),
    };
  },
  methods: {
    async searchForConcerts() {
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?apikey=Q1xqcifyG0Ypi3cGI2x3IlwdsWJRcgtl&keyword=${this.store.searchKeyword}`
      );
      const data = await response.json();
      const events = data._embedded.events;

      this.store.addSearchResult(events);
    },
  },
};
</script>
