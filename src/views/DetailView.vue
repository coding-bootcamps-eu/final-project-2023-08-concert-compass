<template>
  <div>
    <img :src="store.currentConcert.images[0].url" alt="" />
    <header>{{ store.currentConcert.name }}</header>
    <p v-if="store.currentConcert.rating">{{ store.currentConcert.rating }}</p>

    <p>
      {{ store.currentConcert._embedded.venues[0].city.name }},
      {{ store.currentConcert._embedded.venues[0].postalCode }},
      {{ store.currentConcert._embedded.venues[0].country.name }},
    </p>

    <p>{{ store.currentConcert._embedded.venues[0].address.line1 }}</p>

    <p>{{ store.currentConcert.dates.start.localDate }}</p>
    <p>
      {{ store.currentConcert.classifications[0].genre.name }},
      {{ store.currentConcert.classifications[0].subGenre.name }}
    </p>

    <p>
      links to Spotify & YouTube we need to fetch the attractions route from
      ticketmaster API
    </p>
  </div>

  <fieldset @change="store.addConcertToList($event.target.value)">
    <input
      id="visited"
      name="list"
      type="radio"
      value="visited"
      :checked="store.currentConcert.status === 'visited'"
    />
    <label for="visited">Visited</label>

    <input
      id="wish"
      name="list"
      type="radio"
      value="wish"
      :checked="store.currentConcert.status === 'wish'"
    />
    <label for="wish">Wishlist</label>

    <input
      id="upcoming"
      name="list"
      type="radio"
      value="upcoming"
      :checked="store.currentConcert.status === 'upcoming'"
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
};
</script>
