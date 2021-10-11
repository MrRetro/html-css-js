import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import { stringifyQuery, parseQuery } from "./utils/query";

Vue.use(Router)

export default new Router({
  mode: 'history',
  parseQuery,
  stringifyQuery,
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
