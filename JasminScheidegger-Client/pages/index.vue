<template>
    <div>
        <div v-for="project in projects" :key="project.id">
            <p>{{ project.attributes.name }}</p>
        </div>
    </div>
</template>

<script setup>
import { useProjectsStore } from "@/store/projects.js";
const projectsStore = useProjectsStore();

const projects = projectsStore.projects;
</script>
