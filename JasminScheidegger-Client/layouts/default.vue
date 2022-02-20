<template>
<div class="flex space-x-4 text-gray-600">
    <div class="shrink-0 p-8">
        <NuxtLink to="/" class="uppercase font-interstate">Jasmin Scheidegger</NuxtLink>
        <Navigation class="mt-8"></Navigation>
    </div>
    <div class="grow p-8">
        <slot />
    </div>
</div>
</template>

<script setup>
// Importing Tailwindcss for this layout
import '@/assets/css/tailwind.css'

</script>