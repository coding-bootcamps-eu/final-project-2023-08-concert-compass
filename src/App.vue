<template>
  <div id="app">
    <router-link :to="{ name: 'home' }">home</router-link>
    <router-link :to="{ name: 'list' }">list</router-link>
    <router-link :to="{ name: 'detail' }">detail</router-link>
    <router-link :to="{ name: 'search' }">search</router-link>
    <router-view />
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
