import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// Auth components
import Register from '@/components/auth/Register'
import Login from '@/components/auth/Login'

// Task components
import Task from '@/components/task/Task'

Vue.use(Router)

const routes = [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/tasks',
    name: 'Task',
    component: Task
  }
];

export default new Router({
  routes: routes,
  mode: 'history'
})
