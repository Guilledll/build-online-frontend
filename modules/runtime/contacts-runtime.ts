import { defineNuxtPlugin } from "#imports";

export default defineNuxtPlugin({
    enforce: "post",
    setup: async () => {
        const { $apiFetch } = useNuxtApp();

        async function loadContacts() {
            return $apiFetch('/contacts');
        }

        // TODO: implement functions
        async function updateContact() { }

        async function createContact() { }

        async function getContact(id: number) { }

        return { provide: { contacts: { loadContacts, updateContact, createContact, getContact } } }
    }
});
