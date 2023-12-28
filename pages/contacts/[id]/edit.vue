<script setup>
definePageMeta({ middleware: ['auth', 'contact'] });

const { params } = useRoute();
const store = useContactStore();
const { contact } = storeToRefs(store);

const errors = ref({});
const form = ref({
  name: contact.value.name,
  title: contact.value.title,
  picture: contact.value.picture,
  address: contact.value.address,
  phone: contact.value.phone,
  email: contact.value.email,
});

async function save(data) {
  const res = await store.updateContact(params.id, data);

  if (res.error.value) {
    errors.value = res.error.value.data.errors;
    return;
  }

  return navigateTo('/contacts')
}
</script>

<template>
  <div class="flex flex-col gap-8 w-full sm:px-5 sm:mt-10 lg:px-20">
    <ContactProfileBanner :name="form.name" :title="form.title" :picture="form.picture" is-modifing
      class="hidden sm:flex" />
    <ContactDataForm :data="form" :errors="errors" @save="save" />
  </div>
</template>
