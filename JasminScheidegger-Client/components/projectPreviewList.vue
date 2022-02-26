<template>
    <div v-for="project in props.projects" :key="project.id" >
        <ProjectPreview :project="project" />
    </div>
</template>

<script setup>
    const props = defineProps({
        projects: Array
    })
</script>