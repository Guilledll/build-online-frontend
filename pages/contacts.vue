<script lang="ts" setup>
definePageMeta({ middleware: 'auth' })

const { user } = useAuth();
</script>

<template>
  <div class="w-full bg-red-500">
    {{ user }}
  </div>
</template>
