<template>
  <h1>Hier ist die list view</h1>
  <div>{{ store.getListByStatus($route.params.status) }}</div>
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

- getList function in den store schreiben, in der wir nach dem status filtern -
wenn wir
