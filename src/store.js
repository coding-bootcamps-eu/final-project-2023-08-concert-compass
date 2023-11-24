import { defineStore } from "pinia";

export const useStore = defineStore("concerts", {
  state() {
    return {
      concerts: [{ id: "123", name: "Test" }],
      searchResult: [],
      searchKeyword: "",
      currentConcert: {},
    };
  },

  actions: {
    getEventDataFromState(id) {
      console.log(this.concerts.filter((concert) => concert.id === id));
      return this.concerts.filter((concert) => concert.id === id);
    },
    setCurrentConcert(id) {
      const concertData = this.concerts.find((concert) => concert.id === id);

      if (concertData) {
        this.currentConcert = concertData;
      } else {
        this.currentConcert = this.searchResult.find(
          (concert) => concert.id === id
        );
      }
    },
  },
  persist: true,
});
