<template>
  <div id="app">
    <router-view />
    <nav class="grid grid-cols-4 place-content-evenly justify-items-center">
      <router-link :to="{ name: 'home' }"
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
