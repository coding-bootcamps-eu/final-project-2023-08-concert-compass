<template>
  <div v-if="!currentConcert">
    <router-link :to="{ name: 'home' }">Go back to Home</router-link>
  </div>
  <div class="grid grid-row">
    <div>
      <header
        class="align-items-start h-48 p-2 border rounded-3xl flex sticky top-0 justify-center font-sans bg-cover"
        :style="{ backgroundImage: `url(${currentConcert.images[0].url})` }"
      >
        <h1 class="text-white-color m-0">{{ currentConcert.name }}</h1>
      </header>
    </div>

    <div class="py-2 text-lg">
      <!-- Rating Stars -->
      <div
        class="flex items-center text-orange-color items-end justify-center px-2"
      >
        <svg
          class="items-center w-4 h-4 text-yellow-300 ms-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          :style="{ fill: currentConcert.rating >= 1 ? currentColor : '' }"
          viewBox="0 0 22 20"
        >
          <path
            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
          />
        </svg>
        <svg
          class="w-4 h-4 text-yellow-300 ms-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path
            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
          />
        </svg>
        <svg
          class="w-4 h-4 text-yellow-300 ms-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path
            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
          />
        </svg>
        <svg
          class="w-4 h-4 text-yellow-300 ms-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path
            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
          />
        </svg>
        <svg
          class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path
            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
          />
        </svg>
      </div>
      <div class="py-8 font-sans mb-0">
        <!-- Artist Name -->
        <p>Artist Name PLACEHOLDER</p>
        <!-- Date & Time -->
      </div>
      <div class="flex space-x-2 mt-2 py-8 font-sans ml-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Layer_1"
          data-name="Layer 1"
          viewBox="0 0 24 24"
          width="20"
          height="20"
        >
          <path
            d="M24,7v1H0v-1C0,4.239,2.239,2,5,2h1V1c0-.552,.448-1,1-1h0c.552,0,1,.448,1,1v1h8V1c0-.552,.448-1,1-1h0c.552,0,1,.448,1,1v1h1c2.761,0,5,2.239,5,5Zm0,10c0,3.86-3.141,7-7,7s-7-3.14-7-7,3.141-7,7-7,7,3.14,7,7Zm-5,.586l-1-1v-1.586c0-.552-.448-1-1-1h0c-.552,0-1,.448-1,1v2c0,.265,.105,.52,.293,.707l1.293,1.293c.39,.39,1.024,.39,1.414,0h0c.39-.39,.39-1.024,0-1.414Zm-11-.586c0-2.829,1.308-5.35,3.349-7H0v9c0,2.761,2.239,5,5,5h6.349c-2.041-1.65-3.349-4.171-3.349-7Z"
          />
        </svg>
        <p>
          {{ currentConcert.dates.start.localDate }} -
          {{ currentConcert.dates.start.localTime }}
        </p>
      </div>

      <!-- Location -->
      <div class="flex flex-col content-start break-words">
        <div class="flex space-x-2 font-sans ml-2 mt-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >
            <path
              d="M12,0A10.011,10.011,0,0,0,2,10c0,5.282,8.4,12.533,9.354,13.343l.646.546.646-.546C13.6,22.533,22,15.282,22,10A10.011,10.011,0,0,0,12,0Zm0,15a5,5,0,1,1,5-5A5.006,5.006,0,0,1,12,15Z"
            />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <h6 class="font-bold">
            {{ currentConcert._embedded.venues[0].name }}
          </h6>
        </div>
        <p class="text-sm self-start ml-7 text-gray-ash mt-2 text-left">
          {{ currentConcert._embedded.venues[0].address.line1 }},
          {{ currentConcert._embedded.venues[0].postalCode }},
          <br />
          {{ currentConcert._embedded.venues[0].city.name }},
          {{ currentConcert._embedded.venues[0].country.name }}
        </p>
      </div>
      <!-- Genre -->
      <div class="flex space-x-2 mt-4 font-sans ml-2">
        <svg
          id="Layer_1"
          height="20"
          viewBox="0 0 24 24"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
        >
          <path
            d="m22.916.691a2.992 2.992 0 0 0 -2.469-.638l-11.999 2.247a3 3 0 0 0 -2.448 2.951v11.305a3.959 3.959 0 0 0 -2-.556 4 4 0 1 0 4 4v-10.58l14-2.62v6.761a3.959 3.959 0 0 0 -2-.561 4 4 0 1 0 4 4v-14a3 3 0 0 0 -1.084-2.309z"
          />
        </svg>
        <p v-if="currentConcert.classifications[0].genre.name">
          {{ currentConcert.classifications[0].genre.name }}
        </p>
      </div>
      <!-- Links -->
    </div>
    <p class="justify-center font-sans py-14">links to Spotify & YouTube</p>

    <input
      id="visited"
      name="list"
      type="radio"
      value="visited"
      :checked="currentConcert.status === 'visited'"
    />
    <label for="visited">Visited</label>

    <p>
      links to Spotify & YouTube we need to fetch the attractions route from
      ticketmaster API
    </p>
  </div>

  <form v-if="hasStatus" @submit.prevent="currentConcert.notes = notes">
    <label for="notes">Notes</label>
    <textarea
      v-model="currentConcert.notes"
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
  created() {
    this.notes = this.currentConcert.notes ?? "";
  },
};
</script>
