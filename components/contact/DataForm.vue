<script setup>
const props = defineProps({ data: { type: Object, required: true } });



</script>

<template>
  <form @submit.prevent="submit" class="mb-5">
    <div class="grid grid-cols-1 grid-flow-row gap-x-20 sm:grid-cols-2">
      <div class="grid grid-cols-1 gap-y-3">
        <FormInput v-model="data.name" id="name" label="Name" />
        <FormInput v-model="data.title" id="title" label="Title" />
        <FormInput v-model="data.picture" id="picture" label="Profile Picture" />
      </div>
      <div class="grid grid-cols-1 gap-y-3">
        <FormInput v-model="data.address" id="address" label="Address" />
        <FormInput v-model="data.phone" id="phone" type="tel" label="Phone" />
        <FormInput v-model="data.email" id="email" type="email" label="Email" />
      </div>
    </div>
    <div class="flex gap-4 sm:max-w-xs mx-auto mt-10">
      <ActionButton :to="`/contacts/${$route.params.id}`" class="flex justify-center w-full">
        CANCEL
      </ActionButton>
      <ActionButton type="submit" class="flex justify-center w-full">
        SAVE
      </ActionButton>
    </div>
  </form>
</template>

<style scoped></style>
