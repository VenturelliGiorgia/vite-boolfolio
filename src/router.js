import { createRouter, createWebHistory } from "vue-router";
import ProjectsIndexPage from './pages/projects/index.vue';
import HomePage from './pages/Home.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/projects',
            name: 'projects.index',
            component: ProjectsIndexPage,
        }
    ]
});

export { router };