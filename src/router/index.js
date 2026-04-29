import { createRouter, createWebHistory } from 'vue-router';
import TaskView from '@/views/TaskView.vue';

const routes = [
  { path: '/', component: TaskView },
  { path: '/about', component: () => import('@/views/AboutView.vue') }
];

export default createRouter({ history: createWebHistory(), routes });
