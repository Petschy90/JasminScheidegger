<template>
  <div>
    <h1>About</h1>
    <p>{{text}}</p>
    <div v-if="image"> 
      <img :src="'http://localhost:1337' + image.attributes.url" />
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

    const text = aboutStore.text;
    const image = aboutStore.image;

    return { text, image };
  },
});
</script>