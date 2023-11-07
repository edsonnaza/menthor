import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter ({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/coaches'}
    ]
});

export default router;