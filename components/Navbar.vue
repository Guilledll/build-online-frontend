<script lang="ts" setup>
const route = useRoute();
const showBackButton = computed(() =>
  route.path !== '/login' && route.path !== '/contacts'
);
</script>

<template>
  <nav class="h-24 py-9 px-4 sm:bg-pink-50 sm:px-11">
    <NuxtLink v-show="showBackButton" to="/contacts" class="flex items-center gap-1 font-redhat text-build">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
      </svg>
      Back
    </NuxtLink>
  </nav>
</template>
