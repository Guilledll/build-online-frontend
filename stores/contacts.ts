export const useContactStore = defineStore('contacts', {
    state: () => ({
        contacts: []
    }),
    actions: {
        async loadContacts() {
            const { $contacts } = useNuxtApp();
            const res = await $contacts.loadContacts();

            this.contacts = res.data.value.data;

            return res.data.value.data;
        },
        async getContact() { },
        async updateContact() { },
        async createContact() { }
    }
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useContactStore, import.meta.hot))
}