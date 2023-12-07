import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import routes from "./routes";
import { start, done } from "nprogress";
const router = createRouter({
	history: process.env.NODE_ENV == "APPENV" ? createWebHashHistory() : createWebHistory(),
	routes,
});

router.beforeEach((to, from, next) => {
	start();
	next()
});

router.afterEach((to, from) => {
	done();
});

export default router;
