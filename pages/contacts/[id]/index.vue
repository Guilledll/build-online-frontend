<script setup>
definePageMeta({ middleware: ['auth', 'contact'] });

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
        <ContactProfileBanner :contact="contact" />
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