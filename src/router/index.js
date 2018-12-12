import Vue from 'vue'
import Router from 'vue-router'
import postList from '../components/postList'
import Article from '../components/Article'
import userinfo from '../components/userinfo'
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
      path:'/topic/:id',
      components:{
        main:Article
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
