<template>
	<div class="welcome container">
		<p>Welcome</p>
		<div v-if='showLogin'>
			<h2>Log in</h2>
			<signin-form @login="enterChat"/>
			<p>Don't have an account? <u><span @click="showLogin = false"> Sign up </span></u></p>
		</div>
		<div v-else>
			<h2>Register</h2>
			<signup-form @signup="enterChat"/>
			<p>Already have an account? <u> <span @click="showLogin = true"> Sign in  </span></u></p>
		</div>
	</div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue'
import SigninForm from '../components/SigninForm.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
	components:{
		SignupForm,
		SigninForm,
	}
	,setup() {
		const showLogin = ref(true);

		const router = useRouter();

		const enterChat = () => {
			router.push({name : 'chatroom'})
		};

		return {showLogin, enterChat}	
	},
}
</script>

<style>
	.welcome{
		text-align: center;
		padding: 20px 0;
	}
	.welcome form{
		width: 300px;
		margin: 20px auto;
	}
	.welcome label{
		display: block;
		margin: 20px 0 10px;
	}
	.welcome input{
		width: 100%;
		padding: 10px;
		border-radius: 20px;
		border: 1px solid #eee;
		color: #999;
		outline: none;
		margin: 10px auto;
	}
	
</style>