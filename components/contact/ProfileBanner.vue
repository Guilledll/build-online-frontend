<script lang="ts" setup>
defineProps({
  name: { type: String },
  title: { type: String },
  picture: { type: String },
  isModifing: { type: Boolean, default: false }
});
const defaultImg = 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'
</script>

<template>
  <div
    class="w-full flex flex-col items-center bg-pink-50 h-auto rounded-2xl sm:bg-gray-200 sm:h-72 sm:relative sm:mb-40">
    <div class="flex flex-col items-center gap-4 p-2 sm:absolute sm:-bottom-1/2">
      <div>
        <img :src="picture || defaultImg" alt="profile image"
          class="h-20 w-20 bg-white rounded-full border border-transparent sm:h-44 sm:w-44 sm:border-black" />
      </div>
      <div class="space-y-1 text-center">
        <p class="font-redhat font-bold text-2xl text-black">{{ name }}</p>
        <p class="text-build text-base font-normal">{{ title }}</p>
      </div>
    </div>
    <LazyActionButton v-if="!isModifing" :to="`/contacts/${$route.params.id}/edit`"
      class="absolute flex justify-center bottom-6 left-6 right-6 max-w-full flex-grow sm:left-auto">
      EDIT
    </LazyActionButton>
    <div v-else class="absolute bottom-2 right-2 p-2 rounded hover:bg-gray-100 cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M0 17.8947H20V20H0V17.8947ZM11.1111 4.02947V15.7895H8.88889V4.02947L2.14333 10.4211L0.572222 8.93263L10 0L19.4278 8.93158L17.8567 10.42L11.1111 4.03158V4.02947Z"
          fill="#99879D" />
      </svg>
    </div>
  </div>
</template>

<style scoped></style>
