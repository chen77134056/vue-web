import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Diy from '@/components/Diy'
import Adminbig from '@/components/Adminbig'
import Admin from '@/components/Admin'

Vue.use(Router)

export default new Router({
  mode:'history', //可以去除url中的#,且可以前进、后退，但是对浏览器的要求高
  routes: [
    {
      path: '/admin',
      name: 'Adminbig',
      component: Adminbig,
      children:[
        {
          path: 'index',
          component: Admin
        }
      ]
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/123/:color',
      name: 'Diy',
      component: Diy
    }
  ]
})
