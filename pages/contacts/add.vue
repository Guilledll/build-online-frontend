<script setup>
definePageMeta({ middleware: 'auth' });

const store = useContactStore();
const form = ref({});

async function save(data) {
  console.log(data);
  const res = await store.createContact(data);

  if (!res.error.value) {
    return navigateTo('/contacts')
  }
}
</script>

<template>
  <div class="flex flex-col gap-8 w-full sm:px-5 sm:mt-10 lg:px-20">
    <ContactProfileBanner :name="form.name" :title="form.title" :picture="form.picture" is-modifing
      class="hidden sm:flex" />
    <ContactDataForm :data="form" @save="save" />
  </div>
</template>

<style scoped></style>
