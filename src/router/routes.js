import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import ProjectCreate from '@/components/project/Create'
import ProjectEdit from '@/components/project/Edit'

Vue.use(Router)

export default new Router({
	mode:'history',
	routes:[
		{
			path:'/',
			name:'HelloWorld',
			component:HelloWorld
		},
		{
			path:'/home',
			name:'Home',
			component:Home
		},
		{
			path:'/project/create',
			name:'project.create',
			component:ProjectCreate,
		},
		{
			path:'/project/edit/:id',
			name:'project.edit',
			component:ProjectEdit,
		}
	]
});