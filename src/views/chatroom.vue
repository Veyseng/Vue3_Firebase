<template>
	<div class="container">
		<nav-bar></nav-bar>
		<chat-form></chat-form>
	</div>
</template>

<script>
import navbar from '../components/NavBar.vue'
import getUser from '../composables/getUser'
import {watch} from 'vue'
import {useRouter} from 'vue-router'
import chatForm from '../components/ChatForm.vue'

export default {
	components:{
		'nav-bar':navbar,
		'chat-form': chatForm,
	},
	setup() {
		const {user} = getUser();
		const router = useRouter();
		watch(user,()=>{
			if(!user.value){
				router.push({name : 'Welcome'})
			}
		});
		
	},
}
</script>

