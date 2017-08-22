import Vue from 'vue'
import Router from 'vue-router'
import Rank from 'components/rank/rank'
import Recommend from 'components/recommend/recommend'
import Search from 'components/search/search'
import Singer from 'components/singer/singer'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/rank',
      // name: 'rank',
      component: Rank
    },
    {
      path: '/recommend',
      // name: 'recommend',
      component: Recommend
    },
    {
      path: '/search',
      // name: 'search',
      component: Search
    },
    {
      path: '/singer',
      // name: 'singer',
      component: Singer
    }
  ]
})
