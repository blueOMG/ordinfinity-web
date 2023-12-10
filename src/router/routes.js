import Layout from './../layout/index.vue';
import Cross from './../views/crosschain/index.vue'
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
	{
		path: '/cross',
		component: Cross,
		redirect: '/cross/bridge',
		children: [
			{
				path: '/cross/bridge',
				name: 'bridge',
				component: () => import('./../views/crosschain/page/bridge/index.vue')
			},
		]
	},
	
]

export default routes