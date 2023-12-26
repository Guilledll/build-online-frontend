import { defineNuxtPlugin, useCookie, useFetch, addRouteMiddleware, useAuth } from "#imports";
import type { LoginForm } from "~/types/forms";

export default defineNuxtPlugin(async () => {
    let { user, token } = useAuth();

    function apiFetch(url: string, options?: RequestInit = {}) {
        // Load token from cookie before making the request
        getToken();

        return useFetch(url, {
            baseURL: 'http://localhost/api',
            referrer: 'http://localhost:3000',
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token || ''}`,
                ...options?.headers,
            },
            ...options,
        })
    };

    /** 
     * Save user token on a cookie and load state
     */
    function saveToken(tokenValue) {
        useCookie('access_token').value = tokenValue;
        token = tokenValue;
    }

    function getToken() {
        token = useCookie('access_token').value;
    }

    async function login(body: LoginForm) {
        const res = await apiFetch('/login', { method: "POST", body });
        if (res.data.value?.token) {
            saveToken(res.data.value.token)
        }

        return res;
    }

    /**
     * Load user form state or fetch it from API
     */
    async function getUser() {
        if (user) {
            return user;
        }

        const res = await apiFetch('/user');

        user = res.data.value;

        return user;
    }

    /**
     * Middleware to protect routes that need logged in user
     */
    addRouteMiddleware('auth', (to) => {
        if (!user && to.path !== 'login') {
            return navigateTo({ path: '/login' });
        }
    });

    /**
     * Middleware to avoid navigation to routes that require guests
     */
    addRouteMiddleware('guest', (to) => {
        if (user && to.path !== '/contacts') {
            return navigateTo({ path: '/contacts' });
        }
    })

    return { provide: { apiFetch, auth: { login, user: getUser } } };
});