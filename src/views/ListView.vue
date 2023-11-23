<template>
  <h1>Hier ist die list view</h1>
  <div>{{ store.concerts }}</div>
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
};
</script>
