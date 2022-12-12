
import Main from '@/pages/Main'
import TodoCreate from '@/pages/TodoCreate'
import TodoEdit from '@/pages/TodoEdit'

import Error_404 from '@/pages/Error_404'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
      path: "/404",
      name: "Error_404",
      component: Error_404,
    },
    { 
        path: '/', 
        name: 'Home',
        component: Main 
    },
    { 
        path: '/todo-create', 
        name: 'TodoCreate',
        component: TodoCreate 
    },
    { 
        path: '/todo-edit/:id', 
        name: 'TodoEdit',
        component: TodoEdit 
    },
    { path: '/:catchAll(.*)', redirect: '/404', hidden: true }
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

console.log(router);
export default router;