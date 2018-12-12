import Vue from 'vue'
import Router from 'vue-router'
import postList from '../components/postList'
import Article from '../components/Article'
import userinfo from '../components/userinfo'
import Aside from '../components/Aside'
Vue.use(Router)

export default new Router({
  routes: [
    {
      name:'index',
      path:'/',
      components:{
        main:postList
      }
    },
    {
      name:'pcontent',
      path:'/topic/:id&author=:name',
      components:{
        main:Article,
        Aside:Aside

      }
    },
    {
      name:'user_info',
      path:'/userinfo/:name',
      components:{
        main:userinfo
      }
    }
  ]
})
