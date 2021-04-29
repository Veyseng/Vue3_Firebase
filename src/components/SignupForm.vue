<template>
	<form @submit.prevent="handleSubmit">
		<input type="text" required placeholder="Display Name" v-model="displayName">
		<input type="email" required placeholder="Email" v-model="email">
		<input type="password" required placeholder="Password" v-model="password">
		<div class="error">{{ error }}</div>

		<button>Sign up</button>

	</form>
</template>	

<script>
import { ref } from 'vue';
import useSignup from '../composables/useSignup';
export default {
	setup(props, context) {
		const { error, signup} = useSignup()

		const email = ref('');
		const password = ref('');
		const displayName = ref('');
		const handleSubmit = async() => {
			await signup(email.value, password.value, displayName.value);
			if(!error.value){
				context.emit('signup');
			}
			email.value = '';
			password.value = '';
			displayName.value = '';
		}
		return {
			email, password, handleSubmit, displayName, error
		}
	},
}
</script>