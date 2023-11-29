<template>
  <div v-if="!currentConcert">
    <router-link :to="{ name: 'home' }">Go back to Home</router-link>
  </div>

  <header
    class="text-white-color h-48 border-transparent flex sticky top-0 items-end font-sans bg-cover relative"
    :style="{ backgroundImage: `url(${qualityImage})` }"
  >
    <h1
      class="text-2xl bg-gradient-black absolute left-0 right-0 bottom-0 px-6"
    >
      {{ currentConcert.name }}
    </h1>
  </header>
  <main>
    <section class="bg-black-color text-white-color px-6 py-6">
      <!-- Rating-Star -->
      <div v-if="currentConcert.status === 'visited'" class="flex">
        <div
          class="w-4 h-4 text-white-color ms-1 hover:cursor-pointer"
          v-for="star in 5"
          :key="star"
          @click="setCurrentConcertRating(star)"
        >
          <p
            class="text-black"
            :class="{ filled: star <= this.currentConcert.rating }"
          >
            ★
          </p>
        </div>
      </div>
      <!-- Artist Name -->
      <div v-if="currentArtist" class="flex space-x-2 mt-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6"
        >
          <path
            fill-rule="evenodd"
            d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            clip-rule="evenodd"
          />
        </svg>
        <h2>
          {{ currentArtist.attractions[0].name }}
        </h2>
      </div>
      <!-- Date & Time -->
      <div class="flex space-x-2 mt-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6"
        >
          <path
            d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z"
          />
          <path
            fill-rule="evenodd"
            d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
            clip-rule="evenodd"
          />
        </svg>

        <p>
          {{ currentConcert.dates.start.localDate }} &nbsp;| &nbsp;{{
            currentConcert.dates.start.localTime.slice(0, -3)
          }}
        </p>
      </div>

      <!-- Location -->

      <div class="flex space-x-2 mt-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6"
        >
          <path
            fill-rule="evenodd"
            d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
            clip-rule="evenodd"
          />
        </svg>
        <div>
          <h6 class="font-bold">
            {{ currentConcert._embedded.venues[0].name }}
          </h6>
          <p class="text-sm text-left">
            {{ currentConcert._embedded.venues[0].address.line1 }},
            {{ currentConcert._embedded.venues[0].postalCode }}
            <br />
            {{ currentConcert._embedded.venues[0].city.name }},
            {{ currentConcert._embedded.venues[0].country.countryCode }}
          </p>
        </div>
      </div>

      <!-- Genre -->
      <div class="flex space-x-2 mt-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6"
        >
          <path
            fill-rule="evenodd"
            d="M19.952 1.651a.75.75 0 01.298.599V16.303a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.403-4.909l2.311-.66a1.5 1.5 0 001.088-1.442V6.994l-9 2.572v9.737a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.402-4.909l2.31-.66a1.5 1.5 0 001.088-1.442V9.017 5.25a.75.75 0 01.544-.721l10.5-3a.75.75 0 01.658.122z"
            clip-rule="evenodd"
          />
        </svg>

        <p v-if="currentConcert.classifications[0].genre.name">
          {{ currentConcert.classifications[0].genre.name }}
        </p>
      </div>
    </section>

    <section class="border-transparent rounden-t-lg px-6 py-6">
      <!-- Add to List -->
      <form v-if="hasStatus" @submit.prevent="currentConcert.notes = notes">
        <label for="notes">Notes</label>
        <textarea
          v-model="notes"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          type="text"
          name="concert-notes"
          id="notes"
          placeholder="Write some notes about the concert"
        ></textarea>

        <button
          v-if="notes !== this.currentConcert.notes"
          class="mt-6 bg-blue-500 py-2 px-3 text-white"
          type="submit"
        >
          Save
        </button>
      </form>

      <fieldset
        @change="
          store.addConcertToList($event.target.value, this.currentConcert)
        "
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
        <a
          :href="currentArtist.attractions?.[0].externalLinks?.spotify?.[0].url"
          >Spotify</a
        >
        <a
          :href="currentArtist.attractions?.[0].externalLinks?.youtube?.[0].url"
          >Youtube</a
        >
      </template>
    </section>
  </main>
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
      notes: "",
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
    qualityImage() {
      for (let image of this.currentConcert.images) {
        if (image.height >= 600) return image.url;
      }
    },
  },
  methods: {
    setCurrentConcertRating(star) {
      this.currentConcert.status === "visited"
        ? (this.currentConcert.rating = star)
        : (this.currentConcert.rating = 0);
    },
  },

  created() {
    this.notes = this.currentConcert.notes ?? "";

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

<style>
.filled {
  color: #ffbb00;
}
</style>
