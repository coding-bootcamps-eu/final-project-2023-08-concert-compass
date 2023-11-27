<template>
  <header>
    <h1 v-if="$route.params.status == 'visited'">Visited</h1>
    <h1 v-if="$route.params.status == 'wish'">Wishlist</h1>
    <h1 v-if="$route.params.status == 'upcoming'">Upcoming</h1>
  </header>
  <ul>
    <li v-for="concert of currentList" :key="concert.id">
      <router-link :to="{ name: 'detail', params: { id: concert.id } }">
        {{ concert.name }} {{ concert.dates.start.localDate }} -
        {{ concert.dates.start.localTime }} ,
        {{ concert._embedded.venues[0].city.name }} -
        {{ concert._embedded.venues[0].country.name }}</router-link
      >
    </li>
  </ul>
</template>

<script>
import { useStore } from "../store.js";

export default {
  name: "ListView",
  setup() {
    return {
      store: useStore(),
    };
  },
  computed: {
    currentList() {
      return this.store.getListByStatus(this.$route.params.status);
    },
  },
};
</script>

- getList function in den store schreiben, in der wir nach dem status filtern -
wenn wir
