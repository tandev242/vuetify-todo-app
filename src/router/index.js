import Vue from 'vue'
import Router from 'vue-router'
import Todo from '@/views/Todo'
import About from '@/views/About'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Todo',
      component: Todo
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
