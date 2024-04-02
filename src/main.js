import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import jQuery from "jquery";
const $ = jQuery;
window.$ = $;


createApp(App).use($).use(AOS.init()).mount('#app')
