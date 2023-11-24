<template>
  <div>
    <header>{{ store.currentConcert.name }}</header>
    <p v-if="store.currentConcert.rating">{{ store.currentConcert.rating }}</p>
    <p>{{ store.currentConcert.locale }}</p>
    <p>DE - Berlin</p>
    <p>{{ store.currentConcert.dates.start.localDate }}</p>
    <p>Pop</p>
    <p>links</p>
  </div>

  <fieldset @change="store.addConcertToList($event.target.value)">
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
};
</script>
