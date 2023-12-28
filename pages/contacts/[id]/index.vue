<script setup>
definePageMeta({
    middleware: ['auth', async function (to) {
        const store = useContactStore();

        await store.getContact(to.params.id);

        if (!store.contact) return navigateTo('/contacts');
    }]
});

const store = useContactStore();
const { contact } = storeToRefs(store);

const dataList = computed(() => {
    return [
        { field: "Address", value: contact.value.address },
        { field: "Email", value: contact.value.email },
        { field: "Phone", value: contact.value.phone },
    ]
});

</script>

<template>
    <div class="w-full space-y-8 sm:px-5 sm:mt-10 lg:px-20">
        <div
            class="w-full flex flex-col items-center bg-pink-50 h-auto rounded-2xl sm:bg-gray-200 sm:h-72 sm:relative sm:mb-60">
            <div class="flex flex-col items-center gap-4 p-2 sm:absolute sm:-bottom-1/2">
                <div>
                    <!-- <img src="" :alt="`${contact.name} image`"> -->
                    <div
                        class="h-20 w-20 bg-pink-300 rounded-full border border-transparent sm:h-44 sm:w-44 sm:border-black">
                    </div>
                </div>
                <div class="space-y-1">
                    <p class="font-redhat font-bold text-2xl text-black">{{ contact.name }}</p>
                    <p class="text-[#99879D] text-base font-normal"> {{ contact.title }}</p>
                </div>
            </div>
            <ActionButton :to="`/contacts/${$route.params.id}/edit`"
                class="absolute flex justify-center bottom-6 left-6 right-6 max-w-full flex-grow sm:left-auto">
                EDIT
            </ActionButton>
        </div>
        <div class="grid grid-cols-1 gap-y-6 gap-x-10 max-w-lg mx-auto sm:grid-cols-2">
            <template v-for="data in dataList" :key="data.field">
                <div v-if="data.value">
                    <p class="font-redhat font-bold">{{ data.field }}</p>
                    <p class="text-[#99879D] leading-6 text-base text-wrap">{{ data.value }}</p>
                </div>
            </template>
        </div>
    </div>
</template>