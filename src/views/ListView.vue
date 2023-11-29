<template>
  <header
    class="border-transparent rounded-b-lg h-1/4 flex items-center justify-center relative"
  >
    <router-link class="absolute top-6 left-6" :to="{ name: 'home' }">
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
    <h1 class="text-3xl font-bold" v-if="$route.params.status == 'visited'">
      Visited
    </h1>
    <h1 class="text-3xl font-bold" v-if="$route.params.status == 'wish'">
      Wishlist
    </h1>
    <h1 class="text-3xl font-bold" v-if="$route.params.status == 'upcoming'">
      Upcoming
    </h1>
  </header>
  <main class="mx-6">
    <ul class="mt-18">
      <li
        class="border-transparent rounded-lg shadow-xl mt-4 text-white bg-cover min-h-min"
        v-for="concert of currentList"
        :key="concert.id"
        :style="{ backgroundImage: `url(${concert.images?.[0].url})` }"
      >
        <div
          class="h-fit w-full bg-gray-overlay rounded-lg hover:bg-transparent"
        >
          <router-link :to="{ name: 'detail', params: { id: concert.id } }">
            <div class="p-4">
              <h6 class="text-lg font-semibold">{{ concert.name }}</h6>
              <p class="text-sm">
                {{ concert.dates.start.localDate }} &nbsp;
                {{ concert._embedded.venues[0].city.name }}
              </p>
            </div>
          </router-link>
        </div>
      </li>
    </ul>
  </main>
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
