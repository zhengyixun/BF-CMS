import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld';
import Login from "@/components/Login";
//引入表格
import Table from '@/components/Table';
import Index from '@/components/Index';
import Pro from '@/components/Pro';
import Error from '@/components/Error';  //非法进入错误信息

Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/',
      name:'Login',
      component:Login
    },
    {
      path: '/Main',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
        {path:"/Main",component:Index},
        {path:"/Main/Table",component:Table},
        {path:"/Main/Pro",component:Pro},
      ]
    },
    {
      path:'/Error',
      name:'Error',
      component:Error
    }
  ]
});
