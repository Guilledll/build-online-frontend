export default defineNuxtPlugin(async (nuxtApp) => {
    try {
        // Attempt to initalize the user before loading the app
        await useAuth().loggedInUser();
    } catch (error) { }
})
