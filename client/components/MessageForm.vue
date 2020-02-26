<template>
	<form @submit="createMessage">
		
		<div v-if="error" class="alert alert-danger mb-5" role="alert">Please sign in before</div>

	  <div class="row">
	    <div class="col-6 mb-5">
	      <input type="text" class="form-control" placeholder="First name" name="firstName">
	    </div>
	    <div class="col-6 mb-5">
	      <input type="text" class="form-control" placeholder="Last name" name="lastName">
	    </div>
	    <div class="col-12 mb-5">
	      <input type="text" class="form-control" placeholder="Message" name="message">
	    </div>
	  </div>
	  <button type="submit" class="btn btn-success btn-lg">Create</button>
	</form>
</template>

<script>
	export default {
		data() {
			return {
				error: false, 
			}
		},
		props: ['user'],
		methods: {
		  createMessage(e) {
		    e.preventDefault();

		    const message = {
		      firstName: e.target.firstName.value,
		      lastName: e.target.lastName.value,
		      content: e.target.message.value,
		      createdAt: new Date()
		    }

		  	this.insertMessage(message)
		    this.clearForm(e.target);
		  },
		  insertMessage(message) {
		  	if (this.user) {
		  		Messages.insert({message});
		  	} else {
		  		this.error = true;
		  		setTimeout(() => {
		  			this.error = false
		  		}, 2000)
		  	}
		  },
		  clearForm(form) {
		  	form.firstName.value = '';
		  	form.lastName.value = '';
		  	form.message.value = '';
		  },
		}
	}
</script>

<style scoped>
	button {
		display: block;
		margin: 0 auto;
	}
</style>