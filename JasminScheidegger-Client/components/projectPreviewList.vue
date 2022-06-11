<template>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-1">
        <ProjectPreview v-for="project in props.projects" :key="project.id" :project="project" />
    </div>
</template>

<script setup>
    const props = defineProps({
        projects: Array
    })
</script>