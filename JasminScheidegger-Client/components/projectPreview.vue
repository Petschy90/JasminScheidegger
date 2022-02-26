<template>
    <NuxtLink :to="`/project/${props.project.id}`">
        <div class="border border-gray-200 overflow-hidden">
            <img :src="'http://localhost:1337' + props.project.attributes.images.data[0].attributes.url" class="w-full "/>
            <p>{{ props.project.attributes.name }}</p>
        </div>
    </NuxtLink>
</template>

<script setup>
    const props = defineProps({
        project: Object
    })
</script>