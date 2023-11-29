<template>
  <header
    class="border-transparent rounded-b-lg h-1/4 flex items-center justify-center"
  >
    <h1 class="text-3xl font-bold text-center px-4">
      Welcome to your own Concert Compass!
    </h1>
  </header>
  <main class="mx-6">
    <ul>
      <li
        class="border border-gray-ash rounded-lg shadow-xl mt-4 bg-cover min-h-min p-4"
      >
        <router-link
          class="flex space-x-4"
          :to="{ name: 'list', params: { status: 'visited' } }"
          ><svg
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
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>

          <h6>Visited Concerts</h6>
        </router-link>
      </li>
      <li
        class="border border-gray-ash rounded-lg shadow-xl mt-4 bg-cover min-h-min p-4"
      >
        <router-link
          class="flex space-x-4"
          :to="{ name: 'list', params: { status: 'wish' } }"
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
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          <h6>Wishlist</h6></router-link
        >
      </li>
      <li
        class="border border-gray-ash rounded-lg shadow-xl mt-4 bg-cover min-h-min p-4"
      >
        <router-link
          class="flex space-x-4"
          :to="{ name: 'list', params: { status: 'upcoming' } }"
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
              d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
            />
          </svg>
          <h6>Upcoming Concerts</h6></router-link
        >
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
