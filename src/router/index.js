import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'  //@代表src文件
import Loan from '@/components/Loan'
import Commend from '@/components/Commend'
import My from '@/components/My'
import Info from '@/components/Info'
import Credit from "@/components/Credit"
import Collection from "@/components/Collection"
import Problem from "@/components/Problem"
import Suggest from "@/components/Suggest"
import About from "@/components/About"
import Set from "@/components/Set"
import Modify from "@/components/Modify"
import Detail from "@/components/Detail"
import Login from "@/components/Login"
import Register from "@/components/Register"
import Forget from "@/components/Forget"
import Search from "@/components/Search"
import listDetail from "@/components/listDetail"
import listDetail1 from "@/components/listDetail1"

Vue.use(Router)

// 配置路由
export default new Router({
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
			component: Detail
		},
		{
			path: '/listdetail/:goodsId/:subject',
			name: 'listdetail',
			component: listDetail
		},
		{
			path: '/listdetail1',
			name: 'listdetail1',
			component: listDetail1
		},
		{
			path: '/loan',
			name: 'loan',
			component: Loan
		},
		{
			path: '/search',
			name: 'search',
			component: Search
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
			path: '/register',
			component: Register
		},
		{
			path: '/forget',
			component: Forget
		},
		{
			path: '/info',
			component: Info
		},
		{
			path: '/credit',
			component: Credit
		},
		{
			path: '/collection',
			component: Collection
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
			path: '/modify',
			component: Modify
		}
	]
})