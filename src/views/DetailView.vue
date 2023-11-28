<template>
  <div v-if="!currentConcert">
    <router-link :to="{ name: 'home' }">Go back to Home</router-link>
  </div>
  <div>
    <img :src="currentConcert.images[0].url" alt="" />
    <header>{{ currentConcert.name }}</header>
    <p v-if="currentConcert.rating">{{ currentConcert.rating }}</p>

    <!--   <p>
      {{ currentConcert._embedded.venues[0].city.name }},
      {{ currentConcert._embedded.venues[0].postalCode }},
      {{ currentConcert._embedded.venues[0].country.name }},
    </p>

    <p>{{ currentConcert._embedded.venues[0].address.line1 }}</p> -->

    <p>{{ currentConcert.dates.start.localDate }}</p>
    <p v-if="currentConcert.classifications[0].genre.name">
      {{ currentConcert.classifications[0].genre.name }},
    </p>

    <p>
      links to Spotify & YouTube we need to fetch the attractions route from
      ticketmaster API
    </p>
  </div>
  <form v-if="hasStatus" @submit.prevent="">
    <label for="notes">Notes</label>
    <textarea
      v-model="currentConcert.notes"
      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      type="text"
      name="concert-notes"
      id="notes"
      placeholder="Write some notes about the concert"
    ></textarea>
    <button class="mt-6 bg-blue-500 py-2 px-3 text-white" @click="">
      Save
    </button>
  </form>

  <fieldset
    @change="store.addConcertToList($event.target.value, this.currentConcert)"
    id="lists"
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
  <button
    v-if="hasStatus"
    @click="store.removeConcertFromList($route.params.id)"
  >
    Remove from List
  </button>
  <template v-if="currentArtist">
    <a :href="currentArtist.attractions[0].externalLinks.spotify[0].url"
      >Spotify</a
    >
    <a :href="currentArtist.attractions[0].externalLinks.youtube[0].url"
      >Youtube</a
    >
    <h2>Artist Name: {{ currentArtist.attractions[0].name }}</h2>
  </template>
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
      currentArtist: null,
    };
  },
  computed: {
    currentConcert() {
      return this.store.getConcertById(this.$route.params.id);
    },
    hasStatus() {
      if (this.store.getConcertById(this.$route.params.id).status) {
        return true;
      }
      return false;
    },
  },

  created() {
    if (this.currentConcert._embedded.attractions?.[0]?.id == undefined) {
      return;
    }
    fetch(
      `https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=Q1xqcifyG0Ypi3cGI2x3IlwdsWJRcgtl&id=${this.currentConcert._embedded.attractions[0].id}`
    )
      .then((response) => response.json())
      .then((data) => (this.currentArtist = data._embedded))
      .catch((error) => console.log(error));
  },
};
</script>
