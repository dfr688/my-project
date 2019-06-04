import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'  //@代表src文件
import Loan from '@/components/Loan'
import Commend from '@/components/Commend'
import My from '@/components/My'
import Problem from "@/components/Problem"
import Suggest from "@/components/Suggest"
import About from "@/components/About"
import Set from "@/components/Set"
import Detail from "@/components/Detail"
import Login from "@/components/Login"
import listDetail from "@/components/listDetail"
import listDetail1 from "@/components/listDetail1"
import Other from "@/components/Other"

Vue.use(Router)

// 配置路由
const router = new Router({
	mode: "history",
	routes: [
		{
			path: '/',
			redirect: '/home'
		},
		{
			path: '/home',
			name: 'home',
			component: Home
		},
		{
			path: '/detail/:id',
			name: "detail",
			component: Detail,
// 			meta: {
// 				requiresAuth: true
// 			}
		},
		{
			path: '/listdetail/:goodsId/:subject',
			name: 'listdetail',
			component: listDetail
		},
		{
			path: '/listdetail1/:labelName/:id',
			name: 'listdetail1',
			component: listDetail1
		},
		{
			path: '/loan',
			name: 'loan',
			component: Loan
		},
		{
			path: '/commend',
			name: 'commend',
			component: Commend
		},
		{
			path: '/my',
			name: 'my',
			component: My
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/problem',
			component: Problem
		},
		{
			path: '/suggest',
			component: Suggest
		},
		{
			path: '/about',
			component: About
		},
		{
			path: '/set',
			component: Set,
		},
		{
			path: '/other',
			name: 'other',
			component: Other
		},
		{
			path: '*',
			redirect: "/home"
		}
	]
});
//  路由权限控制 进入Detail组件时候 需要登录状态
//    	router.beforeEach((to,from,next) => {
// 		// console.log(to.meta.requiresAuth)
// 		if(to.meta.requiresAuth){
// 			// 如果不为空 说明已经登录 直接放行
// 			if(localStorage.getItem("mobile") != null && localStorage.getItem("sessionId") != null){
// 				next();
// 			}else{
// 				next({path: "/login"});
// 			}
// 		}else{
// 			next();
// 		}
//    	});
 
export default router;