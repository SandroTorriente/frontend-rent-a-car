import { defineStore } from "pinia";
import { ref } from "vue";

export const useOpenStore = defineStore("open", () => {
  const open = ref(true);
  function toggleOpen() {
    open.value = !open.value;
  }
  return { open, toggleOpen };
});
