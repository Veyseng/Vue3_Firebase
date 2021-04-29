import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap';

import './assets/main.css'
import { projectAuth } from './firebase/config'

let app
projectAuth.onAuthStateChanged(()=>{
	if(!app){
		app = createApp(App);	
		app.use(store)
		app.use(router)
		app.mount('#app')
	}
});
