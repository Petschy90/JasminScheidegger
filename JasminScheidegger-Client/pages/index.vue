<template>
    <div class="grid grid-cols-4 gap-1">
        <div v-for="project in projects.data" :key="project.id" class="border border-gray-200 w-80 overflow-hidden">
            <img :src="'http://localhost:1337' + project.attributes.images.data[0].attributes.url"/>
            <p>{{ project.attributes.name }}</p>
        </div>
    </div>
</template>

<script>
import { useProjectsStore } from "@/store/projects.js";
import { defineComponent } from "vue";

export default defineComponent({
  name: "index",
  setup() {
    const projectsStore = useProjectsStore();

    projectsStore.get();

    const projects = projectsStore.projects;

    return { projects };
  },
});
</script>
