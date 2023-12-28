<script setup>
definePageMeta({
    middleware: ['auth', async function (to) {
        const store = useContactStore();

        await store.getContact(to.params.id);

        if (!store.contact) return navigateTo('/contacts');
    }]
});

const store = useContactStore();



</script>

<template>
    <div>
        {{ store.contact }}
    </div>
</template>