import { defineStore } from "pinia";

export const useStore = defineStore("concerts", {
  state() {
    return {
      concerts: [],
      searchResult: [],
      searchKeyword: "",
    };
  },
  actions: {
    addSearchResult(searchedConcerts) {
      this.searchResult = searchedConcerts;
    },
    clear() {
      //clear localStorage
    },
  },
  persist: true,
});
