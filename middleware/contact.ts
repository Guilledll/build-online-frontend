export default defineNuxtRouteMiddleware(async (to) => {
    const store = useContactStore();

    // Fetch contact only if it is not loaded yet
    if (!store.contact || store.contact?.id !== Number(to.params.id)) {
        await store.getContact(to.params.id);
    }

    if (!store.contact) return navigateTo('/contacts');
})
