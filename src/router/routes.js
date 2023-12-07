import Layout from './../layout/index.vue';
import EMPTY from './../layout/empty.vue';
const routes = [
	{
		path: '/',
		redirect: '/app/home'
	},

	{
		path: '/app',
		component: Layout,
		children: [
			{
				path: '/app/home',
				name: '首页',
				component: () => import('./../views/home/index.vue')
			},

			
		
		]
	},
	
]

export default routes