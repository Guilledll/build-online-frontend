import { defineNuxtPlugin } from "#imports";

export default defineNuxtPlugin({
    enforce: "post", // Post loading to access `$apiFetch` inject on previous plugin
    setup: async () => {
        const { $apiFetch } = useNuxtApp();

        /**
         * Fetch all contacts for the current user
         */
        async function loadContacts() {
            return $apiFetch('/contacts');
        }

        /**
         * Update the given contact information
         */
        async function updateContact(id: string, body: object) {
            return $apiFetch(`/contacts/${id}`, { method: "PUT", body });
        }

        /**
         * Add a new contact
         */
        async function createContact(body: object) {
            return $apiFetch(`/contacts`, { method: "POST", body });
        }

        /**
         * Fetch contact by ID
         */
        async function getContact(id: number) {
            return $apiFetch(`/contacts/${id}`);
        }

        return { provide: { contacts: { loadContacts, updateContact, createContact, getContact } } }
    }
});
