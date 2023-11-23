<template>
  <header>Concert name</header>
  <p>Rating</p>
  <p>Artist name</p>
  <p>DE - Berlin</p>
  <p>23/11/2023 20:00</p>
  <p>Pop</p>
  <p>Opening act</p>

  <fieldset>
    <input id="visited" name="list" type="radio" value="visited" />
    <label for="visited">Visited</label>

    <input id="wish" name="list" type="radio" value="wish" />
    <label for="wish">Wishlist</label>

    <input id="upcoming" name="list" type="radio" value="upcoming" />
    <label for="upcoming">Upcoming</label>
  </fieldset>
</template>

<script>
export default {
  name: "DetailView",
};
</script>
