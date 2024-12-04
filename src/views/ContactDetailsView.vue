<template>
    <div v-if="contact">
      <h1>{{ contact.firstName }} {{ contact.lastName }}</h1>
      <p>Email: {{ contact.email }}</p>
      <p>Phone: {{ contact.phone }}</p>
      <router-link :to="`/edit-contact/${contact.id}`">Edit</router-link>
      <button @click="deleteContact">Delete</button>
      <router-link to="/">Back to Contact List</router-link>
    </div>
  </template>
  <script>
  import { getContacts, deleteContact } from "../utils/storage";
  
  export default {
    data() {
      return {
        contact: null,
      };
    },
    methods: {
      deleteContact() {
        deleteContact(this.contact.id);
        this.$router.push("/");
      },
    },
    mounted() {
      const id = this.$route.params.id;
      this.contact = getContacts().find((c) => c.id === id);
    },
  };
  </script>
  