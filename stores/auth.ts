export const useAuthStore = defineStore('auth', {
    state: () => {
        return {
            user: null,
            token: null
        }
    },
    actions: {
        async login(payload: object) {
            const { $auth } = useNuxtApp();

            return $auth.login(payload);
        },
        async loggedInUser() {
            const { $auth } = useNuxtApp();

            this.user = await $auth.user();
        }
    }
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}