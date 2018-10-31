import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// Auth components
import Register from '@/components/auth/Register'
import Login from '@/components/auth/Login'

// Task components
import Task from '@/components/task/Task'

// Board components
import Board from '@/components/board/Board'
import SingleBoard from '@/components/board/SingleBoard'

Vue.use(Router)

const routes = [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld,
    meta: {
      requiresVisitor: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      requiresVisitor: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      requiresVisitor: true
    }
  },
  {
    path: '/logout',
    name: 'logout',
    component: Login,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/tasks',
    name: 'Task',
    component: Task,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/boards',
    name: 'Board',
    component: Board,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/boards/:id',
    name: 'SingleBoard',
    component: SingleBoard,
    meta: {
      requiresAuth: true
    }
  }
];

export default new Router({
  routes: routes,
  mode: 'history'
})
