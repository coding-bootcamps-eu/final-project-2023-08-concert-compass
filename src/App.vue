<template>
  <div
    class="grid grid-rows-[1fr,auto] h-screen overflow-hidden max-w-screen-mobile m-auto"
  >
    <div class="overflow-auto"><router-view /></div>
    <nav
      class="grid grid-cols-4 place-content-evenly justify-items-center py-6"
    >
      <router-link class="" :to="{ name: 'home' }"
        ><img src="./assets/home.svg" alt="Home" width="20" height="20" />
      </router-link>
      <router-link :to="{ name: 'search' }"
        ><img src="./assets/search.svg" alt="Search" width="20" height="20" />
      </router-link>
      <span
        ><img
          src="./assets/discover.svg"
          alt="Discover"
          width="20"
          height="20"
        />
      </span>
      <span
        ><img src="./assets/user.svg" alt="Profile" width="20" height="20"
      /></span>
    </nav>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
