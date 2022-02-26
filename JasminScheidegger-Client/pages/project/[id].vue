<template>
    <div>
        <h2>Projekt {{project.attributes.name}}</h2>
        <img v-for="image in project.attributes.images.data" :key="image.id" :src="'http://localhost:1337' + image.attributes.url" />
    </div>
</template>

<script setup>
    import { useProjectsStore } from "@/store/projects.js";
    
    const route = useRoute();
    const projectsStore = useProjectsStore();
    projectsStore.get();

    const project = computed(() => projectsStore.project(Number(route.params.id)))
</script>
