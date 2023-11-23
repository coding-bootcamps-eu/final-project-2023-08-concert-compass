<template>
  <!-- render from concerts v-if="checkConcertsInStore" -->
  <div>
    <header>{{ currentConcert.name }}</header>
    <p>Rating</p>
    <p>Artist name</p>
    <p>DE - Berlin</p>
    <p>23/11/2023 20:00</p>
    <p>Pop</p>
    <p>Opening act</p>
  </div>

  <!-- render from searchResults -->
  <div v-if="!checkConcertsInStore">
    <header>Concert name</header>
    <p>Rating</p>
    <p>Artist name</p>
    <p>DE - Berlin</p>
    <p>23/11/2023 20:00</p>
    <p>Pop</p>
    <p>Opening act</p>
  </div>

  <!-- <h1>{{ $route.params.id }}</h1> -->

  <fieldset>
    <input id="visited" name="list" type="radio" value="visited" />
    <label for="visited">Visited</label>

    <input id="wish" name="list" type="radio" value="wish" />
    <label for="wish">Wishlist</label>

    <input id="upcoming" name="list" type="radio" value="upcoming" />
    <label for="upcoming">Upcoming</label>
  </fieldset>
</template>

<script>
import { useStore } from "../store.js";

export default {
  name: "DetailView",
  setup() {
    return {
      store: useStore(),
    };
  },
  data() {
    return {
      currentConcert: {},
    };
  },
  computed: {
    checkConcertsInStore() {
      return this.store.concerts.some(
        (concert) => concert.id === this.$route.params.id
      );
    },
  },
  method: {
    setCurrentConcert() {
      return (this.currentConcert = this.store.getEventDataFromState("123"));
    },
  },
};
</script>
