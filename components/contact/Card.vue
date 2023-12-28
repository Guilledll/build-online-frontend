<script setup>
const props = defineProps({ contact: { type: Object } });

const contactLink = computed(() => `/contacts/${props.contact.id}`);
</script>

<template>
  <NuxtLink :to="contactLink" class="flex gap-5 sm:rounded-2xl bg-white shadow-sm py-6 pl-7 pr-5">
    <img :src="contact.picture" alt="User profile" class="rounded-full h-16 w-16 bg-red-100" />
    <div class="flex justify-center flex-col w-full min-w-0">
      <div class="flex justify-between items-center ">
        <p class="font-redhat font-bold text-xl truncate">{{ contact.name }}</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </div>
      <p class="text-build text-xs truncate">{{ contact.title }}</p>
    </div>
  </NuxtLink>
</template>