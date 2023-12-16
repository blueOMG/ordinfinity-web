import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/elementPlusTheme.scss'
import 'nprogress/nprogress.css'
import './style.css'
import './assets/css/index.scss'
import '/node_modules/swiper/dist/css/swiper.css';
import i18n from './assets/js/i18n';
import '@vant/touch-emulator';
import { Loading } from 'vant'
import 'vant/lib/index.css';
import store from './store/index'
import EventBus from '@/utils/eventBus'
import Particles from "particles.vue3";
// import { registerSW } from 'virtual:pwa-register';
let app = createApp(App)
app.use(i18n);
app.use(router)
app.use(store)
app.use(Loading)
app.use(Particles)
app.mount('#app')

// registerSW();

let $bus = new EventBus()
app.provide('$bus', $bus)
app.config.globalProperties.$bus = $bus
