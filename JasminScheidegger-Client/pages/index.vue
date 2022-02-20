<template>
    <div>
        <h1 class="text-red-400">Jasmin Scheidegger</h1>
        <div v-for="project in projects" :key="project.id">
            <p>{{ project.attributes.name }}</p>
        </div>
    </div>
</template>

<script setup>
import '@/assets/css/tailwind.css'
import { useProjectsStore } from "@/store/projects.js";
const projectsStore = useProjectsStore();

const projects = projectsStore.projects;
</script>
