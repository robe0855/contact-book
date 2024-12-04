import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);
app.mount('#app');
import { getContacts, saveContacts } from './utils/storage';

const initializeDummyData = () => {
  const dummyContacts = [
    {
      id: "1",
      firstName: "Mike",
      lastName: "Doe",
      email: "mike.doe@example.com",
      phone: "123-456-7890",
    },
    {
      id: "2",
      firstName: "Matt",
      lastName: "Smith",
      email: "matt.smith@example.com",
      phone: "987-654-3210",
    },
    {
        id: "1",
        firstName: "Gillian",
        lastName: "Doe",
        email: "gillian.doe@example.com",
        phone: "234-567-8910",
      },
      {
        id: "2",
        firstName: "Sacha",
        lastName: "Smith",
        email: "sacha.smith@example.com",
        phone: "910-111-2131",
      },
  ];
  if (!getContacts().length) saveContacts(dummyContacts);
};

initializeDummyData();
