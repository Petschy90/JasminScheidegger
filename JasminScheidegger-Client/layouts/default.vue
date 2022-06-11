<template>
<div class=" text-gray-600 font-brand-main">
    <div class="p-8">
        <NuxtLink to="/" class="text-2xl md:text-[2.33rem] tracking-[0.07em] uppercase font-brand-heading font-thin">Jasmin Scheidegger</NuxtLink>
    </div>
    <div class="flex px-8">
        <div class="shrink-0 w-48">
            <Navigation></Navigation>
        </div>
        <div class="grow">
            <slot />
        </div>
    </div>
</div>
</template>

<script setup>
// Importing Tailwindcss for this layout
import '@/assets/css/tailwind.css'
</script>