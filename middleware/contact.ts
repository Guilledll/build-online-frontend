export default defineNuxtRouteMiddleware(async (to) => {
    const store = useContactStore();

    await store.getContact(to.params.id);

    if (!store.contact) return navigateTo('/contacts');
})
