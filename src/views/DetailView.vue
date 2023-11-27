<template>
  <div v-if="!currentConcert">
    <router-link :to="{ name: 'home' }">Go back to Home</router-link>
  </div>
  <div>
    <img :src="currentConcert.images[0].url" alt="" />
    <header>{{ currentConcert.name }}</header>
    <p v-if="currentConcert.rating">{{ currentConcert.rating }}</p>

    <p>
      {{ currentConcert._embedded.venues[0].city.name }},
      {{ currentConcert._embedded.venues[0].postalCode }},
      {{ currentConcert._embedded.venues[0].country.name }},
    </p>

    <p>{{ currentConcert._embedded.venues[0].address.line1 }}</p>

    <p>{{ currentConcert.dates.start.localDate }}</p>
    <p v-if="currentConcert.classifications[0].genre.name">
      {{ currentConcert.classifications[0].genre.name }},
    </p>

    <p>
      links to Spotify & YouTube we need to fetch the attractions route from
      ticketmaster API
    </p>
  </div>

  <fieldset
    @change="store.addConcertToList($event.target.value, this.currentConcert)"
  >
    <input
      id="visited"
      name="list"
      type="radio"
      value="visited"
      :checked="currentConcert.status === 'visited'"
    />
    <label for="visited">Visited</label>

    <input
      id="wish"
      name="list"
      type="radio"
      value="wish"
      :checked="currentConcert.status === 'wish'"
    />
    <label for="wish">Wishlist</label>

    <input
      id="upcoming"
      name="list"
      type="radio"
      value="upcoming"
      :checked="currentConcert.status === 'upcoming'"
    />
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
  computed: {
    currentConcert() {
      return this.store.getConcertById(this.$route.params.id);
    },
  },
};
</script>
