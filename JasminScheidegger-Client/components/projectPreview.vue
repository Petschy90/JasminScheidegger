<template>
    <NuxtLink :to="`/project/${props.project.attributes.slug}`" class="border border-gray-200 hover:border-blue-500 overflow-hidden">
            <img :src="'http://localhost:1337' + props.project.attributes.images.data[0].attributes.url" class="w-full "/>
            <p>{{ props.project.attributes.name }}</p>
    </NuxtLink>
</template>

<script setup>
    const props = defineProps({
        project: Object
    })
</script>