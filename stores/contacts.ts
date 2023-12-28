export const useContactStore = defineStore('contacts', {
    state: () => ({
        contacts: [],
        contact: null
    }),
    actions: {
        async loadContacts() {
            const { $contacts } = useNuxtApp();
            const res = await $contacts.loadContacts();

            this.contacts = res.data.value.data;
        },
        async getContact(id: number) {
            const { $contacts } = useNuxtApp();
            const res = await $contacts.getContact(id);

            this.contact = res.data.value.data;
        },
        async updateContact(id, data) {
            const { $contacts } = useNuxtApp();
            const res = await $contacts.updateContact(id, data);
            return res;
        },
        async createContact() { }
    }
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useContactStore, import.meta.hot))
}