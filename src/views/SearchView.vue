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
  <label for="search-results">Search Results:</label>
  <ul id="search-results">
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
  methods: {
    async searchForConcerts() {
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?apikey=Q1xqcifyG0Ypi3cGI2x3IlwdsWJRcgtl&keyword=${this.store.searchKeyword}`
      );
      const data = await response.json();
      this.store.searchResult = data._embedded.events;
    },
  },
};
</script>
