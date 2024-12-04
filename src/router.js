import { createRouter, createWebHistory } from 'vue-router';
import StartView from './views/StartView.vue';
import ContactDetailsView from './views/ContactDetailsView.vue';
import ContactFormView from './views/ContactFormView.vue';

const routes = [
  { path: '/', component: StartView },
  { path: '/contact/:id', component: ContactDetailsView },
  { path: '/new-contact', component: ContactFormView },
  { path: '/edit-contact/:id', component: ContactFormView }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
