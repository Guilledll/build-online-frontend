import { defineNuxtModule, createResolver, addPlugin } from "@nuxt/kit";

export default defineNuxtModule({
    meta: {
        name: 'contact-module',
        configKey: "ContactModule",
    },
    setup(options, nuxt) {
        const { resolve } = createResolver(import.meta.url)

        /**
         * Inject global utility `$contacts` to interact with contact services
         */
        addPlugin(resolve('./runtime/contacts-runtime'));
    }
});