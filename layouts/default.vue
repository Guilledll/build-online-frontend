<script lang="ts" setup>
const config = useRuntimeConfig();
useHead({
  script: [
    { src: `https://maps.googleapis.com/maps/api/js?key=${config.public.placesKey}&libraries=places`, defer: true }
  ]
});
</script>

<template>
  <div class="h-full">
    <Navbar />
    <main class="px-5">

      <slot />
    </main>
  </div>
</template>

<style scoped></style>
