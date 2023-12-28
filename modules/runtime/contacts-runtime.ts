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
        async function updateContact() { }

        /**
         * Add a new contact
         */
        async function createContact() { }

        /**
         * Fetch contact by ID
         */
        async function getContact(id: number) {
            return $apiFetch(`/contacts/${id}`);
        }

        return { provide: { contacts: { loadContacts, updateContact, createContact, getContact } } }
    }
});
