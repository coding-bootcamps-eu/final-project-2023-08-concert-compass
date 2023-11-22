import { defineStore } from "pinia";

export const useStore = defineStore("concerts", {
  state() {
    return {
      concerts: [
        {
          ticketmasterID: "123456",
          ticketmasterConcert: {
            artistName: "Taylor Swift",
            eventName: "Summer Tour",
            location: "Berlin",
            date: "06/06/2024",
          },
          status: "wish",
          rating: 0,
        },
      ],
    };
  },
  persist: true,
});
