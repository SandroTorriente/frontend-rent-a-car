import { defineStore } from "pinia";
import { ref } from "vue";

export const useSelected = defineStore("selected", () => {
  const selected = ref(null);
  return { selected };
});
