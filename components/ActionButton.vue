<script setup>
import { NuxtLink } from "#components";

const props = defineProps({ to: { type: String } });
const emit = defineEmits(['click'])

const component = computed(() => props.to ? NuxtLink : 'button')
const action = computed(() => !props.to ? emit('click') : null);
</script>

<template>
    <component :is="component" :to="props.to"
        class="rounded-full font-sans font-medium bg-[#9378FF] text-white px-11 py-4 text-lg mx-auto hover:bg-violet-400 cursor-pointer shadow-md"
        @click="action">
        <slot />
    </component>
</template>