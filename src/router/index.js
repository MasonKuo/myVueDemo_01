import Vue from 'vue'
import Router from 'vue-router'
import vueResource from 'vue-resource'
import HelloWorld from '@/components/HelloWorld'
import Menu from '@/components/Menu'
import Movie from '@/components/Movie'

Vue.use(Router)
Vue.use(vueResource)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/movie',
      name: 'Movie',
      component: Movie
    },
  ]
})
