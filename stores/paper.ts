import { defineStore } from "pinia";
import { ref } from "vue";

export const usePaper = defineStore(
  "paper",
  () => {
    const name = ref<string>("");
    const description = ref<string>("");

    const fetch = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      name.value = "周飞";
      description.value = "今天分享啦——————";
    };

    return {
      name,
      description,
      fetch,
    };
  },
  {
    persist: true,
  },
);
