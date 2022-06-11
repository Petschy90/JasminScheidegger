<template>
<div class="text-gray-600 font-brand-main">
    <Disclosure v-slot="{ open }">
        <div class="p-8 flex items-center justify-between md:block">
            <NuxtLink to="/" class="text-2xl md:text-[2.33rem] tracking-[0.07em] uppercase font-brand-heading font-thin">Jasmin Scheidegger</NuxtLink>
            <div class="flex md:hidden">
                <!-- Mobile menu button -->
                <DisclosureButton class="bg-white inline-flex items-center justify-center p-2 rounded-md hover:text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200">
                    <span class="sr-only">Open main menu</span>
                    <MenuAlt1Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                    <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
                </DisclosureButton>
            </div>
        </div>
        <DisclosurePanel class="md:hidden">
            <div class="px-8 pt-2 pb-3 border-b border-b-gray-200 shadow-sm mb-4">
                <NuxtLink to="/illustration" class="block hover:text-gray-800 transition ease-in-out duration-75">illustration</NuxtLink>
                <NuxtLink to="/photo" class="block hover:text-gray-800 transition ease-in-out duration-75">photo</NuxtLink> 
                <NuxtLink to="/typography" class="block hover:text-gray-800 transition ease-in-out duration-75">typo</NuxtLink> 
                <NuxtLink to="/about" class="block hover:text-gray-800 transition ease-in-out duration-75">about</NuxtLink> 
                <NuxtLink to="/contact" class="block hover:text-gray-800 transition ease-in-out duration-75">contact</NuxtLink> 
            </div>
        </DisclosurePanel>
    </Disclosure>
    <div class="md:flex px-8">
        <div class="hidden md:block md:shrink-0 w-48">
            <Navigation></Navigation>
        </div>
        <div class="md:grow">
            <slot />
        </div>
    </div>
</div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/vue'
import { MenuAlt1Icon, XIcon } from '@heroicons/vue/outline'

// Importing Tailwindcss for this layout
import '@/assets/css/tailwind.css'
</script>