<template>
  <div v-if="!currentConcert">
    <router-link :to="{ name: 'home' }">Go back to Home</router-link>
  </div>

  <header
    class="text-white-color h-48 border-transparent flex sticky top-0 items-end font-sans bg-cover relative"
    :style="{ backgroundImage: `url(${currentConcert.images[1].url})` }"
  >
    <router-link
      v-if="!hasStatus"
      class="fixed top-6 left-6"
      :to="{ name: 'search' }"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
        />
      </svg>
    </router-link>
    <router-link
      v-if="hasStatus"
      class="fixed top-6 left-6"
      :to="{ name: 'list', params: { status: currentConcert.status } }"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
        />
      </svg>
    </router-link>
    <h1
      class="text-2xl bg-gradient-black absolute left-0 right-0 bottom-0 px-6"
    >
      {{ currentConcert.name }}
    </h1>
  </header>
  <main>
    <section class="bg-black-color text-white-color px-6 py-6">
      <!-- Rating-Star -->
      <div
        v-if="currentConcert.status === 'visited'"
        class="flex hover:scale-110"
      >
        <div
          class="items-center w-4 h-4 text-black hover:cursor-pointer hover:scale-110"
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
      <div class="flex space-x-2 mt-6">
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
        <h2 v-if="currentArtist">
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
        <div class="flex mt-6 aline-baseline">
          <a
            class="flex"
            :href="
              currentArtist.attractions?.[0].externalLinks?.spotify?.[0].url
            "
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 50 50"
            >
              <path
                d="M25.009,1.982C12.322,1.982,2,12.304,2,24.991S12.322,48,25.009,48s23.009-10.321,23.009-23.009S37.696,1.982,25.009,1.982z M34.748,35.333c-0.289,0.434-0.765,0.668-1.25,0.668c-0.286,0-0.575-0.081-0.831-0.252C30.194,34.1,26,33,22.5,33.001 c-3.714,0.002-6.498,0.914-6.526,0.923c-0.784,0.266-1.635-0.162-1.897-0.948s0.163-1.636,0.949-1.897 c0.132-0.044,3.279-1.075,7.474-1.077C26,30,30.868,30.944,34.332,33.253C35.022,33.713,35.208,34.644,34.748,35.333z M37.74,29.193 c-0.325,0.522-0.886,0.809-1.459,0.809c-0.31,0-0.624-0.083-0.906-0.26c-4.484-2.794-9.092-3.385-13.062-3.35 c-4.482,0.04-8.066,0.895-8.127,0.913c-0.907,0.258-1.861-0.272-2.12-1.183c-0.259-0.913,0.272-1.862,1.184-2.12 c0.277-0.079,3.854-0.959,8.751-1c4.465-0.037,10.029,0.61,15.191,3.826C37.995,27.328,38.242,28.388,37.74,29.193z M40.725,22.013 C40.352,22.647,39.684,23,38.998,23c-0.344,0-0.692-0.089-1.011-0.275c-5.226-3.068-11.58-3.719-15.99-3.725 c-0.021,0-0.042,0-0.063,0c-5.333,0-9.44,0.938-9.481,0.948c-1.078,0.247-2.151-0.419-2.401-1.495 c-0.25-1.075,0.417-2.149,1.492-2.4C11.729,16.01,16.117,15,21.934,15c0.023,0,0.046,0,0.069,0 c4.905,0.007,12.011,0.753,18.01,4.275C40.965,19.835,41.284,21.061,40.725,22.013z"
              ></path>
            </svg>
            <p class="pl-2">Spotify</p></a
          >

          <a
            class="flex ml-4"
            :href="
              currentArtist.attractions?.[0].externalLinks?.youtube?.[0].url
            "
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 50 50"
            >
              <path
                d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"
              ></path>
            </svg>
            <p class="pl-2">Youtube</p>
          </a>
        </div>
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
