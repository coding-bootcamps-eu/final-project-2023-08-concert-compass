import { defineStore } from "pinia";

export const useStore = defineStore("concerts", {
  state() {
    return {
      concerts: [],
      searchResult: [],
      searchKeyword: "",
      currentConcert: {},
    };
  },

  actions: {
    addConcertToList(status) {
      if (!this.concerts.includes(this.currentConcert)) {
        this.currentConcert.status = status;
        this.currentConcert.rating = 0;
        this.concerts.push(this.currentConcert);
      } else {
        const currentConcertIndex = this.concerts.findIndex(
          (concert) => concert.id === this.currentConcert.id
        );
        this.concerts[currentConcertIndex].status = status;
      }
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
    getListByStatus(status) {
      return this.concerts.filter((concert) => concert.status === status);
    },
  },
  persist: true,
});
