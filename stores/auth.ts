import { defineStore } from "pinia";
import type { LoginForm } from "~/types/forms";

export const useAuth = defineStore('auth', {
    state: () => {
        return {
            user: null,
            token: null
        }
    },
    actions: {
        async login(payload: LoginForm) {
            const { $auth } = useNuxtApp();

            return $auth.login(payload);
        },
        async loggedInUser() {
            const { $auth } = useNuxtApp();

            this.user = await $auth.user();
        }
    }
})