<template>
  <div>
    <div class="md:flex space-y-4 md:space-y-0 md:space-x-4 md:items-center">
      <div class="md:w-80"> 
        <img v-if="image" :src="'http://localhost:1337' + image.attributes.url" />
      </div>
      <div class="font-brand-main whitespace-pre-line" v-html="text"></div>
    </div>
  </div>
</template>

<script>
import { useAboutStore } from "@/store/about.js";
import { defineComponent } from "vue";

export default defineComponent({
  name: "about",
  setup() {
    const aboutStore = useAboutStore();
    aboutStore.get();

    const text = computed (() => aboutStore.text);
    const image = computed (() => aboutStore.image);

    return { text, image };
  },
});
</script>