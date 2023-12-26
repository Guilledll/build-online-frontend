import { defineNuxtModule, createResolver, addPlugin } from "@nuxt/kit";

export default defineNuxtModule({
    meta: {
        name: 'auth-module',
        configKey: "AuthModule",
    },
    setup(options, nuxt) {
        const { resolve } = createResolver(import.meta.url)

        /**
         * Inject global utility `$auth` to interact with auth services
         */
        addPlugin(resolve('./runtime/auth-runtime'));
    }
});