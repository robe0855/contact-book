<template>
    <div>
      <h1>Contact Book</h1>
      <input
        v-model="searchQuery"
        placeholder="Search contacts..."
        type="text"
      />
      <ul>
        <li v-for="contact in filteredContacts" :key="contact.id">
          <router-link :to="`/contact/${contact.id}`">
            {{ contact.lastName }}, {{ contact.firstName }}
          </router-link>
        </li>
      </ul>
    </div>
  </template>
  <script>
  import { getContacts } from "../utils/storage";
  
  export default {
    data() {
      return {
        contacts: [],
        searchQuery: "",
      };
    },
    computed: {
      filteredContacts() {
        const query = this.searchQuery.toLowerCase();
        return this.contacts
          .filter(
            (contact) =>
              contact.firstName.toLowerCase().includes(query) ||
              contact.lastName.toLowerCase().includes(query)
          )
          .sort((a, b) => a.lastName.localeCompare(b.lastName));
      },
    },
    mounted() {
      this.contacts = getContacts();
    },
  };
  </script>
  