<template>
    <div>
        <div v-for="project in projects.data" :key="project.id" class="border border-gray-200 w-32 overflow-hidden">
            <img :src="'http://localhost:1337' + project.attributes.images.data[0].attributes.url"/>
            <p>{{ project.attributes.name }}</p>
        </div>
    </div>
</template>

<script setup>
import { useProjectsStore } from "@/store/projects.js";
const projectsStore = useProjectsStore();

const projects = projectsStore.projects;

</script>
