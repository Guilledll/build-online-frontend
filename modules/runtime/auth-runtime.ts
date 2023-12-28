import { defineNuxtPlugin, useCookie, useFetch, addRouteMiddleware, useAuthStore } from "#imports";
import type { LoginForm } from "~/types/forms";

export default defineNuxtPlugin(async () => {
    let store = useAuthStore();
    const config = useRuntimeConfig();

    function apiFetch(url: string, options?: RequestInit = {}) {
        // Load token from cookie before making the request
        getToken();

        return useFetch(url, {
            baseURL: config.public.apiUrl,
            referrer: 'http://localhost:3000',
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${store.token || ''}`,
                ...options?.headers,
            },
            ...options,
        })
    };

    /** 
     * Save user token on a cookie and load store
     */
    function saveToken(tokenValue) {
        useCookie('access_token').value = tokenValue;
        store.token = tokenValue;
    }

    function getToken() {
        store.token = useCookie('access_token').value;
    }

    /**
     * Log in user, save token and returs API resonse
     */
    async function login(body: LoginForm) {
        const res = await apiFetch('/login', { method: "POST", body });
        if (res.data.value?.token) {
            saveToken(res.data.value.token)
        }

        return res;
    }

    /**
     * Load user form store or fetch it from API
     */
    async function getUser() {
        if (store.user) {
            return store.user;
        }

        const res = await apiFetch('/user');

        store.user = res.data.value;

        return store.user;
    }

    /**
     * Middleware to protect routes that need logged in user
     */
    addRouteMiddleware('auth', (to) => {
        if (!store.user && to.path !== 'login') {
            return navigateTo({ path: '/login' });
        }
    });

    /**
     * Middleware to avoid navigation to routes that require guests
     */
    addRouteMiddleware('guest', (to) => {
        if (store.user && to.path !== '/contacts') {
            return navigateTo({ path: '/contacts' });
        }
    })

    return { provide: { apiFetch, auth: { login, user: getUser } } };
});