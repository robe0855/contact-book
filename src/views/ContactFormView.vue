<template>
    <div>
      <h1>{{ isEdit ? "Edit Contact" : "New Contact" }}</h1>
      <form @submit.prevent="saveContact">
        <input v-model="contact.firstName" placeholder="First Name" required />
        <input v-model="contact.lastName" placeholder="Last Name" required />
        <input v-model="contact.email" placeholder="Email" required />
        <input v-model="contact.phone" placeholder="Phone" />
        <button type="submit">{{ isEdit ? "Update" : "Add" }}</button>
      </form>
      <router-link to="/">Back to Contact List</router-link>
    </div>
  </template>
  <script>
  import { getContacts, saveContacts } from "../utils/storage";
  
  export default {
    data() {
      return {
        contact: {
          id: null,
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
        },
      };
    },
    computed: {
      isEdit() {
        return !!this.$route.params.id;
      },
    },
    methods: {
      saveContact() {
        let contacts = getContacts();
        if (this.isEdit) {
          // Update existing contact
          const index = contacts.findIndex((c) => c.id === this.contact.id);
          if (index !== -1) contacts[index] = this.contact;
        } else {
          // Add new contact
          this.contact.id = Date.now().toString();
          contacts.push(this.contact);
        }
        saveContacts(contacts);
        this.$router.push(`/contact/${this.contact.id}`);
      },
    },
    mounted() {
      if (this.isEdit) {
        const id = this.$route.params.id;
        const existingContact = getContacts().find((c) => c.id === id);
        if (existingContact) this.contact = { ...existingContact };
      }
    },
  };
  </script>
  