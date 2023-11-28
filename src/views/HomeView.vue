<template>
  <header>
    <h1>Welcome to your own Concert Compass!</h1>
  </header>
  <main>
    <div>
      <router-link :to="{ name: 'list', params: { status: 'visited' } }"
        >visited</router-link
      >
    </div>
    <div>
      <router-link :to="{ name: 'list', params: { status: 'wish' } }"
        >wish</router-link
      >
    </div>
    <div>
      <router-link :to="{ name: 'list', params: { status: 'upcoming' } }"
        >upcoming</router-link
      >
    </div>
  </main>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
