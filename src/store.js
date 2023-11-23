import { defineStore } from "pinia";

export const useStore = defineStore("concerts", {
  state() {
    return {
      concerts: [{ id: "123", name: "Test" }],
      searchResult: [],
      searchKeyword: "",
    };
  },
  actions: {
    addSearchResult(searchedConcerts) {
      this.searchResult = searchedConcerts;
    },
    getEventDataFromState(id) {
      console.log(this.concerts.filter((concert) => concert.id === id));
      return this.concerts.filter((concert) => concert.id === id);
    },
  },
  persist: true,
});
