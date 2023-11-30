<template>
  <div v-if="!currentConcert">
    <router-link :to="{ name: 'home' }">Go back to Home</router-link>
  </div>

  <header
    class="text-white h-48 border-transparent flex top-0 items-end font-sans bg-cover relative"
    :style="{ backgroundImage: `url(${qualityImage})` }"
  >
    <router-link
      v-if="!hasStatus"
      class="absolute top-6 left-6"
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
      class="absolute top-6 left-6"
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
    <section class="bg-black text-white">
      <div class="px-6 py-6">
        <!-- Rating-Star -->
        <div v-if="currentConcert.status === 'visited'" class="flex">
          <div
            class="w-4 h-4 text-white ms-1 hover:cursor-pointer"
            v-for="star in 5"
            :key="star"
            @click="setCurrentConcertRating(star)"
          >
            <p
              class="text-white"
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
        <div class="flex mt-6 aline-baseline">
          <a
            class="flex space-x-3"
            :href="
              currentArtist.attractions?.[0].externalLinks?.youtube?.[0].url
            "
            target="_blank"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
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
            <p>Youtube</p>
          </a>
        </div>
      </div>
      <div class="bg-white border-transparent rounded-t-3xl w-full h-5"></div>
    </section>

    <section class="px-6 py-6">
      <div v-if="hasStatus" class="flex">
        <label class="font-bold text-lg" for="notes">Notes</label>

        <button v-if="!showTextarea" class="ml-4" @click="showTextarea = true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-4 h-4 text-violett-color"
          >
            <path
              d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"
            />
          </svg>
        </button>
      </div>
      <form
        class="mb-6"
        v-if="hasStatus && showTextarea"
        @submit.prevent="currentConcert.notes = notes"
      >
        <textarea
          class="focus:outline-none focus:ring-2 focus:ring-violett-color block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400sm:text-sm focus:border-black"
          v-if="showTextarea"
          v-model="notes"
          rows="4"
          cols="50"
        ></textarea>
        <button
          class="mt-2 bg-violett-color p-2 font-semibold text-sm text-white border border-gray-ash rounded-lg active:text-black active:bg-transparent"
          type="submit"
          @click="saveNotes()"
        >
          Save
        </button>
      </form>

      <div v-if="!showTextarea && hasStatus" id="output" class="mb-6 flex">
        <p v-if="truncatedText" class="flex flex-col items-start">
          {{ truncatedText }}
          <button
            class="text-violett-color font-semibold"
            id="read-more"
            @click="showFullText()"
          >
            Read More
          </button>
        </p>
        <p v-else>{{ notes }}</p>
      </div>

      <!-- Add to List -->
      <label for="lists" class="font-bold text-lg">Add concert to a list</label>
      <fieldset
        class="py-4 flex"
        @change="
          store.addConcertToList($event.target.value, this.currentConcert)
        "
        id="lists"
      >
        <div>
          <input
            class="peer hidden"
            id="visited"
            name="list"
            type="radio"
            value="visited"
            :checked="currentConcert.status === 'visited'"
          />
          <label
            class="text-black text-sm font-semibold cursor-pointer rounded-lg border border-gray-ash p-2 peer-checked:bg-black peer-checked:text-white select-none"
            for="visited"
            >Visited</label
          >
        </div>
        <div class="ml-2">
          <input
            class="peer hidden"
            id="wish"
            name="list"
            type="radio"
            value="wish"
            :checked="currentConcert.status === 'wish'"
          />
          <label
            class="text-black text-sm font-semibold cursor-pointer rounded-lg border border-gray-ash p-2 peer-checked:bg-black peer-checked:text-white select-none"
            for="wish"
            >Wishlist</label
          >
        </div>
        <div class="ml-2">
          <input
            class="peer hidden"
            id="upcoming"
            name="list"
            type="radio"
            value="upcoming"
            :checked="currentConcert.status === 'upcoming'"
          />
          <label
            class="text-black text-sm font-semibold cursor-pointer rounded-lg border border-gray-ash p-2 peer-checked:bg-black peer-checked:text-white select-none"
            for="upcoming"
            >Upcoming</label
          >
        </div>
      </fieldset>
      <button
        class="mt-2 border border-gray-ash font-semibold py-2 px-3 text-sm text-black rounded-lg"
        v-if="hasStatus"
        @click="store.removeConcertFromList($route.params.id)"
      >
        Remove from List
      </button>

      <template v-if="currentArtist"> </template>

      <iframe
        v-if="getSpotifyId"
        class="mt-6"
        style="border-radius: 12px"
        :src="`https://open.spotify.com/embed/artist/${getSpotifyId}?utm_source=generator&theme=0`"
        width="100%"
        height="352"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
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
      truncatedText: "",
      showTextarea: false,
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
    getSpotifyId() {
      let url =
        this.currentArtist.attractions?.[0].externalLinks?.spotify?.[0]?.url;
      if (url) {
        url = url.split("/");
        return url[url.length - 1];
      }
    },
  },
  methods: {
    setCurrentConcertRating(star) {
      this.currentConcert.status === "visited"
        ? (this.currentConcert.rating = star)
        : (this.currentConcert.rating = 0);
    },
    saveNotes() {
      this.truncatedText =
        this.notes.length > 50 ? this.notes.substring(0, 50) : "";

      this.showTextarea = !this.showTextarea;
      this.store.getConcertById(this.$route.params.id).notes = this.notes;
    },
    showFullText() {
      this.truncatedText = "";
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
  mounted() {
    this.truncatedText =
      this.notes.length > 50 ? this.notes.substring(0, 50) : "";
  },
};
</script>

<style>
.filled {
  color: #ffbb00;
}
</style>
