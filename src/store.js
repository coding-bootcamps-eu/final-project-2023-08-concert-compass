import { defineStore } from "pinia";

export const useStore = defineStore("concerts", {
  state() {
    return {
      concerts: [],
      searchResult: [],
      searchTimestamp: 0,
      searchKeyword: "",
    };
  },

  actions: {
    addConcertToList(status, concert) {
      if (!this.concerts.some((c) => c.id === concert.id)) {
        this.concerts.push({
          ...concert,
          status,
          rating: 0,
          notes: "",
        });
      } else {
        const currentConcertIndex = this.concerts.findIndex(
          (c) => c.id === concert.id
        );
        this.concerts[currentConcertIndex].status = status;
      }
    },
    getConcertById(id) {
      return (
        this.concerts.find((concert) => concert.id === id) ||
        this.searchResult.find((concert) => concert.id === id)
      );
    },
    getListByStatus(status) {
      return this.concerts.filter((concert) => concert.status === status);
    },
    removeConcertFromList(id) {
      this.concerts = this.concerts.filter((c) => c.id !== id);
    },
  },
  persist: true,
});
