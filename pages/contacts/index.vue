<script setup>
definePageMeta({ middleware: 'auth' });

const contactStore = useContactStore();
const search = ref('');

await useAsyncData(() => contactStore.loadContacts());

const filteredContacts = computed(() => {
  if (!search.value) {
    return contactStore.contacts
  }

  return contactStore.contacts.filter(c => { return c.name.toLowerCase().includes(search.value.toLowerCase()) })
})
</script>

<template>
  <div class="flex justify-center flex-col w-full sm:px-16 sm:mt-16">
    <div class="flex flex-col gap-9">
      <h3 class="font-redhat font-black text-4xl">Contacts</h3>
      <SearchInput v-model="search" />
    </div>
    <div v-if="!filteredContacts.length" class="mt-20 space-y-8">
      <div class="bg-[#fbeeff] rounded-full h-48 w-48 border border-[#A5A5A5] flex justify-center items-center mx-auto">
        <img src="/img/contacts.png" alt="contacts">
        <svg xmlns="http://www.w3.org/2000/svg" width="114" height="148" viewBox="0 0 114 148" fill="none"
          class="absolute">
          <path d="M113 1L1 147" stroke="#A5A5A5" stroke-width="2" />
        </svg>
      </div>
      <div class="flex flex-col gap-8 items-center justify-center">
        <p class="text-xl font-redhat font-bold">Add contacts to your database</p>
        <LazyActionButton to="/contacts/add" class="px-14 py-4">
          Add new contacts
        </LazyActionButton>
      </div>
    </div>
    <div v-else
      class="grid grid-cols-1 -mx-5 mt-16 gap-0 md:max-w-6xl md:mx-auto sm:gap-y-4 md:grid-cols-2 md:gap-x-12 lg:gap-x-20 xl:grid-cols-3 [&>*:nth-child(even)]:bg-gray-50 [&>*:nth-child(even)]:sm:bg-white">
      <ContactCard v-for="contact in filteredContacts" :contact="contact" :key="contact.id" />
    </div>
  </div>
  <LazyActionButton to="/contacts/add" v-if="!filteredContacts.length"
    class="absolute sm:hidden right-5 !p-0 !bg-transparent top-auto bottom-5 rounded-full w-16 h-16 flex items-center justify-center text-4xl">
    <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 84 84" fill="none">
      <path d="M84 42C84 65.196 65.196 84 42 84C18.804 84 0 65.196 0 42C0 18.804 18.804 0 42 0C65.196 0 84 18.804 84 42Z"
        fill="#9378FF" />
      <path d="M43.826 18.2609V65.3164" stroke="white" stroke-width="7" />
      <path d="M67.1425 41.2053L20.0869 41.2053" stroke="white" stroke-width="7" />
    </svg>
  </LazyActionButton>
</template>
